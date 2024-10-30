import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function SideBarPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/sign-in");

  return (
    <div className={"h-screen bg-neutral-100 w-60 p-4"}>
      <Link href={"/admin"} className={"text-2xl font-bold"}>
        GYMS
      </Link>
      <div>
        <div>Profile</div>
      </div>
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
