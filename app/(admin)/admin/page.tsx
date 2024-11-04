import AdminPageLayout from "@/app/components/admin-page-layout";
import GDGYonseiLogo from "@/app/components/gdg-yonsei-logo";

export default function AdminPage() {
  return (
    <AdminPageLayout>
      <div className={"text-3xl font-bold"}>
        <GDGYonseiLogo />
      </div>
    </AdminPageLayout>
  );
}
