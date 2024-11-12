import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Loading() {
  return (
    <div
      className={
        "w-screen h-screen fixed top-0 left-0 flex items-center justify-around bg-neutral-50/50 z-30"
      }
    >
      <Cog6ToothIcon className={"size-14 text-neutral-800 animate-spin"} />
    </div>
  );
}
