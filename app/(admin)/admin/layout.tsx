import { ReactNode } from "react";
import Sidebar from "@/app/(admin)/admin/sidebar";
import NavBar from "@/app/(admin)/admin/nav-bar";
import { auth } from "@/auth";
import db from "@/db";
import { users } from "@/db/schema";
import { redirect } from "next/navigation";
import Link from "next/link";
import { eq } from "drizzle-orm";
import ConfirmModal from "@/app/components/confirm-modal";

function AccessDenied() {
  return (
    <div
      className={
        "w-full h-screen flex flex-col items-center justify-center p-4"
      }
    >
      <div className={"flex flex-col gap-2 max-w-xl items-start"}>
        <div className={"text-4xl font-bold"}>403 Access Denied!</div>
        <div>
          If you are a member of the{" "}
          <span className={"font-semibold"}>
            Google Developer Group on Campus Yonsei University
          </span>
          , please wait until you are approved.
        </div>
        <Link
          href={"/"}
          className={
            "w-full text-center hover:bg-neutral-800 transition-colors p-2 text-lg font-semibold rounded-lg bg-neutral-950 text-white"
          }
        >
          Home Page
        </Link>
      </div>
    </div>
  );
}

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/sign-in");

  if (!session?.user?.id) {
    return <AccessDenied />;
  }

  const isVerified = (
    await db
      .select({ verified: users.verified })
      .from(users)
      .where(eq(users.id, session.user.id))
      .limit(1)
  )[0].verified;

  if (!isVerified) {
    return <AccessDenied />;
  }
  return (
    <div className={"w-full min-h-screen flex"}>
      <Sidebar />
      <NavBar />
      <ConfirmModal />
      {children}
    </div>
  );
}
