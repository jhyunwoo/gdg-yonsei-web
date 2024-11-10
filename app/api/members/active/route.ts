import validateUserAccess from "@/lib/server/validate-user-access";
import db from "@/db";
import { users } from "@/db/schema";
import { NextResponse } from "next/server";
import { inArray } from "drizzle-orm";

export async function PUT(request: Request) {
  const checkPermission = await validateUserAccess(["core", "lead"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });

  const res = await request.json();

  await db
    .update(users)
    .set({ active: res.active })
    .where(inArray(users.id, res.members));
  return NextResponse.json({ result: "Change Members Active State" });
}
