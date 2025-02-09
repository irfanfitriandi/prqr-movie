import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    apiBaseUrl: '',
    apiImgBaseUrl: '',
    public: {
      apiKey: '',
      apiImg: '',
    },
  },
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxt/image'],
  imports: {
    dirs: ['libs/**/*.ts'],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})
