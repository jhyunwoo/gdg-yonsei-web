"use client";

import AdminPageLayout from "@/app/components/admin-page-layout";
import AdminPageTitle from "@/app/components/admin-page-title";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import SessionForm from "@/app/(admin)/admin/sessions/session-form";

export default function CreateSessionPage() {
  return (
    <AdminPageLayout>
      <div className={"flex flex-col gap-2"}>
        <Link
          href={"/admin/sessions"}
          className={"flex gap-2 items-center hover:underline"}
        >
          <ChevronLeftIcon className={"size-6"} />
          <p>Sessions</p>
        </Link>
        <AdminPageTitle>Create Session</AdminPageTitle>
      </div>
      <SessionForm />
    </AdminPageLayout>
  );
}
