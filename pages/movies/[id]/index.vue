<script setup lang="ts">
const route = useRoute()
const { getAssetUrl } = useAssetUrl()
const isBackdropLoaded = ref(false)

const { data: movie } = useApi<MovieDetail>(
  API.MOVIES.GET_MOVIE(route.params.id as string),
)
const { data: reviews } = useApi<PaginatedResponse<Review>>(
  API.MOVIES.GET_MOVIE_REVIEWS(route.params.id as string),
)
</script>

<template>
  <section class="min-h-screen">
    <div
      v-if="movie"
      class="absolute top-0 h-[468px] w-full bg-gray-700 transition-all duration-500"
      :style="{
        backgroundImage: `url(${isBackdropLoaded ? getAssetUrl(movie.backdrop_path, '/original') : getAssetUrl(movie.backdrop_path, '/w300')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <img
        :src="getAssetUrl(movie.backdrop_path, '/original')"
        class="hidden"
        alt="backdrop"
        @load="isBackdropLoaded = true"
      />

      <div class="absolute bottom-0 h-20 w-full bg-black/50"></div>
    </div>

    <div class="relative mt-[406px] flex justify-center bg-white pb-24">
      <div class="-mt-[220px] flex w-[80%] flex-col px-4">
        <OverviewSection v-if="movie" :movie="movie" />

        <section v-if="reviews" class="mt-10">
          <h2 class="text-red font-semibold uppercase">REVIEWS</h2>
          <div class="mt-6 flex gap-8">
            <ReviewCard
              v-for="review in reviews.results.slice(0, 2)"
              :key="review.id"
              :review="review"
              class="h-fit w-1/2"
            />
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
