"use client";

import { ReactNode } from "react";
import { useSidebar } from "@/lib/stores/sidebar";

export default function SidebarController({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, close } = useSidebar((state) => state);

  return (
    <>
      <div
        className={`h-screen bg-neutral-100 z-10 w-60 transition transform-gpu fixed left-0 top-0 p-4 flex flex-col gap-2 pt-8 lg:pt-4 ${isOpen ? "translate-0" : "-translate-x-60 lg:translate-x-0"}`}
      >
        {children}
      </div>
      <div
        onClick={close}
        className={`fixed left-0 top-0 w-screen h-screen bg-neutral-800/50 backdrop-blur lg:hidden ${isOpen ? "" : "hidden"} transition transform-gpu`}
      />
    </>
  );
}
