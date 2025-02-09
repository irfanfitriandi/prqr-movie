<script setup lang="ts">
import dayjs from 'dayjs'
</script>

<template>
  <footer class="flex h-40 items-center justify-center bg-black/30">
    <div class="flex w-[80%] justify-between px-4">
      <div class="text-muted text-sm">
        &copy; {{ dayjs().year() }} MoovieTime. All rights reserved.
      </div>
      <div>
        <LogoIcon class="h-6 -translate-x-1" />
      </div>
      <div class="text-muted text-sm">
        <span>Made with Nuxt 3 by </span>
        <a
          href="https://github.com/irfanfitriandi"
          target="_blank"
          class="underline"
        >
          irfanfitriandi
        </a>
      </div>
    </div>
  </footer>
</template>
