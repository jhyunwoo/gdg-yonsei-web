"use client";

import { SubmitHandler, useForm } from "react-hook-form";

interface InsertProjectType {
  title: string;
  description: string;
  defaultImage: string;
  github: string;
}

export default function ProjectForm() {
  const { register, handleSubmit } = useForm<InsertProjectType>();
  const onSubmit: SubmitHandler<InsertProjectType> = (data) => {
    console.log(data);
  };

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
