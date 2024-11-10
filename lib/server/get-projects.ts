import db from "@/db";
import { projects } from "@/db/schema";
import { desc } from "drizzle-orm";

/**
 * 모든 프로젝트를 가져오는 함수
 *
 * 생성일 기준으로 최근 생성된 프로젝트를 먼저 가져옴
 */
export default async function getProjects() {
  return db.select().from(projects).orderBy(desc(projects.createdAt));
}
