import useSWR from "swr";
import fetcher from "@/lib/swr/fetcher";

export default function useTags() {
  const { data, error, isLoading, mutate } = useSWR<{ name: string }[]>(
    "/api/projects/tags",
    fetcher,
  );

  return {
    tagsData: data,
    tagsError: error,
    tagsIsLoading: isLoading,
    mutateTags: mutate,
  };
}
