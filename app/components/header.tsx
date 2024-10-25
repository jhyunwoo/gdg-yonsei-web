import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className={"w-full p-[20px] flex justify-between items-center"}>
      <Link href={"/"}>
        <Image
          src={"/logo/gdg-yonsei.svg"}
          alt={"GDG Yonsei Logo"}
          width={215}
          height={46}
        />
      </Link>
      <div className={"gap-[20px] flex"}>
        <Link href={"/members"}>Members</Link>
        <Link href={"/sessions"}>Sessions</Link>
        <Link href={"/projects"}>Projects</Link>
      </div>
    </div>
  );
}
