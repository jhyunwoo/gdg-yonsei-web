import ProjectCard from "@/app/components/project-page/card";
import getProjects from "@/lib/server/get-projects";
import ChipList from "../list/chipList";

/**
 * 프로젝트 리스트 섹션 컴포넌트
 * @constructor
 */
export default async function ProjectListing() {
  const allProjects = await getProjects();
  // console.log("First project id is " + allProjects[0].id);

  return (
    <section className={"wrapper"}>
      <ChipList />
      <div className="flex flex-col gap-2 px-2 my-2">
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
    </section>
  );
}
