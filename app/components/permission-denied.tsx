import AdminPageLayout from "@/app/components/admin-page-layout";
import Link from "next/link";

export default function PermissionDenied() {
  return (
    <AdminPageLayout className={"items-center justify-center"}>
      <div className={"text-4xl font-semibold"}>Permission Denied</div>
      <Link
        href={"/admin"}
        className={
          "bg-neutral-950 text-white p-2 rounded-lg w-full max-w-sm text-center mt-4"
        }
      >
        Go back to Admin Page
      </Link>
    </AdminPageLayout>
  );
}
