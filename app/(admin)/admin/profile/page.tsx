import AdminPageLayout from "@/app/components/admin-page-layout";
import AuthProvider from "@/app/(admin)/auth/sign-in/auth-provider";
import PasskeyButton from "@/app/(admin)/auth/sign-in/passkey-button";

export default async function ProfilePage() {
  return (
    <AdminPageLayout>
      <div>Profile Page</div>
      <AuthProvider>
        <PasskeyButton />
      </AuthProvider>
    </AdminPageLayout>
  );
}
