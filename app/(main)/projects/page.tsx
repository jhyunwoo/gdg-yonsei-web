import ProjectCard from "@/app/components/project-page/card";
import Chip from "@/app/components/project-page/chip";
import db from "@/db";
import { projects } from "@/db/schema";
import getProjects from "@/lib/server/get-projects";

// interface AllProjects {

// }

export default async function ProjectsPage() {
  const allProjects = await getProjects();
  
  
  console.log("First project id is " + allProjects[0].id);
  return (
    <section className={"min-h-[400px] m-2 mt-[90px]"}>
      {/* Page header */}
      <div className={"w-[70%] max-w-[1300px] mx-auto my-2 flex-col"}>
        <h1 className={"text-4xl font-bold"}>Projects</h1>
      </div>
      <hr></hr>
      {/* Project Listing */}
      <div className={"w-[70%] max-w-[1300px] mx-auto"}>
        <div>
          <div className={"flex gap-2 m-4"}>
            <div>Stage</div>
            <Chip text={"22-23"}></Chip>
            <Chip text={"23-24"}></Chip>
            <Chip text={"24-25"}></Chip>
          </div>
          <div>
            {allProjects.map((project, index) =>
             (
              <ProjectCard
              key={index}
              projectId= {project.id}
              projectName={project.title}
              description={project.description}
              defaultImage={project.defaultImage}
            >
            </ProjectCard>
             ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
