<script setup lang="ts">
defineProps<{
  movies: Movie[]
  noData: boolean
  isLoadingMore: boolean
  showLoadMore: boolean | number
  disableLoadMore: boolean
  loadMore: () => Promise<void>
}>()
</script>

<template>
  <section>
    <ul class="grid grid-cols-4 gap-6">
      <li v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie" />
      </li>
    </ul>

    <div v-if="noData" class="space-y-2 text-xl font-semibold">
      <p>Movies Not Found. . . &#128549;</p>
      <p>Please kindly check your filters &#128521;</p>
    </div>

    <ClientOnly>
      <div class="mt-4 flex justify-center">
        <button
          v-if="showLoadMore"
          :disabled="disableLoadMore"
          class="bg-red cursor-pointer rounded-4xl px-8 py-2 font-semibold"
          @click="loadMore"
        >
          {{ isLoadingMore ? 'Loading...' : 'Load More' }}
        </button>
      </div>
    </ClientOnly>
  </section>
</template>
