"use client";

import { signIn } from "next-auth/webauthn";

export default function RegisterPasskeyButton() {
  return (
    <button
      type={"button"}
      className={
        "p-2 rounded-lg ring-2 ring-neutral-700 hover:bg-neutral-100 transition-colors"
      }
      onClick={() => {
        signIn("passkey", { action: "register", redirect: false })
          .then(() => alert("Complete Register Passkey"))
          .catch(() => alert("Passkey already registered"));
      }}
    >
      Register new Passkey
    </button>
  );
}
