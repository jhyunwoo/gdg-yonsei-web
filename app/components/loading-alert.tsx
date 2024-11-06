"use client";

import { useLoadingStore } from "@/app/components/loading-store-provider";

export default function LoadingAlert() {
  const { loading } = useLoadingStore((state) => state);

  return (
    <div
      className={`fixed top-8 right-8 p-2 bg-white rounded-lg px-4 ring-[1px] ring-neutral-400 text-sm transition-all ${loading ? "" : "hidden"}`}
    >
      {loading}
    </div>
  );
}
