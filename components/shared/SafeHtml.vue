<script setup lang="ts">
defineProps<{ rawHtml: string }>()
</script>

<template>
  <div v-dompurify-html="rawHtml"></div>
</template>
