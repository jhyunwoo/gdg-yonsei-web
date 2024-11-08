"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import useProjectMembers from "@/lib/hooks/useProjectMembers";

interface InsertProjectType {
  title: string;
  description: string;
  github: string;
}

export default function ProjectForm() {
  const { register, handleSubmit } = useForm<InsertProjectType>();
  const { projectMembersData } = useProjectMembers();

  const [defaultImage, setDefaultImage] = useState<File>();
  const [images, setImages] = useState<FileList | null>(null);
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipant(id: string) {
    if (participants.includes(id)) {
      setParticipants(participants.filter((participant) => participant !== id));
    } else {
      setParticipants([...participants, id]);
    }
  }

  const onSubmit: SubmitHandler<InsertProjectType> = async (data) => {
    const createProject = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        github: data.github,
        participants: participants,
      }),
    });
    const createResult = (await createProject.json()) as { id: string };
    console.log(createResult);

    const requestDefaultImageUploadUrl = await fetch("/api/images", {
      method: "POST",
      body: JSON.stringify({
        folderId: createResult.id,
        files: [{ name: defaultImage?.name, type: defaultImage?.type }],
      }),
    });
    const defaultImageUploadUrl =
      (await requestDefaultImageUploadUrl.json()) as string[];
    await fetch(defaultImageUploadUrl[0], {
      method: "PUT",
      body: defaultImage,
    });

    const imagesArray = Array.from(images!);

    const imagesData = [];

    for (let i = 0; i < imagesArray.length; i += 1) {
      imagesData.push({
        name: imagesArray[i].name,
        type: imagesArray[i].type,
      });
    }

    const requestImagesUploadUrl = await fetch("/api/images", {
      method: "POST",
      body: JSON.stringify({
        folderId: createResult.id,
        files: imagesData,
      }),
    });
    const imagesUploadUrl = (await requestImagesUploadUrl.json()) as string[];
    for (const url of imagesUploadUrl) {
      await fetch(url, {
        method: "PUT",
        body: imagesArray.shift(),
      });
    }
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
      <input
        type={"file"}
        accept={"image/*"}
        onChange={(event) => setDefaultImage(event.target.files?.[0])}
      />
      <input
        type={"file"}
        accept={"image/*"}
        multiple={true}
        onChange={(event) => setImages(event.target.files)}
      />
      <div>Participants</div>
      <div className={"grid grid-cols-2 gap-2"}>
        {projectMembersData?.map((member) => (
          <button
            type={"button"}
            key={member.id}
            onClick={() => handleParticipant(member.id)}
            className={`${participants.includes(member.id) ? "bg-neutral-950 text-white" : ""} p-1 px-3 rounded-lg ring-2 ring-neutral-600`}
          >
            <div>{member.name}</div>
          </button>
        ))}
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
