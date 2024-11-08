import useSWR from "swr";
import fetcher from "@/lib/swr/fetcher";

type ProjectsType = {
  id: string;
  title: string;
  createdAt: Date;
  editedAt: Date;
  authorName: string | null;
  authorFirstName: string | null;
  authorLastName: string | null;
};

export default function useProjects() {
  const { data, error, isLoading, mutate } = useSWR<ProjectsType[]>(
    "/api/projects",
    fetcher,
  );

  return {
    projectsData: data,
    projectsError: error,
    projectsIsLoading: isLoading,
    mutateProjects: mutate,
  };
}
