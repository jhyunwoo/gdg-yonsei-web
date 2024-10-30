import { ReactNode } from "react";

export default function AdminLayout({
  children,
    sidebar
}: {
  children: ReactNode;
  sidebar: ReactNode
}) {

  return (
    <div className={"w-full min-h-screen flex"}>
      {sidebar}
      {children}
    </div>
  );
}
