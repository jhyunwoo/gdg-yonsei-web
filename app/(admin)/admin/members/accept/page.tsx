"use client";

import AdminPageLayout from "@/app/components/admin-page-layout";
import MemberList from "@/app/components/member-list";
import Link from "next/link";
import useUnacceptedMembers from "@/lib/hooks/useUnacceptedMembers";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function AcceptMembersPage() {
  const { unacceptedMembersData } = useUnacceptedMembers();
  return (
    <AdminPageLayout>
      <div className={"flex gap-2 items-center pb-2"}>
        <Link
          href={"/admin/members"}
          className={
            "bg-sky-500 flex gap-1 items-center text-white p-1 pl-2 pr-3 text-sm rounded-lg hover:bg-sky-600 transition-colors"
          }
        >
          <ChevronLeftIcon className={"size-4"} />
          <p>Members</p>
        </Link>
        <div className={"text-2xl font-bold"}>Accept Members</div>
      </div>
      <MemberList membersData={unacceptedMembersData!} />
    </AdminPageLayout>
  );
}
