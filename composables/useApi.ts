import type { UseFetchOptions } from 'nuxt/app'

export const useApi = <T>(
  url: string | (() => string),
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  options?: UseFetchOptions<T>,
) => {
  return useFetch(url, {
    baseURL: '/api/tmdb',
    ...options,
    method,
    headers: {
      ...options?.headers,
      'Content-Type': 'application/json',
    },
    query: {
      ...options?.query,
      'vote_count.gte': 100,
    },
    body: method !== 'GET' ? options?.body : undefined,
    onResponseError({ error }) {
      throw createError(error || {})
    },
  })
}
