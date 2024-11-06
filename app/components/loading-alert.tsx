"use client";

import { useLoading } from "@/lib/stores/loading";

export default function LoadingAlert() {
  const { loading, type } = useLoading((state) => state);

  return (
    <div
      className={`fixed top-8 right-8 p-2 bg-white rounded-lg px-4 ring-[1px] text-sm transition-all ${loading ? "" : "hidden"} ${type === "message" ? "ring-sky-600 text-blue-700" : ""} ${type === "complete" ? "" : ""}`}
    >
      {loading}
    </div>
  );
}
