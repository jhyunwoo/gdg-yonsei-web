"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserDataType } from "@/app/api/members/[userId]/route";

interface MemberDataType {
  firstName: string;
  lastName: string;
  name: string;
  part: string;
  generation: number;
  role: string;
  active: boolean;
}

export default function EditForm({ userId }: { userId: string }) {
  const { register, handleSubmit, setValue, watch } = useForm<MemberDataType>();
  const onSubmit: SubmitHandler<MemberDataType> = async (data) => {
    const requestUpdate = await fetch(`/api/members/${userId}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    await requestUpdate.json();
    router.replace(`/admin/members/${userId}`);
  };

  const [parts, setParts] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    async function fetchUserData() {
      const requestUserData = await fetch(`/api/members/${userId}`);
      const userData = (await requestUserData.json()) as UserDataType;

      const requestParts = await fetch("/api/members/parts");
      const parts = (await requestParts.json()) as string[];
      setParts(parts);
      if (userData.firstName) {
        setValue("firstName", userData.firstName);
      }
      if (userData.lastName) {
        setValue("lastName", userData.lastName);
      }
      if (userData.name) {
        setValue("name", userData.name);
      }
      if (userData.part) {
        setValue("part", userData.part);
      }
      if (userData.generation) {
        setValue("generation", userData.generation);
      }
      if (userData.role) {
        setValue("role", userData.role);
      }
      if (userData.active) {
        setValue("active", userData.active);
      }
    }
    fetchUserData();
  }, [setValue, userId]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full bg-white p-4 rounded-xl"
      }
    >
      <div>
        <div className={"text-neutral-600 text-sm pl-3"}>Github Name</div>
        <input
          {...register("name", { required: true })}
          className={"edit-form"}
        />
      </div>
      <div>
        <div className={"text-neutral-600 text-sm pl-3"}>First Name</div>
        <input {...register("firstName")} className={"edit-form"} />
      </div>
      <div>
        <div className={"text-neutral-600 text-sm pl-3"}>Last Name</div>
        <input {...register("lastName")} className={"edit-form"} />
      </div>
      <div>
        <div className={"text-neutral-600 text-sm pl-3"}>Part</div>
        <input {...register("part")} className={"edit-form"} />
        <div className={"grid grid-cols-2 gap-2 p-2"}>
          {parts.map((data) => (
            <button
              key={data}
              type={"button"}
              onClick={() => setValue("part", data)}
              className={
                "bg-neutral-100 p-1 px-2 rounded-lg ring-2 ring-neutral-500 text-sm"
              }
            >
              {data}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className={"text-neutral-600 text-sm pl-3"}>Generation</div>
        <input
          type={"number"}
          {...register("generation", {
            min: { value: 1, message: "Incorrect Value" },
          })}
          className={"edit-form"}
        />
      </div>
      <div>
        <div className={"text-neutral-600 text-sm pl-3"}>Role</div>
        <div className={"flex gap-2 *:p-1 *:px-3 *:rounded-lg text-white"}>
          <button
            onClick={() => setValue("role", "lead")}
            type={"button"}
            className={`${watch("role") === "lead" ? "bg-red" : "bg-red-light"}`}
          >
            Lead
          </button>
          <button
            onClick={() => setValue("role", "core")}
            type={"button"}
            className={`${watch("role") === "core" ? "bg-green" : "bg-green-light"}`}
          >
            Core
          </button>
          <button
            onClick={() => setValue("role", "member")}
            type={"button"}
            className={`${watch("role") === "member" ? "bg-blue" : "bg-blue-light"}`}
          >
            Member
          </button>
        </div>
      </div>
      <div>
        <div className={"text-neutral-600 text-sm"}>Active</div>
        <div className={"flex gap-2 *:p-1 *:px-3 *:rounded-lg text-white"}>
          <button
            onClick={() => setValue("active", true)}
            type={"button"}
            className={`${watch("active") ? "bg-blue" : "bg-blue-light"}`}
          >
            Active
          </button>
          <button
            onClick={() => setValue("active", false)}
            type={"button"}
            className={`${!watch("active") ? "bg-red" : "bg-red-light"}`}
          >
            Alumni
          </button>
        </div>
      </div>
      <button
        type={"submit"}
        className={
          "p-2 bg-neutral-950 rounded-xl text-lg font-semibold text-white col-span-1 sm:col-span-2 lg:col-span-3"
        }
      >
        Submit
      </button>
    </form>
  );
}
