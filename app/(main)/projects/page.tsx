import ProjectCard from "@/app/components/project-page/card";
import Chip from "@/app/components/project-page/chip";

const project1 = [
  "Project Name",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla nulla sit amet feugiat elementum. Donec facilisis pretium vulputate. Vestibulum quis elit ex. Quisque molestie dui nec faucibus condimentum. Morbi convallis dapibus tortor id volutpat. In hac habitasse platea dictumst. Maecenas eu quam quis eros fermentum consectetur. Fusce et justo vel diam vehicula condimentum.",
];

export default function ProjectsPage() {
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
            <ProjectCard
              projectName={project1[0]}
              description={project1[1]}
            ></ProjectCard>
            <ProjectCard
              projectName={project1[0]}
              description={project1[1]}
            ></ProjectCard>
            <ProjectCard
              projectName={project1[0]}
              description={project1[1]}
            ></ProjectCard>
          </div>
        </div>
      </div>
    </section>
  );
}
