"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useSidebar } from "@/lib/stores/sidebar";

export default function NavigationButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const { close } = useSidebar((state) => state);

  return (
    <Link
      className={
        "hover:bg-neutral-200 transition-colors flex items-center gap-2"
      }
      onClick={close}
      href={href}
    >
      {children}
    </Link>
  );
}
