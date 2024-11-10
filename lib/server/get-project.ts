import db from "@/db";
import { projects, projectsMembers, users } from "@/db/schema";
import { eq } from "drizzle-orm";

/**
 * 프로젝트 아이디로 프로젝트 1개를 가져오는 함수
 *
 * 프로젝트에 참가한 멤버들도 같이 가져옵니다.
 * @param projectId
 */
export default async function getProject(projectId: string) {
  const projectData = await db
    .select()
    .from(projects)
    .where(eq(projects.id, projectId))
    .limit(1);

  const participants = await db
    .select({
      name: users.name,
      firstName: users.firstName,
      lastName: users.lastName,
      role: users.role,
      part: users.part,
      generation: users.generation,
      active: users.active,
    })
    .from(projectsMembers)
    .leftJoin(users, eq(projectsMembers.userId, users.id))
    .leftJoin(projects, eq(projectsMembers.projectId, projects.id))
    .where(eq(projects.id, projectData[0].id));

  return { project: projectData[0], participants: participants };
}

/**
 * getProject 함수의 반환값 타입
 */
export interface ProjectType {
  project: {
    id: string;
    title: string;
    description: string | null;
    defaultImage: string;
    images: string[] | null;
    github: string | null;
    createdAt: Date;
    editedAt: Date;
    authorId: string;
  };
  participants: {
    name: string | null;
    firstName: string | null;
    lastName: string | null;
    role: "member" | "core" | "lead" | "unverified" | null;
    part: string | null;
    generation: number | null;
    active: boolean | null;
  }[];
}
