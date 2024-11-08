import AdminPageLayout from "@/app/components/admin-page-layout";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import EditProjectForm from "@/app/(admin)/admin/projects/[projectId]/edit/edit-project-form";

export default async function EditProject({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  return (
    <AdminPageLayout>
      <div>
        <Link
          href={`/admin/projects/${projectId}`}
          className={"flex gap-2 items-center"}
        >
          <ChevronLeftIcon className={"size-6"} />
          <p>Member Info</p>
        </Link>
        <div className={"text-xl font-bold p-2"}>Edit Member</div>
      </div>
      <EditProjectForm projectId={projectId} />
    </AdminPageLayout>
  );
}
