import db from "@/db";
import {
  projects,
  projectsMembers,
  projectsTags,
  tags,
  users,
} from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import validateUserAccess from "@/lib/server/validate-user-access";
import { deleteImages } from "@/lib/server/delete-images";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> },
) {
  const { projectId } = await params;

  const projectData = (
    await db
      .select({
        id: projects.id,
        title: projects.title,
        description: projects.description,
        defaultImage: projects.defaultImage,
        images: projects.images,
        github: projects.github,
        createdAt: projects.createdAt,
        editedAt: projects.editedAt,
        authorId: projects.authorId,
        authorName: users.name,
        authorFirstName: users.firstName,
        authorLastName: users.lastName,
      })
      .from(projects)
      .where(eq(projects.id, projectId))
      .leftJoin(users, eq(projects.authorId, users.id))
      .limit(1)
  )[0];

  const participants = await db
    .select({
      id: users.id,
      name: users.name,
      firstName: users.firstName,
      lastName: users.lastName,
      image: users.image,
    })
    .from(projectsMembers)
    .leftJoin(users, eq(projectsMembers.userId, users.id))
    .leftJoin(projects, eq(projectsMembers.projectId, projects.id))
    .where(eq(projects.id, projectId));

  const tagData = await db
    .select({
      name: tags.name,
    })
    .from(projectsTags)
    .leftJoin(projects, eq(projectsTags.projectId, projects.id))
    .leftJoin(tags, eq(projectsTags.tagId, tags.id))
    .where(eq(projects.id, projectId));

  return NextResponse.json({ projectData, participants, tags: tagData });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> },
) {
  const checkPermission = await validateUserAccess(["core", "lead", "member"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });
  const { projectId } = await params;

  await db.delete(projects).where(eq(projects.id, (await params).projectId));

  await deleteImages(`projects/${projectId}`);

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
