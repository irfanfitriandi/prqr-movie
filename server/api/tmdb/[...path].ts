interface TmdbApiResponse<T> {
  page?: number
  results: T
  total_pages?: number
  total_results?: number
  status_message?: string
  success?: boolean
  status_code?: number
}

export default defineEventHandler<Promise<TmdbApiResponse<unknown>>>(
  async (event) => {
    const config = useRuntimeConfig()
    const url = config.apiBaseUrl + event.context.params?.path
    const query = getQuery(event)

    return $fetch<TmdbApiResponse<unknown>>(url, {
      headers: {
        'X-Forwarded-Host': 'api.themoviedb.org',
      },
      query: {
        api_key: config.apiKey,
        ...query,
      },
    })
  },
)
