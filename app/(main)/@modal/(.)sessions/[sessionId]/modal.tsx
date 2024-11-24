"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { XCircleIcon } from "@heroicons/react/24/outline";

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <div
      className={
        "w-screen bg-neutral-500/50 z-10 p-4 fixed top-0 left-0 h-screen flex justify-center items-center"
      }
    >
      <div className={"flex w-full flex-col max-w-3xl bg-white rounded-xl p-4"}>
        <button onClick={() => router.back()} className={"ml-auto"}>
          <XCircleIcon className={"size-8"} />
        </button>
        {children}
      </div>
    </div>
  );
}
