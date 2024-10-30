import Link from "next/link";

export default function SideBar() {
  return (
    <div className={"h-screen bg-neutral-100 w-60 p-4"}>
      <div className={"text-2xl font-bold"}>GYMS</div>
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
