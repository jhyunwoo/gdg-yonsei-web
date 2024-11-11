"use client";

import { useProjectLoading } from "@/lib/stores/project-loading";

export default function ProjectLoading() {
  const { state, percentage } = useProjectLoading((state) => state);
  if (state !== "") {
    return (
      <div
        className={
          "fixed w-screen h-screen z-20 flex items-center justify-center top-0 left-0 bg-neutral-500/50 p-4"
        }
      >
        <div
          className={
            "bg-neutral-50 p-4 rounded-xl w-full max-w-lg flex flex-col"
          }
        >
          <div className={"text-xl font-bold"}>{state}</div>
          <div className={"ml-auto"}>{percentage}%</div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
