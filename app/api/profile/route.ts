import { NextResponse } from "next/server";
import db from "@/db";
import { users } from "@/db/schema";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";

export async function PUT(request: Request) {
  const body = (await request.json()) as {
    name: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    githubId: string | undefined;
    linkedInId: string | undefined;
    instagramId: string | undefined;
    image: string | undefined;
  };

  const session = await auth();
  const id = session?.user?.id;

  if (
    !body.name &&
    !body.firstName &&
    !body.lastName &&
    !body.email &&
    !body.githubId &&
    !body.linkedInId &&
    !body.instagramId &&
    !body.image
  ) {
    return NextResponse.json({ message: "No Value!" }, { status: 400 });
  }

  if (!id) {
    return NextResponse.json({ message: "Access Denied" }, { status: 400 });
  }

  await db
    .update(users)
    .set({
      name: body.name,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      githubId: body.githubId,
      linkedInId: body.linkedInId,
      instagramId: body.instagramId,
      image: body.image,
    })
    .where(eq(users.id, id));
  return NextResponse.json({ message: "Profile Updated!" });
}
