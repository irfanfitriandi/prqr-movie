<script setup lang="ts">
defineProps<{
  popular: Movie[]
  release: Movie[]
  type: 'Movies' | 'Tv Shows'
}>()
const currentTab = ref(0)
const TAB_OPTIONS = ['Popularity', 'Release Date']
</script>

<template>
  <div class="relative flex w-full justify-center">
    <div class="absolute inset-auto top-0 h-[333px] w-full bg-white/5"></div>
    <div class="z-10 flex w-[80%] flex-col px-4 py-20">
      <div class="flex justify-between">
        <div class="space-y-4">
          <div class="bg-primary h-1.5 w-28"></div>
          <div class="text-2xl font-semibold">Discover {{ type }}</div>
        </div>
        <div class="flex h-fit gap-6">
          <button
            v-for="(tab, id) in TAB_OPTIONS"
            :key="tab"
            class="cursor-pointer rounded-4xl px-5 py-1.5 text-sm font-semibold"
            :class="currentTab === id ? 'bg-red' : 'bg-black/20'"
            @click="currentTab = id"
          >
            {{ tab }}
          </button>
        </div>
      </div>
      <div class="mt-16 grid grid-cols-5 gap-6">
        <MovieCard
          v-for="movie in currentTab === 0 ? popular : release"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>
