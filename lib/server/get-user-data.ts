import db from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getUserData(userId: string) {
  return (
    await db
      .select({
        id: users.id,
        name: users.name,
        firstName: users.firstName,
        lastName: users.lastName,
        email: users.email,
        image: users.image,
        generation: users.generation,
        part: users.part,
        role: users.role,
        githubId: users.githubId,
        linkedInId: users.linkedInId,
        instagramId: users.instagramId,
        active: users.active,
      })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1)
  )[0];
}
