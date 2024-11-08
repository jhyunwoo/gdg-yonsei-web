import { auth } from "@/auth";
import db from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import SignOutButton from "@/app/components/sign-out-button";
import Link from "next/link";

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
    <div
      className={
        "bg-white border-2 rounded-xl break-normal p-3 flex flex-col border-neutral-800/80 w-full"
      }
    >
      <div className={"text-lg font-semibold"}>
        {userInfo?.firstName
          ? `${userInfo.lastName} ${userInfo.firstName}`
          : userInfo.name}
      </div>
      <div>{userInfo.role?.toUpperCase()}</div>
      <div className={"flex flex-col gap-1"}>
        <Link
          href={"/admin/profile"}
          className={
            "w-full p-1 bg-neutral-950 text-white text-center rounded-lg"
          }
        >
          Profile
        </Link>
        <SignOutButton />
      </div>
    </div>
  );
}
