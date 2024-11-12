import { use } from "react";
import AdminPageLayout from "@/app/components/admin-page-layout";

export default function SessionPage({
  params,
}: {
  params: Promise<{ sessionId: string }>;
}) {
  return <AdminPageLayout>{use(params).sessionId}</AdminPageLayout>;
}
