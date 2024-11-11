import validateUserAccess from "@/lib/server/validate-user-access";
import { NextResponse } from "next/server";
import db from "@/db";
import {
  projects,
  projectsMembers,
  projectsTags,
  tags,
  users,
} from "@/db/schema";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";

export async function GET() {
  const checkPermission = await validateUserAccess(["core", "lead", "member"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });

  const projectsData = await db
    .select({
      id: projects.id,
      title: projects.title,
      createdAt: projects.createdAt,
      editedAt: projects.editedAt,
      authorName: users.name,
      authorFirstName: users.firstName,
      authorLastName: users.lastName,
    })
    .from(projects)
    .leftJoin(users, eq(projects.authorId, users.id));

  return NextResponse.json(projectsData);
}

export async function POST(request: Request) {
  const session = await auth();

  const checkPermission = await validateUserAccess(["core", "lead", "member"]);
  if (!checkPermission || !session?.user?.id)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });

  const body = (await request.json()) as {
    title: string;
    description: string[];
    github: string;
    participants: string[];
    tags: string[];
  };

  const createProject = await db
    .insert(projects)
    .values({
      title: body.title,
      description: body.description,
      github: body.github,
      defaultImage: "NO_IMAGE",
      authorId: session.user.id,
    })
    .returning({
      id: projects.id,
    });

  const createTags = await db
    .insert(tags)
    .values(body.tags.map((tag) => ({ name: tag })))
    .returning({ id: tags.id });

  const linkProjectToTags: { projectId: string; tagId: string }[] = [];

  for (const tag of createTags) {
    linkProjectToTags.push({
      projectId: createProject[0].id,
      tagId: tag.id,
    });
  }

  await db.insert(projectsTags).values(linkProjectToTags);

  const linkProjectToUserData: { projectId: string; userId: string }[] = [];

  for (const participant of body.participants) {
    linkProjectToUserData.push({
      projectId: createProject[0].id,
      userId: participant,
    });
  }

  await db.insert(projectsMembers).values(linkProjectToUserData);

  return NextResponse.json(createProject[0]);
}

export async function PUT(request: Request) {
  const checkPermission = await validateUserAccess(["core", "lead", "member"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });
  const body = (await request.json()) as {
    id: string;
    title: string | null | undefined;
    description: string[] | null | undefined;
    github: string | null | undefined;
    participants: string[] | null | undefined;
    defaultImage: string | null | undefined;
    images: string[] | null | undefined;
    tags: string[] | null | undefined;
  };

  try {
    await db
      .update(projects)
      .set({
        ...(body.title ? { title: body.title } : {}),
        ...(body.description ? { description: body.description } : {}),
        ...(body.github ? { github: body.github } : {}),
        ...(body.defaultImage ? { defaultImage: body.defaultImage } : {}),
        ...(body.images ? { images: body.images } : {}),
        editedAt: new Date(),
      })
      .where(eq(projects.id, body.id));

    if (body.participants) {
      await db
        .delete(projectsMembers)
        .where(eq(projectsMembers.projectId, body.id));
      const linkProjectToUserData: { projectId: string; userId: string }[] = [];

      for (const participant of body.participants) {
        linkProjectToUserData.push({
          projectId: body.id,
          userId: participant,
        });
      }
      await db.insert(projectsMembers).values(linkProjectToUserData);
    }

    if (body.tags) {
      await db.delete(projectsTags).where(eq(projectsTags.projectId, body.id));
      const createTags = await db
        .insert(tags)
        .values(body.tags.map((tag) => ({ name: tag })))
        .returning({ id: tags.id });

      const linkProjectToTags: { projectId: string; tagId: string }[] = [];

      for (const tag of createTags) {
        linkProjectToTags.push({
          projectId: body.id,
          tagId: tag.id,
        });
      }

      await db.insert(projectsTags).values(linkProjectToTags);
    }

    return NextResponse.json({ id: body.id });
  } catch {
    return NextResponse.json({ message: "Updated Cancelled" });
  }
}
