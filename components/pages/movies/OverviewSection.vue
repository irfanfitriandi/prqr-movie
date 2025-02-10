<script setup lang="ts">
import dayjs from 'dayjs'

defineProps<{
  movie: MovieDetail
  isLoading: boolean
}>()
const { getLanguage } = useLanguageStore()
const { getAssetUrl } = useAssetUrl()

const isImageLoaded = ref(false)
</script>

<template>
  <section class="flex gap-8">
    <div class="relative aspect-[2/3] h-[330px]">
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
        class="absolute aspect-[2/3] object-cover"
        loading="lazy"
        @load="isImageLoaded = true"
      />
    </div>
    <div class="w-full">
      <div class="space-y-2">
        <div class="text-lg font-medium">
          {{ dayjs(movie.release_date).format('YYYY') }}
        </div>
        <div class="text-4xl font-semibold">{{ movie.title }}</div>
        <div class="text-sm font-medium capitalize">
          {{ movie.genres.map((genre) => genre.name.toLowerCase()).join(', ') }}
        </div>
        <SkeletonLoading v-if="isLoading" class="mt-4 h-12 w-52" />
        <SkeletonLoading v-if="isLoading" class="h-8 w-52" />
      </div>

      <div class="mt-14 flex h-fit items-center">
        <div class="flex items-center gap-4">
          <div>
            <StarIcon class="h-8" />
          </div>
          <div class="text-4xl font-semibold">
            {{ ratingFormatted(movie.vote_average) }}
          </div>
        </div>
        <div class="border-r border-white/20 pr-8 pl-4 text-start uppercase">
          <div class="text-xs font-medium text-white/50">USER SCORE</div>
          <div class="text-xs font-medium text-white">
            {{ movie.vote_count }} VOTES
          </div>
        </div>
        <div class="border-r border-white/20 px-8 text-start uppercase">
          <div class="text-xs font-medium text-white/50">STATUS</div>
          <div class="text-xs font-medium text-white">
            {{ movie.status }}
          </div>
        </div>
        <div class="border-r border-white/20 px-8 text-start uppercase">
          <div class="text-xs font-medium text-white/50">LANGUAGE</div>
          <div class="text-xs font-medium text-white">
            {{ getLanguage(movie.original_language) }}
          </div>
        </div>
        <div class="border-r border-white/20 px-8 text-start uppercase">
          <div class="text-xs font-medium text-white/50">BUDGET</div>
          <div class="text-xs font-medium text-white">
            {{
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(movie.budget)
            }}
          </div>
        </div>
        <div class="px-8 text-start uppercase">
          <div class="text-xs font-medium text-white/50">PRODUCTION</div>
          <div class="text-xs font-medium text-white">
            {{ movie.production_companies[0].name }}
          </div>
        </div>
      </div>

      <SkeletonLoading v-if="isLoading" class="mt-14 h-8 w-1/2" />
      <div class="mt-14">
        <h2 class="text-red font-semibold uppercase">OVERVIEW</h2>
        <p class="mt-2 text-sm leading-[200%] text-black">
          {{ movie.overview }}
        </p>
        <SkeletonLoading v-if="isLoading" class="mt-4 h-16" />
      </div>
    </div>
  </section>
</template>
