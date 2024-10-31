"use client";

import AdminPageLayout from "@/app/components/admin-page-layout";
import MemberList from "@/app/components/member-list";
import Link from "next/link";
import useMembers from "@/lib/hooks/useMembers";
import { useState } from "react";
import ConfigButton from "@/app/components/config-button";

export default function MembersPage() {
  const { membersData, mutateMembers } = useMembers();
  const [selected, setSelected] = useState<string[]>([]);

  async function deleteMembers() {
    const requestDeleteMembers = await fetch("/api/members/unaccepted", {
      method: "PUT",
      body: JSON.stringify({
        members: selected,
      }),
    });
    setSelected([]);
    const result = await requestDeleteMembers.json();
    await mutateMembers();

    console.log(result);
  }
  async function activeMembers() {
    const requestDeleteMembers = await fetch("/api/members/active", {
      method: "PUT",
      body: JSON.stringify({
        active: true,
        members: selected,
      }),
    });
    const result = await requestDeleteMembers.json();
    await mutateMembers();

    console.log(result);
  }
  async function alumniMembers() {
    const requestDeleteMembers = await fetch("/api/members/active", {
      method: "PUT",
      body: JSON.stringify({
        active: false,
        members: selected,
      }),
    });
    const result = await requestDeleteMembers.json();
    await mutateMembers();

    console.log(result);
  }

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
      <div className={`flex items-center justify-start gap-2`}>
        <ConfigButton
          disabled={selected.length <= 0}
          onClick={deleteMembers}
          className={`${selected.length > 0 ? "bg-red" : "bg-red/50"}`}
        >
          Delete
        </ConfigButton>
        <ConfigButton
          onClick={alumniMembers}
          className={`${selected.length > 0 ? "bg-blue" : "bg-blue/50"}`}
          disabled={selected.length <= 0}
        >
          Alumni
        </ConfigButton>
        <ConfigButton
          onClick={activeMembers}
          className={`${selected.length > 0 ? "bg-green" : "bg-green/50"}`}
          disabled={selected.length <= 0}
        >
          Active
        </ConfigButton>
      </div>
      <MemberList
        membersData={membersData!}
        state={selected}
        setState={setSelected}
      />
    </AdminPageLayout>
  );
}
