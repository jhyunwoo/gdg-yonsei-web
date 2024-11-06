import NoImg from "@/app/components/placeholder-image";

// components/ProjectCard.tsx

import React, { FC } from 'react';

interface ProjectCardProps {
  projectName: string;
  description: string;
}

// Create the functional component using props
const ProjectCard: FC<ProjectCardProps> = ({ projectName, description }) => {
  return (
    <article className="rounded-md border border-slate-400 p-2 flex flex-row gap-4 max-h-[240px] m-4">
      <div className="min-h-[160px] min-w-[320px] overflow-x-hidden bg-clip-border">
        <NoImg />
      </div>
      <div>
        <h1 className={"text-2xl"}>{projectName}</h1>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
