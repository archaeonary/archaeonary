// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  modules: ["@nuxt/content"],
  app: {
    head: {
      title: 'Archaeonary', // default fallback title
      htmlAttrs: {
        lang: 'de',
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/archaeonary/favicon.ico",
        },
      ],
    },
    baseURL: "/archaeonary/",
  }
})
