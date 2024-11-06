"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

export default function SignOutButton() {
  const [loading, setLoading] = useState(false);
  return (
    <button
      className={
        "w-full p-1 px-2 rounded-lg bg-neutral-900 text-white mt-2 text-sm hover:bg-neutral-700 transition-colors"
      }
      disabled={loading}
      onClick={() => {
        setLoading(true);
        signOut({ redirectTo: "/auth/sign-in" });
      }}
    >
      {loading ? "Loading..." : "Sign Out"}
    </button>
  );
}
