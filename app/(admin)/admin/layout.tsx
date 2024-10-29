import { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SideBar from "@/app/(admin)/admin/sidebar";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/sign-in");

  return (
    <div className={"w-full min-h-screen flex"}>
      <SideBar />
      {children}
    </div>
  );
}
