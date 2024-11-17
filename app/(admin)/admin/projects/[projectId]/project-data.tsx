"use client";

import useProject from "@/lib/hooks/useProject";
import AdminPageTitle from "@/app/components/admin-page-title";
import getKoDate from "@/lib/get-ko-date";
import DataWithTitle from "@/app/components/data-with-title";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useConfirmModal } from "@/lib/stores/confirm-modal";

export default function ProjectData({ projectId }: { projectId: string }) {
  const { projectData, participants, tags, mutateProject } =
    useProject(projectId);
  const router = useRouter();
  const { setConfirmModal } = useConfirmModal((state) => state);

  async function handleDelete() {
    router.replace("/admin/projects");
    await fetch(`/api/projects/${projectId}`, {
      method: "DELETE",
    });
    await mutateProject();
  }

  return (
    <div className={"bg-white p-2 rounded-xl gap-4 flex flex-col"}>
      <Link
        href={"/admin/projects"}
        className={"flex items-center gap-2 hover:underline"}
      >
        <ChevronLeftIcon className={"size-6"} />
        <p>Projects</p>
      </Link>
      <div className={"flex gap-2 items-center"}>
        <AdminPageTitle>{projectData?.title}</AdminPageTitle>
        <Link
          href={`/admin/projects/${projectId}/edit`}
          className={
            "flex items-center gap-2 p-1 px-3 rounded-lg bg-blue text-white text-sm"
          }
        >
          <p>Edit</p>
        </Link>
        <button
          onClick={() =>
            setConfirmModal(
              "Are you sure you want to delete this project?",
              handleDelete,
            )
          }
          type={"button"}
          className={"text-sm text-white p-1 px-3 rounded-lg bg-red"}
        >
          Delete
        </button>
      </div>
      <div
        className={
          "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
        }
      >
        <DataWithTitle title={"Github Link"} data={projectData?.github} />
        <DataWithTitle
          title={"Edited At"}
          data={getKoDate(projectData?.editedAt)}
        />

        <DataWithTitle
          title={"Created At"}
          data={getKoDate(projectData?.createdAt)}
        />
      </div>
      <div className={"w-full"}>
        <div className={"text-sm text-neutral-700"}>Participants</div>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"
          }
        >
          {participants?.map((participant) => (
            <div
              key={participant.id}
              className={"bg-neutral-100 p-1 px-3 rounded-lg text-center"}
            >
              {participant.name}
            </div>
          ))}
        </div>
      </div>
      <div className={"w-full"}>
        <div className={"text-sm text-neutral-700"}>Tags</div>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"
          }
        >
          {tags?.map((tag, index) =>
            tag.name ? (
              <div
                key={index}
                className={"bg-neutral-100 p-1 px-3 rounded-lg text-center"}
              >
                {tag.name}
              </div>
            ) : null,
          )}
        </div>
      </div>
      <div className={"w-full grid-cols-1 grid lg:grid-cols-2 gap-2"}>
        <div>
          <div className={"text-sm text-neutral-700"}>Default Image</div>
          {projectData?.defaultImage && (
            <Image
              src={`https://image.gdgyonsei.moveto.kr/projects/${projectId}/${projectData?.defaultImage}`}
              alt={"Default Image"}
              width={300}
              height={300}
              className={"w-full"}
            />
          )}
        </div>
        <div>
          <div className={"text-sm text-neutral-700"}>Images</div>
          <div>
            {projectData?.images?.map((url) => (
              <Image
                key={url}
                src={`https://image.gdgyonsei.moveto.kr/projects/${projectId}/${url}`}
                alt={"Default Image"}
                width={300}
                height={300}
                className={"w-full"}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className={"text-sm text-neutral-700"}>Description</div>
        <div>
          {projectData?.description?.map((data, index) => (
            <div key={index}>{data}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
