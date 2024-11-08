import { ReactNode } from "react";

export default function AdminPageTitle({ children }: { children: ReactNode }) {
  return <div className={"text-2xl font-bold"}>{children}</div>;
}
