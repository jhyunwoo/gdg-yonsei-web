"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button
      onClick={() => signIn("github", { redirect: true, redirectTo: "/admin" })}
    >
      Sign in with Github
    </button>
  );
}
