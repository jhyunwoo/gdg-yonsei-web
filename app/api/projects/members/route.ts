import validateUserAccess from "@/lib/validate-user-access";
import { NextResponse } from "next/server";
import db from "@/db";
import { users } from "@/db/schema";
import { and, eq, inArray } from "drizzle-orm";

export interface ProjectMemberData {
  id: string;
  firstName: string | null;
  lastName: string | null;
  name: string | null;
  generation: number | null;
  active: boolean;
}

export async function GET() {
  const checkPermission = await validateUserAccess(["core", "lead", "member"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });

  const membersData = await db
    .select({
      id: users.id,
      firstName: users.firstName,
      lastName: users.lastName,
      name: users.name,
      generation: users.generation,
      active: users.active,
    })
    .from(users)
    .where(
      and(
        inArray(users.role, ["member", "core", "lead"]),
        eq(users.verified, true),
      ),
    );

  return NextResponse.json(membersData);
}
