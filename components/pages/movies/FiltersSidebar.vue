<script setup lang="ts">
defineProps<{
  filters: {
    genreIds: number[]
    sortBy: SortBy
  }
  toggleGenre: (genreId: number) => void
}>()
const emit = defineEmits<{
  (event: 'update:sortBy', sortBy: SortBy): void
}>()
const showSort = ref(false)
const sortRef = useClickOutside(() => {
  showSort.value = false
})

const toggleSort = () => (showSort.value = !showSort.value)

const handleSelectSort = (sort: SortBy) => {
  emit('update:sortBy', sort)
  showSort.value = false
}
</script>

<template>
  <aside
    class="from-secondary h-fit w-60 flex-none rounded-xl bg-gradient-to-t to-[#0E1723] py-1"
  >
    <h2 class="border-b border-white/10 px-6 py-4 font-semibold">
      Sort Result By
    </h2>

    <div ref="sortRef" class="relative border-b border-white/10 px-6 py-4">
      <button
        class="w-full cursor-pointer rounded-md bg-[#2F363F] px-3 py-1 text-start text-sm text-nowrap"
        @click.stop="toggleSort"
      >
        {{
          SORT_OPTIONS.find((s) => s.value === filters.sortBy)?.label || 'Sort'
        }}
      </button>
      <ul
        v-if="showSort"
        class="absolute left-[50%] mt-1 w-max -translate-x-1/2 rounded-md bg-[#111419] py-1 text-sm text-nowrap shadow-lg"
      >
        <li
          v-for="option in SORT_OPTIONS"
          :key="option.value"
          class="cursor-pointer px-3 py-1 transition hover:bg-[#2F363F]"
          tabindex="0"
          @click="handleSelectSort(option.value)"
          @keydown.enter="handleSelectSort(option.value)"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>

    <h2 class="border-b border-white/10 px-6 py-4 font-semibold">Genres</h2>

    <div class="flex flex-col gap-4 px-6 py-4">
      <fieldset>
        <ul class="flex flex-col gap-4">
          <li v-for="(id, genre) in GENRE_OPTIONS" :key="id">
            <label class="flex items-center justify-between">
              <span>{{ genre }}</span>
              <input
                type="checkbox"
                class="flex h-3.5 w-3.5 items-center justify-center text-sm"
                :value="id"
                :checked="filters.genreIds.includes(id)"
                @change="toggleGenre(id)"
              />
            </label>
          </li>
        </ul>
      </fieldset>
    </div>
  </aside>
</template>
