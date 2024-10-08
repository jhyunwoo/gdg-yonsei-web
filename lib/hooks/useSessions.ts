import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import { Prisma } from '@prisma'

type SessionType = Prisma.SessionEventMinAggregateOutputType[]

export default function useSessions({ take, skip }: { take: number; skip: number }) {
  const { data, error, isLoading, isValidating } = useSWR<SessionType>(
    `/api/session?take=${take}&skip=${skip}`,
    fetcher
  )

  return {
    sessionData: data,
    sessionError: error,
    sessionIsLoading: isLoading,
    sessionIsValidating: isValidating,
  }
}
