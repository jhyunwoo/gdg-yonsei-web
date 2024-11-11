import Link from "next/link";
import { auth } from "@/auth";
import Profile from "@/app/(admin)/profile";
import {
  CalendarDaysIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import SidebarController from "@/app/components/sidebar-controller";
import NavigationButton from "@/app/components/navigation-button";
import getUserRole from "@/lib/get-user-role";
import PermissionDenied from "@/app/components/permission-denied";

export default async function Sidebar() {
  const session = await auth();
  if (!session?.user?.id) return <PermissionDenied />;

  const userRole = await getUserRole(session.user.id);

  return (
    <SidebarController>
      <Link href={"/admin"} className={"text-3xl font-bold"}>
        GYMS
      </Link>
      <Profile />
      <div
        className={
          "flex flex-col gap-2 *:p-2 *:px-3 *:rounded-xl *:bg-white pt-4 *:text-xl *:font-semibold "
        }
      >
        <NavigationButton href={"/admin"}>
          <HomeIcon className={"size-6"} />
          <p>Home</p>
        </NavigationButton>
        {userRole !== "member" && (
          <NavigationButton href={"/admin/members"}>
            <UsersIcon className={"size-6"} />
            <p>Members</p>
          </NavigationButton>
        )}
        <NavigationButton href={"/admin/projects"}>
          <FolderIcon className={"size-6"} />
          <p>Projects</p>
        </NavigationButton>
        {userRole !== "member" && (
          <NavigationButton href={"/admin/sessions"}>
            <CalendarDaysIcon className={"size-6"} />
            <p>Sessions</p>
          </NavigationButton>
        )}
      </div>
    </SidebarController>
  );
}
