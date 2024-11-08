import useSWR from "swr";
import fetcher from "@/lib/swr/fetcher";
import { ProjectMemberData } from "@/app/api/projects/members/route";

export default function useProjectMembers() {
  const { data, error, isLoading, mutate } = useSWR<ProjectMemberData[]>(
    `/api/projects/members`,
    fetcher,
  );

  return {
    projectMembersData: data,
    projectMembersError: error,
    projectMembersIsLoading: isLoading,
    mutateProjectMembers: mutate,
  };
}
