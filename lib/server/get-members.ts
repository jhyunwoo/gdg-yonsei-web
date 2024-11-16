import db from "@/db";
import { roleEnum, users } from "@/db/schema";
import { and, desc, eq } from "drizzle-orm";

/**
 * 모든 리드 멤버 가져오는 함수
 *
 * 생성일 기준으로 최근 생성된 프로젝트를 먼저 가져옴
 */
export async function getLeadMembers() {
  return db
    .select()
    .from(users)
    .where(and(eq(users.active, true), eq(users.role, roleEnum.enumValues[2])))
    .orderBy(desc(users.name));
}

/**
 * 모든 코어 멤버 가져오는 함수
 *
 * 생성일 기준으로 최근 생성된 프로젝트를 먼저 가져옴
 */
export async function getCoreMembers() {
    return db
    .select()
    .from(users)
    .where(and(eq(users.active, true), eq(users.role, roleEnum.enumValues[1])))
    .orderBy(desc(users.name));
}

/**
 * 모든 액티브 멤버 가져오는 함수
 *
 * 생성일 기준으로 최근 생성된 프로젝트를 먼저 가져옴
 */
export async function getActiveMembers() {
    return db
    .select()
    .from(users)
    .where(and(eq(users.active, true), eq(users.role, roleEnum.enumValues[0])))
    .orderBy(desc(users.name));
}
