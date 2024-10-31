import useSWR from "swr";
import fetcher from "@/lib/swr/fetcher";
import { users } from "@/db/schema";

type MembersType = typeof users.$inferSelect;

export default function useUnacceptedMembers() {
  const { data, error, isLoading, mutate } = useSWR<MembersType[]>(
    "/api/members/unaccepted",
    fetcher,
  );

  return {
    unacceptedMembersData: data,
    unacceptedMembersError: error,
    unacceptedMembersIsLoading: isLoading,
    mutateUnacceptedMembers: mutate,
  };
}
