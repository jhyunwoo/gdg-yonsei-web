import AdminPageLayout from "@/app/components/admin-page-layout";
import RegisterPasskeyButton from "@/app/(admin)/admin/profile/register-passkey-button";
import AdminPageTitle from "@/app/components/admin-page-title";
import { SessionProvider } from "next-auth/react";

export default async function ProfilePage() {
  return (
    <AdminPageLayout>
      <AdminPageTitle>Profile</AdminPageTitle>

      <SessionProvider>
        <RegisterPasskeyButton />
      </SessionProvider>
    </AdminPageLayout>
  );
}
