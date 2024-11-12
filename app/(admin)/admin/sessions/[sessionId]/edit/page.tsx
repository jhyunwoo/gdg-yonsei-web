import AdminPageLayout from "@/app/components/admin-page-layout";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import EditSessionForm from "@/app/(admin)/admin/sessions/[sessionId]/edit/edit-session-form";

export default async function EditSession({
  params,
}: {
  params: Promise<{ sessionId: string }>;
}) {
  const { sessionId } = await params;

  return (
    <AdminPageLayout>
      <div>
        <Link
          href={`/admin/sessions/${sessionId}`}
          className={"flex gap-2 items-center"}
        >
          <ChevronLeftIcon className={"size-6"} />
          <p>Session Info</p>
        </Link>
        <div className={"text-xl font-bold p-2"}>Edit Session</div>
      </div>
      <EditSessionForm sessionId={sessionId} />
    </AdminPageLayout>
  );
}
