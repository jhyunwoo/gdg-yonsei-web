"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useSidebarStore } from "@/app/components/sidebar-store-provider";

export default function NavigationButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const { setSideBar } = useSidebarStore((state) => state);

  return (
    <Link
      className={
        "hover:bg-neutral-200 transition-colors flex items-center gap-2"
      }
      onClick={() => setSideBar(false)}
      href={href}
    >
      {children}
    </Link>
  );
}
