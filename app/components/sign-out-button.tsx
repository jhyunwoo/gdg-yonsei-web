"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button onClick={() => signOut({ redirectTo: "/auth/sign-in" })}>
      Sign Out
    </button>
  );
}
