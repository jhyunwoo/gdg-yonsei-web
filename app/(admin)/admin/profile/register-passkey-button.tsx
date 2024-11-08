"use client";

import { signIn } from "next-auth/react";

export default function RegisterPasskeyButton() {
  return (
    <button
      type={"button"}
      className={
        "p-2 rounded-lg ring-2 ring-neutral-700 hover:bg-neutral-100 transition-colors"
      }
      onClick={() => signIn("passkey", { action: "register", redirect: false })}
    >
      Register new Passkey
    </button>
  );
}
