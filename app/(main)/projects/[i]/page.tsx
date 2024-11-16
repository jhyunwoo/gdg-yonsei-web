// pages/[i]/page.tsx

import React, { FC } from "react";
import Chip from "@/app/components/project-page/chip";
import CarouselComponent from "@/app/components/project-page/carouselComponent";
import Link from "next/link";
import getProject from "@/lib/server/get-project";
import { getProjectImageLink } from "@/lib/links/projectLinks";

// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   defaultImage: string;
//   images: string[];
//   github: string;
//   createdAt: Date;
//   updatedAt: Date;
//   author: string;
// }

// interface ProjectMembers {

// }

interface ProjectPageProps {
  params: Promise<{
    i: string;
  }>;
}

const ProjectDescPage: FC<ProjectPageProps> = async ({ params }) => {
  const projectId: string = (await params).i;

  const projectData = await getProject(projectId);
  const project = projectData.project;
  const members = projectData.participants //await getProjectMembers(projectId);

  if (!project) {
    return (
      <div>
        <h2>Project not found</h2>
      </div>
    );
  }

  const imageLinks = project.images? project.images.map((imageFileName) => getProjectImageLink(project.id, imageFileName)) : []; // return empty array if images is null

  return (
    <section className={"min-h-[800px] mt-[90px]"}>
      {/* Page header */}
      <div className={"w-full lg:w-[70%] max-w-[1300px] ml-4 lg:mx-auto my-2"}>
        <h1 className={"text-4xl font-bold"}>{project.title}</h1>
      </div>
      <hr></hr>
      {/* Project Description */}
      <div className={"w-full lg:w-[70%] max-w-[1300px] ml-4 lg:mx-auto"}>
        <div className="flex flex-col gap-4">
          {/* Carousel */}
          <div className="w-full my-2">
            <CarouselComponent projectId={project.id} images={imageLinks}></CarouselComponent>
          </div>
          {/* TODO Mini carousel for image selection */}
          {/* Contributors */}
          <h1 className={"text-2xl"}>Contributors</h1>
          <div className={"flex flex-row gap-2"}>
            {members.map((contributor, index) => (
              <Chip key={index} text={contributor.name? contributor.name: "Anonymous"} />
            ))}
          </div>
          <h1 className={"text-2xl"}>About this project</h1>
          {project.description?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <h1 className={"text-2xl"}>Links</h1>
          {project.github? 
            <Link href={"https://" + project.github} className={"hover:underline"}>
              Github link
            </Link>
          : ""} {/* TODO grab convention for github links */}
          <Link href={"/projects"} className={"hover:underline"}>
            Back to projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescPage;
