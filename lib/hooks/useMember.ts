import useSWR from "swr";
import fetcher from "@/lib/swr/fetcher";
import { users } from "@/db/schema";

type MembersType = typeof users.$inferSelect;

export default function useMember(userId: string) {
  const { data, error, isLoading, mutate } = useSWR<MembersType>(
    `/api/members/${userId}`,
    fetcher,
  );

  return {
    memberData: data,
    memberError: error,
    memberIsLoading: isLoading,
    mutateMember: mutate,
  };
}
