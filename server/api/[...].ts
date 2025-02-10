export default defineEventHandler(async (event) => {
  const isImg = event.path.split('/')[2] === 'img'

  if (isImg) {
    const targetPath = event.path.replace('/api/img', '')
    const url = useRuntimeConfig().apiImgBaseUrl + targetPath
    const res = await fetch(url)

    setHeader(event, 'Cache-Control', 's-maxage=86400, stale-while-revalidate')
    return sendStream(event, res.body as ReadableStream)
  } else {
    const targetPath = event.path.replace('/api', '')
    const url = useRuntimeConfig().apiBaseUrl + targetPath

    return proxyRequest(event, url, {
      headers: {
        'X-Forwarded-Host': 'api.themoviedb.org',
      },
    })
  }
})
