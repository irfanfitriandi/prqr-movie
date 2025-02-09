<script setup lang="ts">
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
  <nav class="flex h-16 items-center justify-center bg-white/5">
    <div class="flex w-[80%] items-center gap-6 px-4">
      <NuxtLink to="/" class="w-fit">
        <LogoColorIcon class="h-8" />
      </NuxtLink>
      <div
        class="flex h-9 flex-1 items-center gap-2 rounded-lg bg-black/15 px-3"
      >
        <div>
          <MovieIcon class="h-6" />
        </div>
        <input class="flex-1" type="text" />
        <div>
          <FinderIcon class="h-5" />
        </div>
      </div>
      <div class="flex w-fit gap-6 uppercase">
        <ul v-for="menu in MENU_OPTIONS" :key="menu.label">
          <li
            v-if="menu.label === 'categories'"
            class="relative flex cursor-pointer items-center gap-2"
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
          <li v-else-if="menu.action === 'navigate'">
            <NuxtLink :to="menu.url">
              {{ menu.label }}
            </NuxtLink>
          </li>
          <li v-else class="cursor-not-allowed">
            {{ menu.label }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
