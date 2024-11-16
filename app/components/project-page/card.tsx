// import NoImg from "@/app/components/placeholder-image";
import { getProjectImageLink, getProjectLink } from "@/lib/links/projectLinks";
import Image from "next/image";
import Link from "next/link";

// components/ProjectCard.tsx

import React, { FC } from "react";

interface ProjectCardProps {
  projectId: string;
  projectName: string;
  description: string[] | null;
  defaultImage: string;
}

// Create the functional component using props
const ProjectCard: FC<ProjectCardProps> = ({
  projectId,
  projectName,
  description,
  defaultImage,
}) => {
  const validDescription = description
    ? description
    : ["Description not provided"];

  return (
    <>
      <Link href={getProjectLink(projectId)}>
        <article className="rounded-md border border-slate-400 p-2 flex flex-row gap-4 ">
          <div className=" bg-clip-border min-w-[240px]">
            <Image
              src={getProjectImageLink(projectId, defaultImage)}
              alt="Project image"
              width={500}
              height={500}
              className="rounded-md"
            />
          </div>
          <div className="w-full overflow-hidden min-w-0 whitespace-normal border-gray-300 relative">
            <h1 className={"text-2xl"}>{projectName}</h1>
            {validDescription.slice(0, 4).map((description, index) => (
              <p key={index}>{description}</p>
            ))}
            <div className="h-full w-full bg-gradient-to-r from-transparent to-white absolute top-0"></div>
          </div>
        </article>
      </Link>
    </>
  );
};

export default ProjectCard;
