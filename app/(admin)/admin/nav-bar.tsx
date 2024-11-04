import Link from "next/link";
import NavButton from "@/app/(admin)/admin/nav-button";

export default function NavBar() {
  return (
    <div
      className={
        "top-0 fixed left-0 z-20 w-screen p-4 flex items-center justify-start gap-4 lg:-translate-y-16 bg-neutral-100"
      }
    >
      <NavButton />
      <Link href={"/admin"} className={"font-bold text-xl"}>
        GYMS
      </Link>
    </div>
  );
}
