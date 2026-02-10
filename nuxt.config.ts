// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  ssr: true,

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],

  content: {
    highlight: false,
    documentDriven: false,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  app: {
    head: {
      title: 'Collection LEGO de Sacha',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'La collection de sets LEGO de Sacha' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap',
        },
      ],
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', async: true },
      ],
    },
  },

  devtools: { enabled: true },
})
