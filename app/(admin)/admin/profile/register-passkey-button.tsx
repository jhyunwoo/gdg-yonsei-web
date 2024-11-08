"use client";

import { signIn } from "next-auth/react";

export default function RegisterPasskeyButton() {
  return (
    <button onClick={() => signIn("passkey", { action: "register" })}>
      Register new Passkey
    </button>
  );
}
