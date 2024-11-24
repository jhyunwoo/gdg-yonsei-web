import db from "@/db";
import { session } from "@/db/schema";
import { desc } from "drizzle-orm";

export default async function getSessions() {
  return db
    .select({
      id: session.id,
      title: session.title,
      date: session.date,
      image: session.defaultImage,
    })
    .from(session)
    .orderBy(desc(session.date));
}
