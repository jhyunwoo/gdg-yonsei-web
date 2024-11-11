import db from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getUserRole(id: string) {
  const userRole = await db
    .select({ role: users.role })
    .from(users)
    .where(eq(users.id, id))
    .limit(1);

  return userRole[0].role;
}
