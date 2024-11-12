import validateUserAccess from "@/lib/server/validate-user-access";
import { NextResponse } from "next/server";
import db from "@/db";
import { tags } from "@/db/schema";

export async function GET() {
  const checkPermission = await validateUserAccess(["core", "lead", "member"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });

  const tagsData = await db.select({ name: tags.name }).from(tags);
  return NextResponse.json(tagsData);
}
