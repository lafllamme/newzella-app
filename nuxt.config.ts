export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/newzella.css'],
  modules: ['@unocss/nuxt'],
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      meta: [
        { name: 'theme-color', content: '#8b0e13' },
        { name: 'color-scheme', content: 'light' },
      ],
    },
  },
})
