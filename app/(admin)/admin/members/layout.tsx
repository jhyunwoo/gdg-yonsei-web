import { ReactNode } from "react";
import validateUserAccess from "@/lib/server/validate-user-access";
import PermissionDenied from "@/app/components/permission-denied";

export default async function AdminMembersLayout({
  children,
}: {
  children: ReactNode;
}) {
  const checkPermission = await validateUserAccess(["lead", "core"]);

  if (!checkPermission) {
    return <PermissionDenied />;
  }

  return <>{children}</>;
}
