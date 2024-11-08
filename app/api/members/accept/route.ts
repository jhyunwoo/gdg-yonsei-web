import db from "@/db";
import { users } from "@/db/schema";
import { inArray } from "drizzle-orm";
import { NextResponse } from "next/server";
import validateUserAccess from "@/lib/validate-user-access";

export async function PUT(request: Request) {
  const checkPermission = await validateUserAccess(["core", "lead"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });

  const res = await request.json();
  await db
    .update(users)
    .set({ verified: true, role: "member" })
    .where(inArray(users.id, res.members));
  return NextResponse.json({ result: "Accept Members" });
}
