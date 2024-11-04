import { NextResponse } from "next/server";
import validateUserAccess from "@/lib/validate-user-access";
import db from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  const checkPermission = await validateUserAccess(["core", "lead"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });

  const userData = (
    await db
      .select()
      .from(users)
      .where(eq(users.id, (await params).userId))
  )[0];

  return NextResponse.json(userData);
}
