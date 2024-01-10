import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: process.env.NUXT_PUBLIC_API
    }
  },
  // SSR nuxt
  app: {
    head: {
      title: 'Jukeboxe application',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Friends 'n Fun your homelike hangout.",
        },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  build: {
    transpile: [/vuetify/]
  },
  css: ['@mdi/font/css/materialdesignicons.min.css'],
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    [
      '@nuxtjs/i18n',
      { /* i18n options */

        locales:[
          {
            code:"en",
            file:'en.json'
          },
          {
            code:"fr",
            file:'fr.json'
          }
        ],
        strategy: "no_prefix",
        langDir:'locale',
        defaultLocale: "fr",
        lazy:true
      }
    ],
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  }
});
