import { ReactNode } from "react";
import Sidebar from "@/app/(admin)/admin/sidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className={"w-full min-h-screen flex"}>
      <Sidebar />
      {children}
    </div>
  );
}
