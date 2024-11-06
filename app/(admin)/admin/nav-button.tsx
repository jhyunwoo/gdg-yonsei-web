"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSidebarStore } from "@/app/components/sidebar-store-provider";

export default function NavButton() {
  const { setSideBar, open } = useSidebarStore((state) => state);

  return (
    <button
      type={"button"}
      onClick={() => {
        setSideBar(!open);
      }}
    >
      <Bars3Icon className={"size-8"} />
    </button>
  );
}
