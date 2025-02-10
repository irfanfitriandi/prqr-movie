<script setup lang="ts">
import dayjs from 'dayjs'

const { getAssetUrl } = useAssetUrl()

defineProps<{
  review: Review
}>()
</script>

<template>
  <div
    class="space-y-4 rounded-xl bg-[#F9F9F9] px-5 py-7 text-black shadow-md shadow-black/10"
  >
    <div class="flex justify-between">
      <div class="flex items-center gap-4">
        <div class="relative aspect-square h-12 overflow-clip rounded-full">
          <NuxtImg
            format="webp"
            :src="getAssetUrl(review.author_details.avatar_path)"
            :alt="'avatar ' + review.author"
            class="absolute aspect-square object-cover"
            loading="lazy"
            placeholder="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/131-512.png"
          />
        </div>
        <div>
          <p class="text-sm font-semibold text-black">
            {{ review.author }}
          </p>
          <p class="text-xs text-[#666666]">
            {{ dayjs(review.created_at).format('MMMM D, YYYY') }}
          </p>
        </div>
      </div>
      <div class="flex gap-1 rounded-lg bg-[#C4C4C4]/30 px-2 py-1">
        <div>
          <StarIcon class="mt-1 h-4" />
        </div>
        <div class="pr-1 text-4xl font-semibold">
          {{ ratingFormatted(review.author_details.rating) }}
        </div>
      </div>
    </div>
    <SafeHtml :raw-html="review.content" />
  </div>
</template>
