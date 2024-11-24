import Link from "next/link";
import GDGYonseiLogo from "@/app/components/gdg-yonsei-logo";

export default function Header() {
  return (
    <>
      <div
        className={
          "w-full p-4 flex justify-between items-center fixed top-0 left-0 bg-background z-30"
        }
      >
        <Link href={"/"}>
          <GDGYonseiLogo />
        </Link>
        <div className={"md:gap-[20px] flex flex-col md:flex-row"}>
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
      <div className="h-[80px]"></div>
    </>
  );
}
