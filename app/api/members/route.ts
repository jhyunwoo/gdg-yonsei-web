import db from "@/db";
import { users } from "@/db/schema";
import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import validateUserAccess from "@/lib/validate-user-access";

export async function GET() {
  // lead 와 core 만 members 데이터 조회 허용
  if (await validateUserAccess(["lead", "core"])) {
    const membersList = await db
      .select()
      .from(users)
      .where(eq(users.verified, true))
      .orderBy(desc(users.generation));
    return NextResponse.json(membersList);
  } else {
    // 권한 없으면 데이터 조회 거부
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });
  }
}
