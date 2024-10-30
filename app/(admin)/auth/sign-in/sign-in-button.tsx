"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInButton() {
  const [loading, setLoading] = useState(false);
  return (
    <button
      className={
        "p-2 px-6 rounded-xl flex gap-2 bg-neutral-900 text-white font-bold text-lg hover:bg-neutral-800 transition-colors shadow-4xl bg-gree"
      }
      onClick={() => {
        setLoading(true);
        signIn("github", { redirect: true, redirectTo: "/admin" });
      }}
    >
      {loading ? <></> : null}
      <p>Sign in with Github</p>
    </button>
  );
}
