"use client";

import Link from "next/link";
import { useSidebar } from "@/lib/stores/sidebar";

export default function ProfileNavButton() {
  const { close } = useSidebar((state) => state);

  return (
    <Link
      href={"/admin/profile"}
      className={"w-full p-1 bg-neutral-950 text-white text-center rounded-lg"}
      onClick={close}
    >
      Profile
    </Link>
  );
}
