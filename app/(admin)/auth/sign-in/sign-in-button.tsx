"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function SignInButton() {
  const [loading, setLoading] = useState(false);
  return (
    <button
      className={
        "p-2 px-6 rounded-xl w-full flex gap-2 bg-neutral-900 text-white text-lg hover:bg-neutral-800 transition-all shadow-4xl items-center justify-center"
      }
      onClick={() => {
        setLoading(true);
        signIn("github", { redirect: true, redirectTo: "/admin" });
      }}
      disabled={loading}
    >
      {loading ? <Cog6ToothIcon className={"size-6 animate-spin"} /> : null}
      <p>Sign in with Github</p>
    </button>
  );
}
