import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div className={"w-full min-h-screen pt-24"}>{children}</div>;
}
