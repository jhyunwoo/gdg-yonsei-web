import validateUserAccess from "@/lib/validate-user-access";
import { NextResponse } from "next/server";
import db from "@/db";
import { projects, projectsMembers, users } from "@/db/schema";
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
    description: string;
    github: string;
    participants: string[];
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
