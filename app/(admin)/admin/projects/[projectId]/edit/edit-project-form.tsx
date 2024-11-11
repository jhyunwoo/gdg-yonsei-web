"use client";

import ProjectForm from "@/app/components/project-form";
import useProject from "@/lib/hooks/useProject";

export default function EditProjectForm({ projectId }: { projectId: string }) {
  const { projectData, participants, tags } = useProject(projectId);
  return (
    <ProjectForm
      projectData={projectData}
      participantsData={participants}
      tagsData={tags}
      type={"PUT"}
    />
  );
}
