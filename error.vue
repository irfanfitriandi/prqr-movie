<script setup lang="ts">
defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div
    class="bg-secondary text-tertiary flex min-h-screen flex-col items-center justify-center p-8"
  >
    <div class="w-full max-w-md space-y-6 text-center">
      <h1 class="text-4xl font-bold text-red-500">
        {{ error?.statusCode || 500 }}
      </h1>

      <p class="text-xl font-medium">
        {{ error?.statusMessage || 'Something went wrong' }}
      </p>

      <p v-if="error?.message" class="text-gray-400">
        {{ error.message }}
      </p>

      <button
        class="bg-primary hover:bg-primary-dark mt-6 rounded-lg px-6 py-2 text-white transition-colors"
        @click="handleError"
      >
        Return Home
      </button>
    </div>
  </div>
</template>
