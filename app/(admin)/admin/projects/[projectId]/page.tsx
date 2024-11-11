import React from "react";
import AdminPageLayout from "@/app/components/admin-page-layout";
import ProjectData from "@/app/(admin)/admin/projects/[projectId]/project-data";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  return (
    <AdminPageLayout>
      <ProjectData projectId={(await params).projectId} />
    </AdminPageLayout>
  );
}
