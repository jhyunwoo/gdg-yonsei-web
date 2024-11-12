"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useProjectMembers from "@/lib/hooks/useProjectMembers";
import { useLoading } from "@/lib/stores/loading";
import { useRouter } from "next/navigation";
import getMemberName from "@/lib/get-member-name";
import { ParticipantsType, ProjectType } from "@/lib/hooks/useProject";
import uploadImages from "@/lib/upload-images";
import { useModalLoading } from "@/lib/stores/modal-loading";
import SingleImageUploader from "@/app/components/single-image-uploader";
import MultipleImageUploader from "@/app/components/multiple-image-uploader";
import useTags from "@/lib/hooks/useTags";

export interface InsertProjectType {
  title: string;
  description: string;
  github: string;
  tags: string;
}

export default function ProjectForm({
  projectData,
  participantsData,
  type,
  tagsData,
}: {
  projectData?: ProjectType;
  participantsData?: ParticipantsType[];
  type: "POST" | "PUT";
  tagsData?: { name: string | null }[] | undefined;
}) {
  const { register, handleSubmit, setValue, getValues } =
    useForm<InsertProjectType>();
  const { projectMembersData } = useProjectMembers();
  const { tagsData: tags } = useTags();
  const router = useRouter();
  const { setModalLoading, clearLoading } = useModalLoading((state) => state);

  const [defaultImage, setDefaultImage] = useState<File>();
  const [images, setImages] = useState<File[]>([]);
  const [participants, setParticipants] = useState<string[]>([]);

  const { loading } = useLoading((state) => state);

  function handleParticipant(id: string) {
    if (participants.includes(id)) {
      setParticipants(participants.filter((participant) => participant !== id));
    } else {
      setParticipants([...participants, id]);
    }
  }

  const onSubmit: SubmitHandler<InsertProjectType> = async (data) => {
    if (participants.length === 0) {
      return alert("Please select at least one participant.");
    }

    setModalLoading(
      type === "POST" ? "Creating Project..." : "Updating Project...",
      0,
    );
    const createProject = await fetch("/api/projects", {
      method: type,
      body: JSON.stringify({
        ...(type === "PUT" && { id: projectData?.id }),
        title: data.title,
        description: data.description.split("\n"),
        github: data.github,
        participants: participants,
        tags: data.tags.split(","),
      }),
    });
    const createResult = (await createProject.json()) as { id: string };

    if (defaultImage) {
      setModalLoading("Upload Default Image...", 30);
      await uploadImages(createResult.id, [defaultImage], "projects");
    }
    if (images.length > 0) {
      setModalLoading("Upload Images...", 50);
      await uploadImages(createResult.id, images, "projects");
    }

    const updateImages = await fetch("/api/projects", {
      method: "PUT",
      body: JSON.stringify({
        id: createResult.id,
        ...(defaultImage && { defaultImage: defaultImage.name }),
        ...(images.length > 0 && {
          images: images.map((data) => data.name),
        }),
      }),
    });

    await updateImages.json();

    setModalLoading(
      type === "POST"
        ? "Complete Creating Project"
        : "Complete Updating Project",
      100,
    );
    router.push(`/admin/projects`);
    clearLoading();
  };

  useEffect(() => {
    if (projectData?.title) {
      setValue("title", projectData.title);
    }
    if (projectData?.description) {
      let descriptionData = "";
      for (const text of projectData.description) {
        descriptionData += text + "\n";
      }
      setValue("description", descriptionData);
    }
    if (projectData?.github) {
      setValue("github", projectData.github);
    }
    if (participantsData) {
      setParticipants(participantsData.map((participant) => participant.id!));
    }
    if (tagsData && tagsData.length > 0) {
      let tagString = "";
      for (const tag of tagsData) {
        tagString += tag.name + ",";
      }
      setValue("tags", tagString);
    }
  }, [
    participantsData,
    projectData?.description,
    projectData?.github,
    projectData?.title,
    setValue,
    tagsData,
  ]);

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
        placeholder={"Github URL"}
        {...register("github")}
      />
      <div>Tag</div>
      <input
        className={"edit-form"}
        placeholder={"Tags (comma separated)"}
        {...register("tags")}
      />
      <div className={"grid grid-cols-2 gap-2"}>
        {tags?.map((tag, index) => (
          <button
            type={"button"}
            key={index}
            onClick={() => setValue("tags", getValues("tags") + "," + tag.name)}
            className={`p-1 px-3 rounded-lg ring-2 ring-neutral-600`}
          >
            <div>{tag.name}</div>
          </button>
        ))}
      </div>
      <div>Participants</div>
      <div className={"grid grid-cols-2 gap-2"}>
        {projectMembersData?.map((member) => (
          <button
            type={"button"}
            key={member.id}
            onClick={() => handleParticipant(member.id)}
            className={`${participants.includes(member.id) ? "bg-neutral-950 text-white" : ""} p-1 px-3 rounded-lg ring-2 ring-neutral-600`}
          >
            <div>{getMemberName(member)}</div>
          </button>
        ))}
      </div>
      <div className={"w-full grid grid-cols-1 lg:grid-cols-2 gap-2"}>
        <SingleImageUploader
          title={"Default Image"}
          setImage={setDefaultImage}
          image={defaultImage}
          prevImage={projectData?.defaultImage}
          projectId={projectData?.id}
          type={"projects"}
        />
        <MultipleImageUploader
          title={"Images"}
          setImages={setImages}
          images={images}
          prevImages={projectData?.images}
          projectId={projectData?.id}
          type={"projects"}
        />
      </div>
      <div className={"w-full flex flex-col"}>
        <div>Description</div>
        <textarea
          className={
            "p-2 bg-neutral-100 rounded-lg px-4 font-semibold text-lg w-full;"
          }
          placeholder={"Description"}
          {...register("description")}
        />
      </div>
      <button
        type={"submit"}
        disabled={!!loading}
        className={
          "p-2 rounded-lg bg-neutral-800 text-white text-lg font-semibold hover:bg-neutral-950 transition-colors"
        }
      >
        Submit
      </button>
    </form>
  );
}
