import { ReactNode } from "react";
import Sidebar from "@/app/(admin)/admin/sidebar";
import { SidebarStoreProvider } from "@/app/components/sidebar-store-provider";
import NavBar from "@/app/(admin)/admin/nav-bar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className={"w-full min-h-screen flex"}>
      <SidebarStoreProvider>
        <Sidebar />
        <NavBar />
        {children}
      </SidebarStoreProvider>
    </div>
  );
}
