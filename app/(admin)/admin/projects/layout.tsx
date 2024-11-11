import { ReactNode } from "react";
import ProjectLoading from "@/app/(admin)/admin/projects/project-loading";

export default function AdminProjectsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ProjectLoading />
      {children}
    </>
  );
}
