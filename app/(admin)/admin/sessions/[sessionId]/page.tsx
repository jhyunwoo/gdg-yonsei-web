import { use } from "react";
import AdminPageLayout from "@/app/components/admin-page-layout";
import SessionData from "@/app/(admin)/admin/sessions/[sessionId]/session-data";

export default function SessionPage({
  params,
}: {
  params: Promise<{ sessionId: string }>;
}) {
  return (
    <AdminPageLayout>
      <SessionData sessionId={use(params).sessionId} />
    </AdminPageLayout>
  );
}
