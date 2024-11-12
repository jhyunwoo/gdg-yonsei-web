import AdminPageLayout from "@/app/components/admin-page-layout";
import AdminPageTitle from "@/app/components/admin-page-title";
import Link from "next/link";
import SessionsList from "@/app/(admin)/admin/sessions/sessions-list";

export default function SessionsPage() {
  return (
    <AdminPageLayout>
      <div className={"flex items-center gap-2"}>
        <AdminPageTitle>Sessions</AdminPageTitle>
        <Link
          href={"/admin/sessions/create"}
          className={
            "bg-blue p-1 px-3 rounded-lg text-white hover:bg-blue-800 transition-colors"
          }
        >
          Create Session
        </Link>
      </div>
      <SessionsList />
    </AdminPageLayout>
  );
}
