import ProjectCard from "@/app/components/project-page/card";
import Chip from "@/app/components/project-page/chip";
import getProjects from "@/lib/server/get-projects";

// interface AllProjects {

// }

export default async function ProjectsPage() {
  const allProjects = await getProjects();

  // console.log("First project id is " + allProjects[0].id);
  return (
    <section className={"min-h-[400px] mt-[90px]"}>
      {/* Page header */}
      <div
        className={
          "wrapper flex-col"
        }
      >
        <h1 className={"text-4xl font-bold"}>Projects</h1>
      </div>
      <hr></hr>
      {/* Project Listing */}
      <div className={"wrapper"}>
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
                  projectId={project.project.id}
                  projectName={project.project.title}
                  description={project.project.description}
                  contributors={project.participants}
                  defaultImage={project.project.defaultImage}
                  startDate="YYYY.MM.DD"
                  endDate="YYYY.MM.DD"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
