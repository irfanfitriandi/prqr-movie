export default defineEventHandler(async (event) => {
  const targetPath = event.path.replace('/api/img', '')
  const url = useRuntimeConfig().apiImgBaseUrl + targetPath
  const res = await fetch(url)

  setHeader(event, 'Cache-Control', 's-maxage=86400, stale-while-revalidate')
  return sendStream(event, res.body as ReadableStream)
})
