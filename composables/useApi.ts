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
    query: { ...options?.query, api_key: config.public.apiKey },
    body: method !== 'GET' ? options?.body : undefined,
    onResponseError({ error }) {
      throw createError(error || {})
    },
  })
}
