"use client";

import useProject from "@/lib/hooks/useProject";

export default function EditProjectForm({ projectId }: { projectId: string }) {
  const { projectData } = useProject(projectId);

  console.log(projectData);

  return (
    <form>
      <input />
    </form>
  );
}
