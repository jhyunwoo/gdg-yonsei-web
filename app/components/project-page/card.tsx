import NoImg from "@/app/components/placeholder-image";
import { getProjectImageLink, getProjectLink } from "@/lib/links/projectLinks";
import Image from "next/image";
import Link from "next/link";

// components/ProjectCard.tsx

import React, { FC } from "react";

interface ProjectCardProps {
  projectId: string;
  projectName: string;
  description: string | null;
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
    : "Description not provided";

  return (
    <article className="rounded-md border border-slate-400 p-2 flex flex-row gap-4 max-h-[240px] m-4">
      <div className="min-h-[160px] min-w-[320px] overflow-x-hidden bg-clip-border">
        <Image
          src={getProjectImageLink(projectId, defaultImage)}
          alt="Project image"
          width={500}
          height={500}
        />
      </div>
      <div>
        <Link href={getProjectLink(projectId)}>
          <h1 className={"text-2xl"}>{projectName}</h1>
        </Link>
        <p>{validDescription}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
