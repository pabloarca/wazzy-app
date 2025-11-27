import { QueryClient } from '@tanstack/react-query'
import { apiFetcher } from './api-client'

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: apiFetcher,
        staleTime: 1000 * 60,
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: false,
      },
    },
  })
}
