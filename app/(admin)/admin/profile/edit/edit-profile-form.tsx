"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { ReactNode, useEffect, useState } from "react";
import SingleImageUploader from "@/app/components/single-image-uploader";
import uploadImages from "@/lib/upload-images";
import { useRouter } from "next/navigation";
import { useModalLoading } from "@/lib/stores/modal-loading";

interface ProfileType {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  githubId: string;
  linkedInId: string;
  instagramId: string;
}

interface UserDataType {
  id: string;
  name: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  image: string | null;
  generation: number | null;
  part: string | null;
  role: "member" | "core" | "lead" | "unverified";
  githubId: string | null;
  linkedInId: string | null;
  instagramId: string | null;
  active: boolean;
}

function InputWithTitle({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div>
      <div>{title}</div>
      {children}
    </div>
  );
}

export default function EditProfileForm({
  userData,
}: {
  userData: UserDataType;
}) {
  const { register, handleSubmit, setValue } = useForm<ProfileType>();
  const [profileImage, setProfileImage] = useState<File>();
  const router = useRouter();
  const { setModalLoading, clearLoading } = useModalLoading((state) => state);
  const onSubmit: SubmitHandler<ProfileType> = async (data) => {
    setModalLoading("Updating Profile...", 10);
    if (profileImage) {
      setModalLoading("Uploading Image...", 50);
      await uploadImages(userData.id, [profileImage], "profile");
    }
    const requestUpdate = await fetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify({
        ...data,
        ...(profileImage && {
          image: `https://image.gdgyonsei.moveto.kr/profile/${userData.id}/${profileImage.name}`,
        }),
      }),
    });
    const result = await requestUpdate.json();
    console.log(result);
    setModalLoading("Update Complete", 100);
    clearLoading();
    router.replace("/admin/profile");
  };

  useEffect(() => {
    if (userData.name) {
      setValue("name", userData.name);
    }
    if (userData.firstName) {
      setValue("firstName", userData.firstName);
    }
    if (userData.lastName) {
      setValue("lastName", userData.lastName);
    }
    if (userData.email) {
      setValue("email", userData.email);
    }
    if (userData.githubId) {
      setValue("githubId", userData.githubId);
    }
    if (userData.linkedInId) {
      setValue("linkedInId", userData.linkedInId);
    }
    if (userData.instagramId) {
      setValue("instagramId", userData.instagramId);
    }
  }, [
    setValue,
    userData.email,
    userData.firstName,
    userData.githubId,
    userData.instagramId,
    userData.lastName,
    userData.linkedInId,
    userData.name,
  ]);

  return (
    <div className={"flex gap-4"}>
      <div className={"w-1/3"}>
        <SingleImageUploader
          title={"Profile Image"}
          setImage={setProfileImage}
          image={profileImage}
          type={"profile"}
          projectId={userData.id}
          prevImage={userData.image}
          imageUrl={userData.image!}
          isSquare={true}
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={"flex flex-col gap-2 w-full"}
      >
        <InputWithTitle title={"Github Name"}>
          <input
            {...register("name", { required: true })}
            placeholder={"Github Name"}
            className={"edit-form"}
          />
        </InputWithTitle>
        <InputWithTitle title={"First Name"}>
          <input
            {...register("firstName")}
            placeholder={"First Name"}
            className={"edit-form"}
          />
        </InputWithTitle>
        <InputWithTitle title={"Last Name"}>
          <input
            {...register("lastName")}
            className={"edit-form"}
            placeholder={"Last Name"}
          />
        </InputWithTitle>
        <InputWithTitle title={"E-mail"}>
          <input
            {...register("email")}
            className={"edit-form"}
            placeholder={"E-mail"}
          />
        </InputWithTitle>
        <InputWithTitle title={"Github ID"}>
          <input
            {...register("githubId")}
            className={"edit-form"}
            placeholder={"Github ID"}
          />
        </InputWithTitle>
        <InputWithTitle title={"Linked In Id"}>
          <input
            {...register("linkedInId")}
            className={"edit-form"}
            placeholder={"Linked In Id"}
          />
        </InputWithTitle>
        <InputWithTitle title={"Instagram ID"}>
          <input
            {...register("instagramId")}
            className={"edit-form"}
            placeholder={"Instagram ID"}
          />
        </InputWithTitle>
        <button
          type={"submit"}
          className={
            "p-2 rounded-full text-center text-lg font-semibold bg-neutral-900 text-white"
          }
        >
          Update
        </button>
        <p>If you prefer not to disclose, please leave it blank.</p>
      </form>
    </div>
  );
}
