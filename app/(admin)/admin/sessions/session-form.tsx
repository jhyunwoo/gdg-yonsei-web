"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import SingleImageUploader from "@/app/components/single-image-uploader";
import MultipleImageUploader from "@/app/components/multiple-image-uploader";

interface SessionInsertType {
  title: string;
  description: string;
}
export default function SessionForm({}) {
  const { register, handleSubmit } = useForm<SessionInsertType>();
  const onSubmit: SubmitHandler<SessionInsertType> = (data) =>
    console.log(data);

  const [defaultImage, setDefaultImage] = useState<File>();
  const [images, setImages] = useState<File[]>([]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"flex flex-col w-full gap-1"}
    >
      <input
        {...register("title", { required: true })}
        className={"edit-form"}
        placeholder={"Title"}
      />
      <textarea
        {...register("description")}
        className={"text-area-from"}
        placeholder={"Description"}
      />
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
