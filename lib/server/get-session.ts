import db from "@/db";
import { session } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getSession(id: string) {
  const data = await db
    .select()
    .from(session)
    .where(eq(session.id, id))
    .limit(1);

  return data[0];
}
