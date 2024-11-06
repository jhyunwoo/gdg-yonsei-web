import { ReactNode } from "react";
import Sidebar from "@/app/(admin)/admin/sidebar";
import NavBar from "@/app/(admin)/admin/nav-bar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className={"w-full min-h-screen flex"}>
      <Sidebar />
      <NavBar />
      {children}
    </div>
  );
}
