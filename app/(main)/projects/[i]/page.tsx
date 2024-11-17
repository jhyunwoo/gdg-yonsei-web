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
  const members = projectData.participants; //await getProjectMembers(projectId);
  const tags = projectData.tags.map((tag) => tag.name);

  if (!project) {
    return (
      <div>
        <h2>Project not found</h2>
      </div>
    );
  }

  const imageLinks = project.images
    ? project.images.map((imageFileName) =>
        getProjectImageLink(project.id, imageFileName),
      )
    : []; // return empty array if images is null

  return (
    <section className={"min-h-[800px]"}>
      {/* Page header */}
      <div className={"wrapper"}>
        <h2 className={"title"}>{project.title}</h2>
      </div>
      <hr />
      {/* Project Description */}
      <div className={"wrapper"}>
        <div className="flex flex-col gap-4">
          {/* Carousel */}
          <CarouselComponent
            projectId={project.id}
            images={imageLinks}
          ></CarouselComponent>
          {/* TODO Mini carousel for image selection */}
          {/* Contributors */}
          <div
            className={
              "horz-flex flex-wrap justify-between xl:justify-start xl:gap-x-32"
            }
          >
            <div className="w-[100%] xl:w-auto">
              <h2>Contributors</h2>
              <div className="horz-flex">
                {members.map((contributor, index) => (
                  <Chip
                    key={index}
                    text={contributor.name ? contributor.name : "Anonymous"}
                  />
                ))}
              </div>
            </div>
            <div>
              <h2>Tags</h2>
              <div className="horz-flex">
                {tags &&
                  tags
                    .filter((tag) => tag !== null) // Filter out null values
                    .map((tag, index) => <Chip key={index} text={tag} />)}
              </div>
            </div>
            <div>
              <h2 className="hidden">Links</h2>
              {project.github ? (
                <Link href={"https://" + project.github}>Github link</Link>
              ) : (
                ""
              )}{" "}
            </div>
          </div>
          <h2>About this project</h2>
          {project.description?.map((paragraph, index) =>
            paragraph ? <p key={index}>{paragraph}</p> : <></>,
          )}
          <div className="w-24 ml-auto my-4">
            <Link href={"#"}>Back to top</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescPage;
