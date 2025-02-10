<script setup lang="ts">
import { NuxtImg } from '#components'
import dayjs from 'dayjs'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

defineProps<{
  movies: Movie[]
}>()

const { getAssetUrl } = useAssetUrl()
const { getGenreMovieName } = useGenreStore()
const isImageLoaded = ref(false)
</script>

<template>
  <swiper
    :modules="[Pagination, Navigation]"
    :pagination="{ clickable: true, dynamicBullets: true }"
    :space-between="20"
    slides-per-view="auto"
    :breakpoints="{
      1650: { slidesPerView: 2.8, spaceBetween: 20 },
      1280: { slidesPerView: 2.2, spaceBetween: 18 },
      1024: { slidesPerView: 1.8, spaceBetween: 16 },
      768: { slidesPerView: 1.2, spaceBetween: 12 },
      640: { slidesPerView: 1, spaceBetween: 10 },
    }"
    :initial-slide="2"
    centered-slides
    :loop="true"
    class="w-full"
  >
    <swiper-slide v-for="(movie, index) in movies.slice(0, 5)" :key="index">
      <div class="relative flex py-16">
        <NuxtLink
          :to="{
            name: 'movies-id',
            params: {
              id: movie.id,
            },
          }"
          class="relative aspect-[2/3] h-[360px] w-fit"
        >
          <div
            v-if="!isImageLoaded"
            class="absolute inset-0 aspect-[2/3] h-[360px] bg-gray-700"
            :style="{
              backgroundImage: `url(${getAssetUrl(movie.poster_path, '/w92')})`,
              backgroundSize: 'cover',
            }"
          ></div>

          <NuxtImg
            format="webp"
            :src="getAssetUrl(movie.poster_path)"
            :alt="'poster ' + movie.title"
            class="absolute aspect-[2/3] h-[360px]"
            loading="lazy"
            @load="isImageLoaded = true"
          />
        </NuxtLink>

        <div class="my-auto h-[calc(360px-40px)] bg-black p-6">
          <div class="flex items-center gap-1">
            <div>
              <StarIcon class="h-4" />
            </div>
            <div class="text-lg font-bold">
              {{ ratingFormatted(movie.vote_average) }}
            </div>
          </div>
          <div class="text-[28px] font-medium">{{ movie.title }}</div>
          <div class="flex items-center gap-2">
            <div class="text-lg">{{ dayjs(movie.release_date).year() }}</div>
            <div>
              <div class="text-lg font-extrabold">&#8226;</div>
            </div>
            <div class="text-lg">
              {{ getGenreMovieName(movie.genre_ids[0]) }}
            </div>
          </div>
          <p class="h-[100px] overflow-hidden text-sm text-ellipsis">
            {{ movie.overview }}
          </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style>
.swiper-pagination-bullet-active {
  background-color: #e74c3c !important;
  width: 60px !important;
  height: 12px;
  transition: width 0.3s ease-in-out;
  border-radius: 6px;
}

.swiper-pagination-bullet {
  background-color: #ffffff;
  height: 12px;
  width: 12px;
  transition: width 0.3s ease-in-out;
  border-radius: 6px;
}

.swiper-pagination {
  width: 200px !important;
}
</style>
