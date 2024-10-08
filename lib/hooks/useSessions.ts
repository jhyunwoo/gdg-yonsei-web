import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

export default function useSessions() {
  const { data, error, isLoading, isValidating } = useSWR('/api/sessions', fetcher)

  return {
    sessionData: data,
    sessionError: error,
    sessionIsLoading: isLoading,
    sessionIsValidating: isValidating,
  }
}
