import validateUserAccess from "@/lib/server/validate-user-access";
import { NextResponse } from "next/server";
import db from "@/db";
import { session } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ sessionId: string }>;
  },
) {
  const checkPermission = await validateUserAccess(["core", "lead", "member"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });

  const { sessionId } = await params;

  const sessionData = await db
    .select()
    .from(session)
    .where(eq(session.id, sessionId))
    .limit(1);

  return NextResponse.json(sessionData[0]);
}
