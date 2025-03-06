export const useGenreStore = defineStore('genre', () => {
  const genres = ref<Genre[]>([])
  const isLoading = ref(false)

  const fetchGenres = async () => {
    if (isLoading.value || genres.value.length > 0) return

    isLoading.value = true

    try {
      const { data } = await useApi<{ genres: Genre[] }>(
        API.GENRES.GET_GENRES_MOVIE,
      )

      if (data?.value?.genres) {
        genres.value = data.value.genres
      }
    } catch (err) {
      console.error('[GenreStore]', err)
    } finally {
      isLoading.value = false
    }
  }

  const getGenreById = (id: number) => {
    if (genres.value.length < 1) {
      fetchGenres()
      return 'Unknown'
    }

    const genre = genres.value.find((genre) => genre.id === id)
    return genre?.name || 'Unknown'
  }

  return {
    getGenreById,
  }
})
