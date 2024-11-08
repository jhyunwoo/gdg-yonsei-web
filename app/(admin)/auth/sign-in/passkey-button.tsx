"use client";

import { signIn } from "next-auth/webauthn";
import { useState } from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function PasskeyButton() {
  const [loading, setLoading] = useState(false);

  return (
    <button
      onClick={() => {
        setLoading(true);
        signIn("passkey");
      }}
      className={
        "p-2 w-full px-6 rounded-xl justify-center flex gap-2 bg-neutral-50 text-neutral-950 text-lg hover:bg-neutral-100 border-2 border-neutral-600 transition-all shadow-4xl items-center"
      }
    >
      {loading ? <Cog6ToothIcon className={"size-6 animate-spin"} /> : null}
      <p>Sign in with Passkey</p>
    </button>
  );
}
