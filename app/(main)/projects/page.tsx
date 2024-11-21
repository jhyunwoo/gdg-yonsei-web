import ProjectListing from "@/app/components/project-page/projectListing";
import PageTitleComponent from "@/app/components/title/pageTitle";

export default async function ProjectsPage() {
  return (
    <>
      <PageTitleComponent title="Projects" />
      <ProjectListing />
    </>
  );
}
