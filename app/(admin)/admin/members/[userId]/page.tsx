"use client";

import AdminPageLayout from "@/app/components/admin-page-layout";
import useMember from "@/lib/hooks/useMember";
import React from "react";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import getMemberName from "@/lib/get-member-name";
import UserData from "@/app/components/user-data";

export default function MemberPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { memberData } = useMember(React.use(params).userId);

  return (
    <AdminPageLayout>
      <Link
        href={"/admin/members"}
        className={"flex items-center gap-2 py-2 hover:underline"}
      >
        <ChevronLeftIcon className={"size-6"} />
        <p>Members Page</p>
      </Link>
      <div className={"flex gap-2 items-center"}>
        <div className={"text-2xl font-bold py-2"}>
          {getMemberName(memberData)}
        </div>
        <Link
          href={`/admin/members/${React.use(params).userId}/edit`}
          className={
            "p-1 px-3 rounded-lg bg-blue hover:bg-blue/80 text-white text-sm transition-colors"
          }
        >
          Edit
        </Link>
      </div>
      <div
        className={
          "p-2 rounded-xl bg-white grid grid-cols-2 lg:grid-cols-4 gap-2"
        }
      >
        <UserData title={"First Name"} data={memberData?.firstName} />
        <UserData title={"Last Name"} data={memberData?.lastName} />
        <UserData title={"Github Name"} data={memberData?.name} />
        <UserData title={"Part"} data={memberData?.part} />
        <UserData title={"Generation"} data={memberData?.generation} />
        <UserData title={"Role"} data={memberData?.role} />
        <UserData
          title={"State"}
          data={memberData?.active ? "Active" : "Alumni"}
        />
      </div>
    </AdminPageLayout>
  );
}
