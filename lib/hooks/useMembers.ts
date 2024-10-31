import useSWR from "swr";
import fetcher from "@/lib/swr/fetcher";
import { users } from "@/db/schema";

type MembersType = typeof users.$inferSelect;

export default function useMembers() {
  const { data, error, isLoading, mutate } = useSWR<MembersType[]>(
    "/api/members",
    fetcher,
  );

  return {
    membersData: data,
    membersError: error,
    membersIsLoading: isLoading,
    mutateMembers: mutate,
  };
}
