import db from "@/db";
import { projects } from "@/db/schema";
import { desc } from "drizzle-orm";

export default async function getProjects() {
  return db.select().from(projects).orderBy(desc(projects.createdAt));
}
