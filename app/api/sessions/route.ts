import validateUserAccess from "@/lib/server/validate-user-access";
import { NextResponse } from "next/server";
import db from "@/db";
import { session } from "@/db/schema";
import { parse } from "date-fns";
import { auth } from "@/auth";
import { desc } from "drizzle-orm";

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

  const dateString = body.date;
  const dateFormat = "yyyy/MM/dd";

  const date = parse(dateString, dateFormat, new Date());

  await db.insert(session).values({
    title: body.title,
    description: body.description,
    date: date,
    defaultImage: "NO_IMAGE",
    authorId: sessionData.user.id,
  });
  return NextResponse.json({ message: "Create session success" });
}
