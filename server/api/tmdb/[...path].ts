export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const url = config.apiBaseUrl + event.context.params?.path
  const query = getQuery(event)

  return $fetch(url, {
    headers: {
      'X-Forwarded-Host': 'api.themoviedb.org',
    },
    query: {
      api_key: config.apiKey,
      ...query,
    },
  })
})
