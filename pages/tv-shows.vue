<script setup lang="ts">
useSeoMeta({
  title: 'TV Shows - PRQ Movie',
  ogTitle: 'TV Shows - PRQ Movie',
})
const { data: popular } = useApi<PaginatedResponse<Movie>>(
  API.DISCOVER.DISCOVER_TV,
)
const { data: release } = useApi<PaginatedResponse<Movie>>(
  API.DISCOVER.DISCOVER_TV,
  'GET',
  {
    query: {
      sort_by: SortBy.ReleaseDateDesc,
      'release_date.lte': '2024-12-12',
    },
  },
)
</script>

<template>
  <section
    class="relative flex min-h-screen flex-col items-center justify-center"
  >
    <MovieCarousell v-if="popular" :movies="popular?.results" />

    <DiscoverSection
      :popular="popular?.results || []"
      :release="release?.results || []"
      type="Tv Shows"
    />
  </section>
</template>
