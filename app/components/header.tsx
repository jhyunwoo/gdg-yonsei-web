import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div
      className={
        "w-full p-[20px] flex justify-between items-center fixed top-0 left-0"
      }
    >
      <Link href={"/"}>
        <Image
          src={"/logo/gdg-yonsei.svg"}
          alt={"GDG Yonsei Logo"}
          width={215}
          height={46}
        />
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
