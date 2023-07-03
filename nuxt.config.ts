// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "NNSL",
      htmlAttrs: {
        lang: "eng",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/icon2.png" }],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    "~/assets/css/base.css",
    "~/assets/css/global.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
});
