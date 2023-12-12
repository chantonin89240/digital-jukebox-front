import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: [/vuetify/]
  },
  css: ['@mdi/font/css/materialdesignicons.min.css'],
  devtools: { enabled: true },
  modules: [
    [ 
      '@nuxtjs/i18n',
      { /* i18n options */
        vueI18n:"./i18n.config.ts",
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
  },
  ssr:false
});
