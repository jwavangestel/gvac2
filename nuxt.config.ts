// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt','@nuxt/ui', '@nuxtjs/tailwindcss'],
  colorMode: {
    preference: 'light'
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true
  }
})
