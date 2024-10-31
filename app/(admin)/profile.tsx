import { Suspense } from "react";
import { auth } from "@/auth";
import db from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import SignOutButton from "@/app/components/sign-out-button";

export default async function Profile() {
  const session = await auth();
  if (!session?.user?.id) {
    return (
      <div>
        <div>Permission Denied</div>
      </div>
    );
  }

  const userInfo = (
    await db.select().from(users).where(eq(users.id, session.user.id))
  )[0];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        className={
          "bg-white border-2 rounded-xl p-3 w-fit flex flex-col border-neutral-800/80"
        }
      >
        <div className={"text-lg font-semibold"}>{userInfo.name}</div>
        <div>{userInfo.email}</div>
        <div>{userInfo.role?.toUpperCase()}</div>
        <SignOutButton />
      </div>
    </Suspense>
  );
}
