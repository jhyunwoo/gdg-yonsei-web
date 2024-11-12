import validateUserAccess from "@/lib/server/validate-user-access";
import { NextResponse } from "next/server";
import db from "@/db";
import { session } from "@/db/schema";
import { parse } from "date-fns";
import { auth } from "@/auth";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  const checkPermission = await validateUserAccess(["core", "lead", "member"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });

  const sessionsData = await db
    .select()
    .from(session)
    .orderBy(desc(session.date));

  return NextResponse.json(sessionsData);
}

export async function POST(request: Request) {
  const sessionData = await auth();

  const checkPermission = await validateUserAccess(["core", "lead", "member"]);
  if (!checkPermission || !sessionData?.user?.id)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });

  const body = (await request.json()) as {
    title: string;
    description: string[];
    date: string;
  };

  const createSession = await db
    .insert(session)
    .values({
      title: body.title,
      description: body.description,
      date: parse(body.date, "yyyy/MM/dd", new Date()),
      defaultImage: "NO_IMAGE",
      authorId: sessionData.user.id,
    })
    .returning({ id: session.id });
  return NextResponse.json({ id: createSession[0].id });
}

export async function PUT(request: Request) {
  const checkPermission = await validateUserAccess(["core", "lead", "member"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });
  const body = (await request.json()) as {
    id: string;
    title: string | undefined;
    description: string[] | undefined;
    date: string | undefined;
    defaultImage: string | undefined;
    images: string[] | undefined;
  };

  if (
    !body.title &&
    !body.description &&
    !body.date &&
    !body.defaultImage &&
    !body.images
  )
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });

  await db
    .update(session)
    .set({
      ...(body.title && { title: body.title }),
      ...(body.description && { description: body.description }),
      ...(body.date && { date: parse(body.date, "yyyy/MM/dd", new Date()) }),
      ...(body.defaultImage && { defaultImage: body.defaultImage }),
      ...(body.images && { images: body.images }),
    })
    .where(eq(session.id, body.id));

  return NextResponse.json({ message: "Update session success" });
}
