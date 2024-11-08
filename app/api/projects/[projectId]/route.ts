import db from "@/db";
import { projects, projectsMembers, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

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

  return NextResponse.json({ projectData, participants });
}
