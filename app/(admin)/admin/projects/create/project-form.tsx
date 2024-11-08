"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import useProjectMembers from "@/lib/hooks/useProjectMembers";
import { useState } from "react";

interface InsertProjectType {
  title: string;
  description: string;
  defaultImage: string;
  github: string;
}

export default function ProjectForm() {
  const { register, handleSubmit } = useForm<InsertProjectType>();
  const [participants, setParticipants] = useState<string[]>([]);
  const onSubmit: SubmitHandler<InsertProjectType> = (data) => {
    console.log(data);
  };

  const { projectMembersData } = useProjectMembers();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"flex flex-col p-4 bg-white rounded-xl gap-2"}
    >
      <input
        className={"edit-form"}
        placeholder={"Title"}
        {...register("title", {
          required: { value: true, message: "Please enter the title." },
        })}
      />
      <input
        className={"edit-form"}
        placeholder={"Description"}
        {...register("description")}
      />
      <input
        className={"edit-form"}
        placeholder={"Github URL"}
        {...register("github")}
      />
    </form>
  );
}
