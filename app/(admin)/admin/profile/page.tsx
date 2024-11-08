import AdminPageLayout from "@/app/components/admin-page-layout";
import RegisterPasskeyButton from "@/app/(admin)/admin/profile/register-passkey-button";
import AdminPageTitle from "@/app/components/admin-page-title";

export default async function ProfilePage() {
  return (
    <AdminPageLayout>
      <AdminPageTitle>Profile</AdminPageTitle>

      <RegisterPasskeyButton />
    </AdminPageLayout>
  );
}
