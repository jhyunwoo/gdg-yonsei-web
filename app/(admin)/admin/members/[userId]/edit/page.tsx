import AdminPageLayout from "@/app/components/admin-page-layout";
import EditForm from "@/app/(admin)/admin/members/[userId]/edit/edit-form";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default async function EditMember({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return (
    <AdminPageLayout>
      <div>
        <Link
          href={`/admin/members/${userId}`}
          className={"flex gap-2 items-center"}
        >
          <ChevronLeftIcon className={"size-6"} />
          <p>Member Info</p>
        </Link>
        <div className={"text-xl font-bold p-2"}>Edit Member</div>
      </div>
      <EditForm userId={userId} />
    </AdminPageLayout>
  );
}
