import AdminPageLayout from "@/app/components/admin-page-layout";
import getUserData from "@/lib/server/get-user-data";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import EditProfileForm from "@/app/(admin)/admin/profile/edit/edit-profile-form";
import AdminPageTitle from "@/app/components/admin-page-title";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default async function EditProfilePage() {
  const session = await auth();
  if (!session?.user?.id) {
    return redirect("/admin/auth/sign-up");
  }
  const userData = await getUserData(session.user.id);

  return (
    <AdminPageLayout>
      <div className={"py-1 flex flex-col gap-2 justify-center"}>
        <Link
          href={"/admin/profile"}
          className={"flex gap-2 items-center hover:underline"}
        >
          <ChevronLeftIcon className={"size-6"} />
          <p>Profile</p>
        </Link>
        <AdminPageTitle>Edit Project</AdminPageTitle>
      </div>

      <EditProfileForm userData={userData} />
    </AdminPageLayout>
  );
}
