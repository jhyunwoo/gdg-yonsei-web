import AdminPageLayout from "@/app/components/admin-page-layout";
import RegisterPasskeyButton from "@/app/(admin)/admin/profile/register-passkey-button";

export default async function ProfilePage() {
  return (
    <AdminPageLayout>
      <div>Profile Page</div>
      <RegisterPasskeyButton />
    </AdminPageLayout>
  );
}
