<script setup lang="ts">
const { data, status, filters, page, isLoadingMore, loadMore, toggleGenre } =
  useContentFetch(API.DISCOVER.DISCOVER_MOVIES)
</script>

<template>
  <section class="relative flex min-h-screen justify-center">
    <div class="absolute inset-auto top-0 h-[333px] w-full bg-white/5"></div>
    <div class="z-10 flex w-[80%] flex-col px-4 py-20">
      <header class="space-y-4">
        <div class="bg-primary h-1.5 w-28"></div>
        <h1 class="text-4xl font-semibold">Movies</h1>
      </header>

      <section class="mt-16 flex gap-8">
        <FiltersSidebar
          :filters="filters"
          :toggle-genre="toggleGenre"
          @update:sort-by="(sort) => (filters.sortBy = sort)"
        />

        <MovieListing
          :movies="data?.results || []"
          :no-data="data?.total_results === 0"
          :is-loading-more="isLoadingMore"
          :show-load-more="
            (data?.results.length || 0 > 0) && status === 'success'
          "
          :disable-load-more="
            isLoadingMore || page.currentPage >= page.totalPages
          "
          :load-more="loadMore"
        />
      </section>
    </div>
  </section>
</template>
