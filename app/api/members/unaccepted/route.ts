import validateUserAccess from "@/lib/validate-user-access";
import db from "@/db";
import { users } from "@/db/schema";
import { desc, eq, inArray } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  // lead 와 core 만 members 데이터 조회 허용
  if (await validateUserAccess(["lead", "core"])) {
    const membersList = await db
      .select()
      .from(users)
      .where(eq(users.verified, false))
      .orderBy(desc(users.generation));
    return NextResponse.json(membersList);
  } else {
    // 권한 없으면 데이터 조회 거부
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });
  }
}

export async function PUT(request: Request) {
  const checkPermission = await validateUserAccess(["core", "lead"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });

  const res = await request.json();
  await db
    .update(users)
    .set({ verified: false })
    .where(inArray(users.id, res.members));
  return NextResponse.json({ result: "Delete Members" });
}
