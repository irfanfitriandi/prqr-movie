export default defineEventHandler(async (event) => {
  //configPath
  const targetPath = event.path.replace('/api', '')
  const url = useRuntimeConfig().apiBaseUrl + targetPath

  return proxyRequest(event, url)
})
