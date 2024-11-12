import useSWR from "swr";
import fetcher from "@/lib/swr/fetcher";
import { session } from "@/db/schema";

export type SessionType = typeof session.$inferSelect;

export default function useSession(sessionId: string) {
  const { data, error, isLoading, mutate } = useSWR<SessionType>(
    `/api/sessions/${sessionId}`,
    fetcher,
  );

  return {
    sessionData: data,
    sessionError: error,
    sessionIsLoading: isLoading,
    mutateSession: mutate,
  };
}
