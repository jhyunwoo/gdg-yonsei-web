import ProjectCard from "@/app/components/project-page/card";
import Chip from "@/app/components/project-page/chip";
import getProjects from "@/lib/server/get-projects";

export default async function ProjectsPage() {
  const allProjects = await getProjects();
  console.log(allProjects);
  return (
    <section className={"min-h-[400px] mt-[90px]"}>
      {/* Page header */}
      <div
        className={
          "w-full lg:w-[70%] max-w-[1300px] ml-2 lg:mx-auto my-2 flex-col"
        }
      >
        <h1 className={"text-4xl font-bold"}>Projects</h1>
      </div>
      <hr></hr>
      {/* Project Listing */}
      <div className={"w-full lg:w-[70%] max-w-[1300px] mx-auto"}>
        <div>
          <div className={"flex gap-2 m-4"}>
            <div>Stage</div>
            <Chip text={"22-23"}></Chip>
            <Chip text={"23-24"}></Chip>
            <Chip text={"24-25"}></Chip>
          </div>
          <div className="my-2">
            <div className="flex flex-col gap-2 mx-2">
              {allProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  projectId={project.id}
                  projectName={project.title}
                  description={project.description}
                  defaultImage={project.defaultImage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
