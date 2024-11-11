import AdminPageLayout from "@/app/components/admin-page-layout";
import AdminPageTitle from "@/app/components/admin-page-title";
import Link from "next/link";
import ProjectList from "@/app/(admin)/admin/projects/project-list";

export default async function ProjectsPage() {
  return (
    <AdminPageLayout>
      <div className={"flex items-center gap-2"}>
        <AdminPageTitle>Projects</AdminPageTitle>
        <Link
          href={"/admin/projects/create"}
          className={
            "bg-blue p-1 px-3 rounded-lg text-white hover:bg-blue-800 transition-colors"
          }
        >
          Create Project
        </Link>
      </div>
      <ProjectList />
    </AdminPageLayout>
  );
}
