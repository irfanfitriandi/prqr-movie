<script setup lang="ts">
const { data: popular } = useApi<PaginatedResponse<Movie>>(
  API.DISCOVER.DISCOVER_MOVIES,
)
const { data: release } = useApi<PaginatedResponse<Movie>>(
  API.DISCOVER.DISCOVER_MOVIES,
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
  <section class="relative flex min-h-screen justify-center">
    <DiscoverSection
      :popular="popular?.results || []"
      :release="release?.results || []"
      type="Movies"
    />
  </section>
</template>
