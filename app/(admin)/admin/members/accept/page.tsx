"use client";

import AdminPageLayout from "@/app/components/admin-page-layout";
import MemberList from "@/app/components/member-list";
import Link from "next/link";
import useUnacceptedMembers from "@/lib/hooks/useUnacceptedMembers";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ConfigButton from "@/app/components/config-button";
import { useLoadingStore } from "@/app/components/loading-store-provider";

export default function AcceptMembersPage() {
  const { unacceptedMembersData, mutateUnacceptedMembers } =
    useUnacceptedMembers();
  const [selected, setSelected] = useState<string[]>([]);
  const { setLoading, clearLoading } = useLoadingStore((state) => state);

  async function acceptMembers() {
    setLoading("Accepting members...");
    const requestAcceptMembers = await fetch("/api/members/accept", {
      method: "PUT",
      body: JSON.stringify({
        members: selected,
      }),
    });
    const result = await requestAcceptMembers.json();
    setSelected([]);
    await mutateUnacceptedMembers();
    console.log(result);
    clearLoading();
  }

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
      <div className={`flex items-center justify-start gap-2`}>
        <ConfigButton
          onClick={acceptMembers}
          className={`${selected.length > 0 ? "bg-green" : "bg-green/50"}`}
          disabled={selected.length <= 0}
        >
          Accept
        </ConfigButton>
      </div>
      {unacceptedMembersData && unacceptedMembersData.length > 0 ? (
        <MemberList
          membersData={unacceptedMembersData!}
          state={selected}
          setState={setSelected}
        />
      ) : (
        <p className={"w-full p-2 text-center text-lg"}>No Members!</p>
      )}
    </AdminPageLayout>
  );
}
