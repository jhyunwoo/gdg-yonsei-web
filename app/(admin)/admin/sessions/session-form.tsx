"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import SingleImageUploader from "@/app/components/single-image-uploader";
import MultipleImageUploader from "@/app/components/multiple-image-uploader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import uploadImages from "@/lib/upload-images";
import { useModalLoading } from "@/lib/stores/modal-loading";
import { SessionType } from "@/lib/hooks/useSession";
import { format } from "date-fns";

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

export default function SessionForm({
  sessionData,
  type,
}: {
  sessionData?: SessionType;
  type: "POST" | "PUT";
}) {
  const { register, handleSubmit, setValue } = useForm<SessionInsertType>({
    resolver: yupResolver(schema),
  });

  const { setModalLoading, clearLoading } = useModalLoading((state) => state);

  const router = useRouter();

  const onSubmit: SubmitHandler<SessionInsertType> = async (data) => {
    const createSession = await fetch("/api/sessions", {
      method: type,
      body: JSON.stringify({
        ...(type === "PUT" && { id: sessionData?.id }),
        title: data.title,
        description: data.description.split("\n"),
        date: data.date,
      }),
    });
    const result = (await createSession.json()) as { id: string };

    if (!result.id) {
      return;
    }

    if (defaultImage) {
      setModalLoading("Upload Default Image...", 30);
      await uploadImages(result.id, [defaultImage], "sessions");
    }
    if (images.length > 0) {
      setModalLoading("Upload Images...", 50);
      await uploadImages(result.id, images, "sessions");
    }
    const updateImages = await fetch("/api/sessions", {
      method: "PUT",
      body: JSON.stringify({
        id: result.id,
        ...(defaultImage && { defaultImage: defaultImage.name }),
        ...(images.length > 0 && {
          images: images.map((data) => data.name),
        }),
      }),
    });

    await updateImages.json();

    setModalLoading("Complete Creating Project", 100);

    router.replace("/admin/sessions");
    clearLoading();
  };

  const [defaultImage, setDefaultImage] = useState<File>();
  const [images, setImages] = useState<File[]>([]);

  useEffect(() => {
    if (sessionData?.title) {
      setValue("title", sessionData.title);
    }
    if (sessionData?.description) {
      setValue("description", sessionData.description.join("\n"));
    }
    if (sessionData?.date) {
      setValue("date", format(sessionData.date, "yyyy/MM/dd"));
    }
  }, [
    sessionData?.date,
    sessionData?.description,
    sessionData?.title,
    setValue,
  ]);

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
          type={"sessions"}
          projectId={sessionData?.id}
          setImage={setDefaultImage}
          prevImage={sessionData?.defaultImage}
          image={defaultImage}
        />
        <MultipleImageUploader
          type={"sessions"}
          title={"Images"}
          projectId={sessionData?.id}
          setImages={setImages}
          prevImages={sessionData?.images}
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
