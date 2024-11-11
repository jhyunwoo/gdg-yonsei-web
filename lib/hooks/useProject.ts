import useSWR from "swr";
import fetcher from "@/lib/swr/fetcher";

export interface ParticipantsType {
  id: string | null;
  name: string | null;
  firstName: string | null;
  lastName: string | null;
  image: string | null;
}

export interface ProjectType {
  id: string;
  title: string;
  description: string[] | null;
  defaultImage: string;
  images: string[] | null;
  github: string | null;
  createdAt: Date;
  editedAt: Date;
  authorId: string;
  authorName: string | null;
  authorFirstName: string | null;
  authorLastName: string | null;
}

export interface TagType {
  name: string | null;
}

export default function useProject(projectId: string) {
  const { data, error, isLoading, mutate } = useSWR<{
    projectData: ProjectType;
    participants: ParticipantsType[];
    tags: TagType[];
  }>(`/api/projects/${projectId}`, fetcher);

  return {
    projectData: data?.projectData,
    participants: data?.participants,
    tags: data?.tags,
    projectError: error,
    projectIsLoading: isLoading,
    mutateProject: mutate,
  };
}
