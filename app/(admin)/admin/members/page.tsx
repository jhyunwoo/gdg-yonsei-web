"use client";

import AdminPageLayout from "@/app/components/admin-page-layout";
import MemberList from "@/app/components/member-list";
import Link from "next/link";
import useMembers from "@/lib/hooks/useMembers";

export default function MembersPage() {
  const { membersData } = useMembers();
  return (
    <AdminPageLayout>
      <div className={"flex gap-2 items-center pb-2"}>
        <div className={"text-2xl font-bold"}>Members</div>
        <Link
          href={"/admin/members/accept"}
          className={
            "bg-sky-500 text-white p-1 px-3 text-sm rounded-lg hover:bg-sky-600 transition-colors"
          }
        >
          Accept Members
        </Link>
      </div>
      <MemberList membersData={membersData!} />
    </AdminPageLayout>
  );
}
