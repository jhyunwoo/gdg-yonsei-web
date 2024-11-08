import NextAuth from "next-auth";
import Passkey from "next-auth/providers/passkey";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import GitHub from "next-auth/providers/github";
import db from "@/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [GitHub, Passkey],
  pages: {
    signIn: "/auth/sign-in",
  },
  experimental: { enableWebAuthn: true },
});
