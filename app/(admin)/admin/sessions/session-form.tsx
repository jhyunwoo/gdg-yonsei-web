"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import SingleImageUploader from "@/app/components/single-image-uploader";
import MultipleImageUploader from "@/app/components/multiple-image-uploader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    date: yup
      .string()
      .matches(
        /^\d{4}\/\d{2}\/\d{2}$/,
        "날짜 형식은 yyyy/MM/dd 형식이어야 합니다.",
      )
      .required("날짜를 입력해 주세요."),
  })
  .required();

interface SessionInsertType {
  title: string;
  description: string;
  date: string;
}
export default function SessionForm({}) {
  const { register, handleSubmit } = useForm<SessionInsertType>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<SessionInsertType> = async (data) => {
    const createSession = await fetch("/api/sessions", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await createSession.json();
    console.log(result);
    router.replace("/admin/sessions");
  };

  const [defaultImage, setDefaultImage] = useState<File>();
  const [images, setImages] = useState<File[]>([]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"flex flex-col w-full gap-1"}
    >
      <div>
        <div className={"text-sm text-neutral-700 px-4"}>Title</div>
        <input
          {...register("title")}
          className={"edit-form"}
          placeholder={"Title"}
        />
      </div>
      <div>
        <div className={"text-sm text-neutral-700 px-4"}>Date (YYYY/MM/DD)</div>
        <input
          {...register("date")}
          className={"edit-form"}
          placeholder={"YYYY/MM/DD"}
        />
      </div>
      <div>
        <div className={"text-sm text-neutral-700 px-4"}>Description</div>
        <textarea
          {...register("description")}
          className={"text-area-from"}
          placeholder={"Description"}
        />
      </div>
      <div className={"w-full grid grid-cols-1 lg:grid-cols-2 gap-2"}>
        <SingleImageUploader
          title={"Default Image"}
          setImage={setDefaultImage}
          image={defaultImage}
        />
        <MultipleImageUploader
          title={"Images"}
          setImages={setImages}
          images={images}
        />
      </div>
      <button
        type={"submit"}
        className={
          "p-2 rounded-lg bg-neutral-800 text-white text-lg font-semibold hover:bg-neutral-950 transition-colors"
        }
      >
        Submit
      </button>
    </form>
  );
}
