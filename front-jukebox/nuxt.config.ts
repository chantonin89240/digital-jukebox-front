import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: [/vuetify/]
  },
  css: ['@mdi/font/css/materialdesignicons.min.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // ts-expect-error
        //config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [ 
      { 
        code:'en',
        file:'en.json' 
      },
      { 
        code:'fr',
        file:'fr.json' 
      }
    ],
    langDir:'locales',
    defaultLocale: 'en',
    lazy: true
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});

/*
({
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  }
})
  */