"use client";

import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function LoadingModal() {
  return (
    <div
      className={
        "w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-neutral-500/40"
      }
    >
      <Cog6ToothIcon className={"size-14 text-neutral-800"} />
    </div>
  );
}
