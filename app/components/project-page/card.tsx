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
  contributors: string[] | null;
  defaultImage: string;
  startDate: string | null;
  endDate: string | null;
}

// Create the functional component using props
const ProjectCard: FC<ProjectCardProps> = ({
  projectId,
  projectName,
  description,
  contributors,
  defaultImage,
  startDate,
  endDate,
}) => {
  const validDescription = description
    ? description
    : ["Description not provided"];

  return (
    <>
      <Link href={getProjectLink(projectId)} className="hover:no-underline">
        <article className="rounded-md border border-slate-400 p-2 flex flex-row gap-4 max-h-[340px]">
          <div className=" bg-clip-border min-w-[300px]">
            <Image
              src={getProjectImageLink(projectId, defaultImage)}
              alt="Project image"
              width={500}
              height={500}
              className="rounded-md max-h-[300px] max-w-[300px] aspect-ratio" /* this should be aspect ratio 1*/
            />
          </div>
          <div className="w-full overflow-hidden min-w-0 whitespace-normal border-gray-300 relative max-h-[300px]">
            <h2 className={"text-2xl lg:text-4xl"}>{projectName}</h2>
            {contributors?.map((contributor, index) => (
              <span key={index} className={"text-gray-500 text-lg lg:text-xl"}>
                {contributor}
                {index < contributors.length - 1 && ", "}
              </span>
            ))}
            <br />
            <div className="flex flex-row gap-2 text-lg lg:text:2xl font-bold my-2">
              <span>Duration: </span>
              <span>{startDate} ~</span>
              <span>{endDate}</span>
            </div>
            Project has no shortened description.
            {/* {validDescription.slice(0, 1).map((description, index) => (
              <p key={index}>{description}</p>
            ))} */}
            {/* <div className="h-full w-full bg-gradient-to-r from-transparent to-white absolute top-0"></div> */}
          </div>
        </article>
      </Link>
    </>
  );
};

export default ProjectCard;
