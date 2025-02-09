export const useContentFetch = (endpoint: string) => {
  const route = useRoute()
  const router = useRouter()

  // State
  const page = reactive({
    currentPage: 1,
    totalPages: 1,
  })
  const isLoadingMore = ref(false)
  const filters = reactive({
    genreIds: route.query.genres?.toString().split(',').map(Number) || [],
    sortBy: (route.query.sort_by as SortBy) || SortBy.PopularityDesc,
  })
  const formatGenreQuery = computed(() =>
    filters.genreIds.length ? filters.genreIds.join(',') : undefined,
  )
  const params = computed(() => ({
    page: 1,
    sort_by: filters.sortBy,
    ...(formatGenreQuery.value ? { with_genres: formatGenreQuery.value } : {}),
  }))

  // Fetch Data SSR
  const { data, status } = useApi<PaginatedResponse<Movie>>(endpoint, 'GET', {
    params,
  })
  watchEffect(() => {
    if (data.value) {
      page.totalPages = data.value.total_pages
    }
  })

  // Functions
  const updateUrlParams = () => {
    router.replace({
      query: {
        genres: formatGenreQuery.value,
        sort_by: filters.sortBy,
      },
    })
  }

  const loadMore = async () => {
    if (page.currentPage >= page.totalPages || isLoadingMore.value) return
    isLoadingMore.value = true
    page.currentPage++

    const { data: newData } = await useApi<PaginatedResponse<Movie>>(
      endpoint,
      'GET',
      {
        query: {
          ...params.value,
          page: page.currentPage,
        },
      },
    )

    data.value?.results.push(...(newData.value?.results || []))
    isLoadingMore.value = false
  }

  const toggleGenre = (genreId: number) => {
    const index = filters.genreIds.indexOf(genreId)
    if (index === -1) {
      filters.genreIds.push(genreId)
    } else {
      filters.genreIds.splice(index, 1)
    }
  }

  watch(
    [() => filters.genreIds, () => filters.sortBy],
    () => {
      updateUrlParams()
    },
    { deep: true },
  )

  watch([() => route.query.genres], () => {
    filters.genreIds =
      route.query.genres?.toString().split(',').map(Number) || []
  })

  return {
    data,
    status,
    filters,
    page,
    isLoadingMore,
    loadMore,
    toggleGenre,
  }
}
