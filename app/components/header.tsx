import Link from "next/link";
import GDGYonseiLogo from "@/app/components/gdg-yonsei-logo";

export default function Header() {
  return (
    <div
      className={
        "w-full p-[20px] flex justify-between items-center fixed top-0 left-0 bg-background z-10"
      }
    >
      <Link href={"/"}>
        <GDGYonseiLogo />
      </Link>
      <div className={"gap-[20px] flex"}>
        <Link href={"/members"} className={"hover:underline"}>
          Members
        </Link>
        <Link href={"/sessions"} className={"hover:underline"}>
          Sessions
        </Link>
        <Link href={"/projects"} className={"hover:underline"}>
          Projects
        </Link>
      </div>
    </div>
  );
}
