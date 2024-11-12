import useSWR from "swr";
import fetcher from "@/lib/swr/fetcher";

interface SessionsType {
  date: Date;
  id: string;
  title: string;
  description: string[] | null;
  defaultImage: string;
  images: string[] | null;
  authorId: string;
}

export default function useSessions() {
  const { data, error, isLoading, mutate } = useSWR<SessionsType[]>(
    "/api/sessions",
    fetcher,
  );

  return {
    sessionsData: data,
    sessionsError: error,
    sessionsIsLoading: isLoading,
    mutateSessions: mutate,
  };
}
