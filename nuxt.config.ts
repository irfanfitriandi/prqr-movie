import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: 'vercel',
  },
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
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'PQR Movie',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'PQR Movie is a comprehensive web application built with Nuxt.js that provides users with detailed information about movies and TV shows. It leverages The Movie Database (TMDb) API to fetch and display a wide range of content, including popular movies, TV shows, cast information, and user reviews.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { 'http-equiv': 'cache-control', content: 'no-cache' },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'PQR Movie',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'PQR Movie is a comprehensive web application built with Nuxt.js that provides users with detailed information about movies and TV shows. It leverages The Movie Database (TMDb) API to fetch and display a wide range of content, including popular movies, TV shows, cast information, and user reviews.',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: '/img/web-img.jpg',
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          property: 'og:image:alt',
          content: 'PQR Visit',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'website',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'msapplication-TileColor', href: '#da532c' },
        { rel: 'theme-color', href: '#ffffff' },
      ],
    },
  },
})
