<script setup lang="ts">
import dayjs from 'dayjs'

const props = defineProps<{ movie: Movie }>()
const { getGenreMovieName, fetchGenres, genreMovie } = useGenreStore()
const { getAssetUrl } = useAssetUrl()
const isImageLoaded = ref(false)

const genreName = computed(() => {
  return genreMovie.length > 0
    ? getGenreMovieName(props.movie.genre_ids[0])
    : 'Loading...'
})

const handleImageError = (event: Event | any) => {
  // Bug on nuxt/image, target null
  // const target = event.target as HTMLImageElement
  // target.src = ''
  if (process.env.NODE_ENV === 'development') console.error(event)
}

onMounted(() => {
  if (genreMovie.length === 0) {
    fetchGenres()
  }
})
</script>

<template>
  <div class="group relative">
    <div
      class="bg-secondary/80 absolute top-0 right-0 z-10 px-3 py-1 text-lg font-bold"
    >
      {{ ratingFormatted(movie.vote_average) }}
    </div>

    <div class="relative overflow-hidden">
      <div class="relative aspect-[2/3] w-full">
        <div
          v-if="!isImageLoaded"
          class="absolute inset-0 bg-gray-700"
          :style="{
            backgroundImage: `url(${getAssetUrl(movie.poster_path, '/w92')})`,
            backgroundSize: 'cover',
          }"
        ></div>

        <NuxtImg
          format="webp"
          :src="getAssetUrl(movie.poster_path)"
          :alt="'poster ' + movie.title"
          class="absolute aspect-[2/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          @load="isImageLoaded = true"
          @error="handleImageError"
        />
      </div>

      <div
        class="absolute top-0 left-0 z-20 flex h-full w-full flex-col items-center justify-center gap-8 bg-black/80 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
      >
        <div class="flex -translate-x-1 gap-2">
          <StarIcon class="h-8" />
          <span class="text-2xl font-semibold">
            {{ ratingFormatted(movie.vote_average) }}
          </span>
        </div>
        <ClientOnly>
          <div class="pt-2 text-lg font-semibold">
            {{ genreName }}
          </div>
        </ClientOnly>
        <NuxtLink
          :to="{
            name: 'movies-id',
            params: {
              id: movie.id,
            },
          }"
          class="bg-red w-24 rounded-full py-1 text-center font-bold"
        >
          VIEW
        </NuxtLink>
      </div>
    </div>

    <p class="mt-3 text-lg font-bold">{{ movie.title }}</p>
    <p>{{ dayjs(movie.release_date).format('YYYY') }}</p>
  </div>
</template>
