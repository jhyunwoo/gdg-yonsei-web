"use client";

import { useConfirmModal } from "@/lib/stores/confirm-modal";

export default function ConfirmModal() {
  const { text, confirm, cancel } = useConfirmModal((state) => state);
  if (text) {
    return (
      <div
        className={
          "z-10 w-screen h-screen fixed top-0 left-0 bg-neutral-500/50 flex items-center justify-center p-4"
        }
      >
        <div
          className={
            "bg-white p-4 rounded-xl flex flex-col items-center justify-center  w-full max-w-lg"
          }
        >
          <div className={"text-xl font-bold"}>{text}</div>
          <div className={"flex gap-2 w-full items-center justify-around mt-4"}>
            <button
              type={"button"}
              onClick={cancel}
              className={"p-2 px-4 rounded-lg w-full bg-sky-100"}
            >
              Cancel
            </button>
            <button
              type={"button"}
              onClick={confirm}
              className={"p-2 px-4 rounded-lg w-full bg-sky-600 text-white"}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
