// pages/[i]/page.tsx

import React, { FC } from "react";
import Chip from "@/app/components/project-page/chip";
import CarouselComponent from "@/app/components/project-page/carouselComponent";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import getProject from "@/lib/server/get-project";
import { projects } from "@/db/schema";
import db from "@/db";
import getProjectMembers from "@/lib/server/get-project-members";
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
  params: {
    i: string;
  };
  // members: ProjectMembers | null;\
}

const ProjectDescPage: FC<ProjectPageProps> = async ({ params }) => {
  const projectId: string = params.i;

  const project = await getProject(projectId);
  const members = await getProjectMembers(projectId);

  if (!project) {
    return (
      <div>
        <h2>Project not found</h2>
      </div>
    );
  }

  const imageLinks = project.images? project.images.map((imageFileName) => getProjectImageLink(project.id, imageFileName)) : []; // return empty array if images is null

  return (
    <section className={"min-h-[400px] m-2 mt-[90px]"}>
      {/* Page header */}
      <div className={"w-[70%] max-w-[1300px] mx-auto my-2"}>
        <h1 className={"text-4xl font-bold"}>{project.title}</h1>
      </div>
      <hr></hr>
      {/* Project Description */}
      <div className={"w-[70%] max-w-[1300px] mx-auto"}>
        <div className="flex flex-col gap-4">
          {/* Carousel */}
          <CarouselComponent images={imageLinks}></CarouselComponent>
          {/* TODO Mini carousel for image selection */}
          {/* Contributors */}
          <h1 className={"text-2xl"}>Contributors</h1>
          <div className={"flex flex-row gap-2"}>
            {members.map((contributor, index) => (
              <Chip key={index} text={contributor} />
            ))}
          </div>
          <h1 className={"text-2xl"}>About this project</h1>
          {project.description}
          <h1 className={"text-2xl"}>Links</h1>
          <Link href={"/projects"} className={"hover:underline"}>
            Back to projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescPage;
