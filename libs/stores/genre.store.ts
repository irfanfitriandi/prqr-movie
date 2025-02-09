export const useGenreStore = defineStore('genre', () => {
  const genreMovie = ref<Genre[]>([])
  const fetchGenres = async () => {
    if (genreMovie.value.length === 0) {
      const { data } = await useApi<{ genres: Genre[] }>(
        API.GENRES.GET_GENRES_MOVIE,
      )
      if (data.value) {
        genreMovie.value = data.value.genres
      }
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
  fetchGenres()

  return {
    genreMovie,
    fetchGenres,
    getGenreMovieName,
  }
})
