import validateUserAccess from "@/lib/validate-user-access";
import { NextResponse } from "next/server";
import db from "@/db";
import { projects, projectsMembers } from "@/db/schema";
import { auth } from "@/auth";

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
