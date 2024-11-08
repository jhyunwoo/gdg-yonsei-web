"use client";

import { useSession } from "next-auth/react";
import { signIn } from "next-auth/webauthn";

export default function PasskeyButton() {
  const { status } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <button onClick={() => signIn("passkey", { action: "register" })}>
          Register new Passkey
        </button>
      ) : status === "unauthenticated" ? (
        <button onClick={() => signIn("passkey")}>Sign in with Passkey</button>
      ) : null}
    </div>
  );
}
