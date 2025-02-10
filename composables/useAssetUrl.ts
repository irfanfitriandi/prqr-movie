export const useAssetUrl = () => {
  const config = useRuntimeConfig()
  const url = useRequestURL()

  const getAssetUrl = (posterPath: string, size: string = 'w500'): string => {
    return `${url.origin}${config.public.apiImg}/${size}${posterPath}`
  }

  return { getAssetUrl }
}
