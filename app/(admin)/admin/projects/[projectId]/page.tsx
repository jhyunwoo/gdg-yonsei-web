import React from "react";
import AdminPageLayout from "@/app/components/admin-page-layout";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  return (
    <AdminPageLayout>
      <div>Project Page</div>
      <div>{React.use(params).projectId}</div>
    </AdminPageLayout>
  );
}
