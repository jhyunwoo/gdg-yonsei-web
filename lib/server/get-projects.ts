import db from "@/db";
import {
  projects,
  projectsMembers,
  projectsTags,
  tags,
  users,
} from "@/db/schema";
import { desc, eq } from "drizzle-orm";

/**
 * 모든 프로젝트를 가져오는 함수
 *
 * 생성일 기준으로 최근 생성된 프로젝트를 먼저 가져옴
 */
export default async function getProjects() {
  // Fetch all projects
  const projectsData = await db.select().from(projects);

  // Initialize an array to hold the results
  const results = [];

  // Loop through each project to fetch its participants and tags
  for (const project of projectsData) {
    // Fetch participants for the current project
    const participantsData = await db
      .select({
        name: users.name,
      })
      .from(projectsMembers)
      .leftJoin(users, eq(projectsMembers.userId, users.id))
      .where(eq(projectsMembers.projectId, project.id));

    const participants =
      participantsData.length > 0
        ? participantsData
            .filter((participant) => participant.name !== null) // Filter out null names
            .map((participant) => participant.name as string) // Map to string array
        : null;

    // Fetch tags for the current project
    const tagData = await db
      .select({
        name: tags.name,
      })
      .from(projectsTags)
      .leftJoin(tags, eq(projectsTags.tagId, tags.id))
      .where(eq(projectsTags.projectId, project.id));

    // Add the project data along with its participants and tags to the results array
    results.push({
      project: project,
      participants: participants,
      tags: tagData,
    });
  }

  return results;
}
