<script setup lang="ts">
// Search
const search = ref('')
const searchSuggestion = ref<Movie[]>([])
const searchLoading = ref(false)
const showSearchSuggestion = ref(false)

const handleSearch = debounce(async (val: string) => {
  if (!val.trim()) {
    searchSuggestion.value = []
    showSearchSuggestion.value = false
    return
  }

  searchLoading.value = true
  try {
    const { data } = await useApi<PaginatedResponse<Movie>>(
      API.SEARCH.SEARCH_MOVIE,
      'GET',
      {
        query: { query: val },
      },
    )

    if (data.value?.results.length) {
      searchSuggestion.value = data.value.results
      showSearchSuggestion.value = true
    } else {
      searchSuggestion.value = []
      showSearchSuggestion.value = false
    }
  } catch (error) {
    console.error('Search Error:', error)
  } finally {
    searchLoading.value = false
  }
}, 300)

const handleSearchSuggestion = (id: number) => {
  search.value = ''
  searchSuggestion.value = []
  showSearchSuggestion.value = false
  navigateTo(`/movies/${id}`)
}

const searchRef = useClickOutside(() => {
  showSearchSuggestion.value = false
})

// Categories
const showCategories = ref(false)
let closeTimeout: ReturnType<typeof setTimeout> | null = null
const openCategories = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  showCategories.value = true
}
const closeCategories = () => {
  closeTimeout = setTimeout(() => {
    showCategories.value = false
  }, 200)
}
</script>

<template>
  <nav class="relative z-20 flex h-16 items-center justify-center bg-white/5">
    <div class="flex w-[80%] items-center gap-6 px-4">
      <NuxtLink to="/" class="w-fit">
        <LogoColorIcon class="h-8" />
      </NuxtLink>
      <div
        ref="searchRef"
        class="relative flex h-9 flex-1 items-center gap-2 rounded-lg bg-black/15 px-3"
      >
        <div>
          <MovieIcon class="h-6" />
        </div>
        <input
          v-model="search"
          class="flex-1"
          type="text"
          placeholder="Search movies..."
          @input="handleSearch(search)"
        />
        <div>
          <FinderIcon class="h-5" />
        </div>

        <ul
          v-if="showSearchSuggestion"
          class="absolute top-10 left-0 flex w-full flex-col overflow-clip rounded-lg bg-black py-1"
        >
          <li v-for="movie in searchSuggestion.slice(0, 7)" :key="movie.id">
            <button
              class="w-full cursor-pointer px-3 py-1 text-start hover:bg-gray-700"
              @click="handleSearchSuggestion(movie.id)"
            >
              {{ movie.title }}
            </button>
          </li>
        </ul>

        <div
          v-if="search.length > 1 && searchSuggestion.length < 1"
          class="absolute top-10 left-0 w-full rounded-lg bg-black px-6 py-3 text-sm"
        >
          <span v-if="searchLoading">Loading...</span>
          <span v-else>Movies Not Found... 😢</span>
        </div>
      </div>

      <div class="flex w-fit gap-6 uppercase">
        <ul v-for="menu in MENU_OPTIONS" :key="menu.label">
          <li
            v-if="menu.label === 'categories'"
            class="relative flex cursor-pointer items-center gap-2 font-semibold"
            @pointerenter="openCategories"
            @pointerleave="closeCategories"
          >
            <div>
              <CategoriesIcon class="h-5" />
            </div>
            <div>{{ menu.label }}</div>
            <div
              v-if="showCategories"
              class="absolute top-8 left-[50%] z-20 flex w-[120%] -translate-x-1/2 flex-col overflow-clip rounded-lg bg-white py-2 shadow-md shadow-black/20"
              @pointerenter="openCategories"
              @pointerleave="closeCategories"
            >
              <div
                v-for="(id, genre) in GENRE_OPTIONS"
                :key="id"
                class="flex w-full"
                @click="showCategories = false"
              >
                <NuxtLink
                  :to="{
                    name: 'movies',
                    query: {
                      genres: id,
                    },
                  }"
                  class="text-secondary w-full py-2 pl-4 text-sm font-bold"
                >
                  {{ genre }}
                </NuxtLink>
              </div>
            </div>
          </li>

          <li v-else-if="menu.action === 'navigate'" class="font-semibold">
            <NuxtLink :to="menu.url">
              {{ menu.label }}
            </NuxtLink>
          </li>

          <li v-else class="cursor-not-allowed font-semibold text-gray-500">
            {{ menu.label }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
