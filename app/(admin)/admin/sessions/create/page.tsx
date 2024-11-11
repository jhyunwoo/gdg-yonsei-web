"use client";

import AdminPageLayout from "@/app/components/admin-page-layout";
import AdminPageTitle from "@/app/components/admin-page-title";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { SubmitHandler, useForm } from "react-hook-form";

interface SessionInsertType {
  title: string;
  description: string;
}

export default function CreateSessionPage() {
  const { register, handleSubmit } = useForm<SessionInsertType>();
  const onSubmit: SubmitHandler<SessionInsertType> = (data) =>
    console.log(data);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title")}
          className={"edit-form"}
          placeholder={"Title"}
        />
        <textarea
          {...register("description")}
          className={"text-area-from"}
          placeholder={"Description"}
        />
      </form>
    </AdminPageLayout>
  );
}
