import validateUserAccess from "@/lib/validate-user-access";
import { NextResponse } from "next/server";
import db from "@/db";
import { users } from "@/db/schema";

export async function GET() {
  const checkPermission = await validateUserAccess(["core", "lead"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });

  const parts = await db.select({ part: users.part }).from(users);

  const uniqueParts: string[] = [];

  for (const data of parts) {
    if (data.part) {
      if (!uniqueParts.includes(data.part)) {
        uniqueParts.push(data.part);
      }
    }
  }

  return NextResponse.json(uniqueParts);
}
