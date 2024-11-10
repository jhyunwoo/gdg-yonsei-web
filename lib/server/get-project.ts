import db from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

/**
 * 프로젝트 아이디로 프로젝트 1개를 가져오는 함수
 * @param projectId
 */
export default async function getProject(projectId: string) {
  const projectData = await db
    .select()
    .from(projects)
    .where(eq(projects.id, projectId))
    .limit(1);

  return projectData[0];
}
