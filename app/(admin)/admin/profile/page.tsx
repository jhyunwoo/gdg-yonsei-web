import AdminPageLayout from "@/app/components/admin-page-layout";
import RegisterPasskeyButton from "@/app/(admin)/admin/profile/register-passkey-button";
import AdminPageTitle from "@/app/components/admin-page-title";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DataWithTitle from "@/app/components/data-with-title";
import Link from "next/link";
import getUserData from "@/lib/server/get-user-data";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user?.id) {
    return redirect("/admin/auth/sign-up");
  }
  const userData = await getUserData(session.user.id);

  return (
    <AdminPageLayout>
      <AdminPageTitle>Profile</AdminPageTitle>
      <div className={"flex gap-2"}>
        {userData.image ? (
          <Image
            src={userData.image!}
            alt={"Profile Image"}
            width={100}
            height={100}
            className={"w-28 md:w-56 md:h-56 h-28 rounded-xl"}
          />
        ) : (
          <div
            className={"w-28 md:w-56 md:h-56 h-28 bg-neutral-500 rounded-xl"}
          />
        )}
        <div className={"w-full grid grid-cols-1 md:grid-cols-2"}>
          <DataWithTitle title={"Github Name"} data={userData.name} />
          <DataWithTitle title={"First Name"} data={userData.firstName} />
          <DataWithTitle title={"Last Name"} data={userData.lastName} />
          <DataWithTitle title={"E-mail"} data={userData.email} />
          <DataWithTitle title={"Generation"} data={userData.generation} />
          <DataWithTitle title={"Part"} data={userData.part} />
          <DataWithTitle title={"Role"} data={userData.role} />
          <DataWithTitle title={"Github ID"} data={userData.githubId} />
          <DataWithTitle title={"LinkedIn ID"} data={userData.linkedInId} />
          <DataWithTitle title={"Instagram ID"} data={userData.instagramId} />
          <DataWithTitle
            title={"Active"}
            data={userData.active ? "Active" : "Alumni"}
          />
        </div>
      </div>
      <div className={"w-full grid grid-cols-1 md:grid-cols-2 mt-4 gap-2"}>
        <Link
          href={"/admin/profile/edit"}
          className={"p-2 rounded-xl bg-neutral-950 text-white text-center"}
        >
          Edit My Profile
        </Link>
        <RegisterPasskeyButton />
      </div>
    </AdminPageLayout>
  );
}
