<script setup lang="ts">
const route = useRoute()
const { getAssetUrl } = useAssetUrl()
const isBackdropLoaded = ref(false)

const { data: movie, status: movieStatus } = useApi<MovieDetail>(
  API.MOVIES.GET_MOVIE(route.params.id as string),
)
const { data: reviews, status: reviewsStatus } = useApi<
  PaginatedResponse<Review>
>(API.MOVIES.GET_MOVIE_REVIEWS(route.params.id as string))
const { data: recom, status: recomStatus } = useApi<PaginatedResponse<Movie>>(
  API.MOVIES.GET_MOVIE_RECOMMENDATIONS(route.params.id as string),
)

watchEffect(() => {
  if (movie.value) {
    useSeoMeta({
      title: movie.value.title + ' - PRQ Movie',
      ogTitle: movie.value.title + ' - PRQ Movie',
      description: movie.value.overview,
      ogDescription: movie.value.overview,
    })
  }
})
</script>

<template>
  <section class="min-h-screen">
    <div
      class="absolute top-0 h-[468px] w-full bg-gray-700 transition-all duration-500"
      :style="{
        backgroundImage: movie
          ? `url(${isBackdropLoaded ? getAssetUrl(movie.backdrop_path, '/original') : getAssetUrl(movie.backdrop_path, '/w300')})`
          : '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <img
        v-if="movie"
        :src="getAssetUrl(movie.backdrop_path, '/original')"
        class="hidden"
        alt="backdrop"
        @load="isBackdropLoaded = true"
      />
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="absolute bottom-0 h-20 w-full bg-black/50"></div>
    </div>

    <div
      class="relative mt-[406px] flex min-h-[400px] justify-center bg-white pb-24"
    >
      <div class="-mt-[220px] flex w-[80%] flex-col px-4">
        <OverviewSection
          v-if="movie"
          :movie="movie"
          :is-loading="movieStatus === 'pending'"
        />

        <section
          v-if="reviews?.results.length || 0 > 0"
          class="mt-10 min-h-[200px]"
        >
          <h2 class="text-red font-semibold uppercase">REVIEWS</h2>
          <div class="mt-6 flex gap-8">
            <ReviewCard
              v-for="review in reviews?.results.slice(0, 2)"
              :key="review.id"
              :review="review"
              class="h-fit w-1/2"
            />
          </div>
        </section>
        <div v-if="reviewsStatus === 'pending'">
          <SkeletonLoading v-for="id in 2" :key="id" class="h-48 w-1/2" />
        </div>
      </div>
    </div>

    <div class="relative flex justify-center">
      <div class="flex w-[80%] flex-col gap-8 px-4 py-16">
        <div class="font-semibold uppercase">RECOMMENDATION MOVIES</div>
        <div class="grid min-h-[200px] grid-cols-5 gap-6">
          <MovieCard
            v-for="rcMovie in recom?.results.slice(0, 5)"
            :key="rcMovie.id"
            :movie="rcMovie"
          />
          <SkeletonLoading
            v-if="recomStatus === 'pending'"
            class="col-span-5 h-64 w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>
