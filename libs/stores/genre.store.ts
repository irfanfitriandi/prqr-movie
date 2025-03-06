export const useGenreStore = defineStore('genre', () => {
  const genreMovie = ref<Genre[]>([])
  const isLoading = ref(false)

  const fetchGenres = async () => {
    if (isLoading.value || genreMovie.value.length > 0) return
    isLoading.value = true

    try {
      const { data } = await useApi<{ genres: Genre[] }>(
        API.GENRES.GET_GENRES_MOVIE,
      )
      if (data?.value?.genres?.length) {
        genreMovie.value = data.value.genres
      }
    } catch (error) {
      console.error('Failed to fetch genres', error)
    } finally {
      isLoading.value = false
    }
  }

  const getGenreMovieName = (id: number) => {
    if (genreMovie.value.length === 0) {
      fetchGenres()
      return 'Loading...'
    }

    const genre = genreMovie.value.find((genre) => genre.id === id)
    return genre ? genre.name : 'Unknown'
  }

  return {
    genreMovie,
    fetchGenres,
    getGenreMovieName,
  }
})
