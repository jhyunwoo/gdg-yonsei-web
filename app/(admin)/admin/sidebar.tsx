import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Profile from "@/app/(admin)/profile";

export default async function Sidebar() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/sign-in");

  return (
    <div className={"h-screen bg-neutral-100 p-4 flex flex-col gap-2"}>
      <Link href={"/admin"} className={"text-2xl font-bold"}>
        GYMS
      </Link>
      <Profile />
      <div
        className={
          "flex flex-col gap-2 *:p-2 *:px-3 *:rounded-xl *:bg-white pt-4 *:text-xl *:font-semibold "
        }
      >
        <Link
          className={"hover:bg-neutral-200  transition-colors"}
          href={"/admin"}
        >
          Home
        </Link>
        <Link
          className={"hover:bg-neutral-200  transition-colors"}
          href={"/admin/members"}
        >
          Members
        </Link>
        <Link
          className={"hover:bg-neutral-200 transition-colors"}
          href={"/admin/projects"}
        >
          Projects
        </Link>
        <Link
          className={"hover:bg-neutral-200 transition-colors"}
          href={"/admin/sessions"}
        >
          Sessions
        </Link>
      </div>
    </div>
  );
}
