// composables/useApi.ts
import type { UseFetchOptions } from 'nuxt/app'

export const useApi = <T>(
  url: string | (() => string),
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  options?: UseFetchOptions<T>,
) => {
  const config = useRuntimeConfig()

  return useFetch(url, {
    baseURL: '/api',
    ...options,
    method,
    headers: {
      ...options?.headers,
      'Content-Type': 'application/json',
    },
    query:
      method === 'GET'
        ? { ...options?.query, api_key: config.public.apiKey }
        : undefined,
    body: method !== 'GET' ? options?.body : undefined,
    onResponseError({ error }) {
      throw createError(error || {})
    },
  })
}
