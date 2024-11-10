"use client";

import useProjects from "@/lib/hooks/useProjects";
import Link from "next/link";
import getKoDate from "@/lib/get-ko-date";
import getMemberName from "@/lib/get-member-name";

export default function ProjectList() {
  const { projectsData } = useProjects();

  return (
    <div
      className={
        "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-4"
      }
    >
      {projectsData?.map((project) => (
        <Link
          href={`/admin/projects/${project.id}`}
          key={project.id}
          className={"bg-white p-2 rounded-lg ring-2 ring-neutral-700"}
        >
          <div className={"text-xl font-semibold text-center p-4"}>
            {project.title}
          </div>

          <div className={"flex flex-col items-start justify-center"}>
            <div className={"text-sm"}>
              Author:{" "}
              {getMemberName({
                firstName: project.authorFirstName,
                lastName: project.authorLastName,
                name: project.authorName,
              })}
            </div>
            <div className={"text-sm text-neutral-700"}>
              Edited At: {getKoDate(project.editedAt)}
            </div>
            <div className={"text-sm text-neutral-700"}>
              Created At: {getKoDate(project.createdAt)}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
