import AdminPageLayout from "@/app/components/admin-page-layout";
import AdminPageTitle from "@/app/components/admin-page-title";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import ProjectForm from "@/app/(admin)/admin/projects/project-form";

export default function CreateProjectPage() {
  return (
    <AdminPageLayout>
      <div className={"py-1 flex flex-col gap-2 justify-center"}>
        <Link
          href={"/admin/projects"}
          className={"flex gap-2 items-center hover:underline"}
        >
          <ChevronLeftIcon className={"size-6"} />
          <p>Projects</p>
        </Link>
        <AdminPageTitle>Create Project</AdminPageTitle>
      </div>
      <div>
        <ProjectForm type={"POST"} />
      </div>
    </AdminPageLayout>
  );
}
