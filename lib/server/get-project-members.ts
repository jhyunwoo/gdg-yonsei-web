import db from "@/db";
import { projectsMembers } from "@/db/schema";
import { eq } from "drizzle-orm";

/**
 * 모든 프로젝트의 멤버를 가져오는 함수
 *
 * 생성일 기준으로 최근 생성된 프로젝트를 먼저 가져옴
 */
export default async function getProjectMembers(projectId: string) {
  const projectUserData = await db
    .select()
    .from(projectsMembers)
    .where(eq(projectsMembers.projectId, projectId));

  return projectUserData.map((member) => member.userId); // return the member IDs
}
