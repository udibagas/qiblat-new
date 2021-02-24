

export default {
  // loading: "~/components/Loading.vue",
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Yayasan Qibat"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  router: {
    // linkExactActiveClass: 'active'
  },
  /*
   ** Global CSS
   */
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
    // "~/assets/scss/app.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // '~/plugins/index.js',
    // "~/plugins/simplebar.js",
    // "~/plugins/vue-click-outside.js",
    // "~/plugins/vue-apexcharts.js",
    // "~/plugins/vuelidate.js",
    // "~/plugins/vue-slidebar.js",
    // "~/plugins/vue-lightbox.js",
    // "~/plugins/vue-chartist.js",
    // "~/plugins/vue-mask.js",
    // "~/plugins/vue-googlemap.js",
    // '@/plugins/element-ui'
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // "@nuxt/content"
  ],

  axios: {
    credentials: true,
    baseURL: process.env.API_URL || 'http://localhost:8000'
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.js',
        flag: "/images/flags/gb.png"
      }, {
        code: 'fr',
        name: 'Français',
        file: 'fr.js',
        flag: "/images/flags/fr.png"
      }, {
        code: 'id',
        name: 'Bahasa Indonesia',
        file: 'id.js',
        flag: "/images/flags/id.png"
      }, {
        code: 'ar',
        name: 'Arabic',
        file: 'ar.js',
        flag: "/images/flags/sa.png"
      }
    ],
    // seo: true,
    defaultLocale: 'en',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: 'en'
    },
    vueI18n: {
      fallbackLocale: 'en',
    }
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      calback: '/login',
      home: '/'
    },
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.API_URL || 'http://localhost:8000',
        endpoints: {
          login: {
            url: '/api/login',
            method: 'post',
            propertyName: false
          },
          logout: {
            url: '/api/logout',
            method: 'post'
          },
          user: {
            url: '/api/me',
            method: 'get',
            propertyName: false
          }
        },
        tokenType: false,
        tokenRequired: false
      }
    },
    localStorage: false
  },

  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // transpile: [/^element-ui/],
  },
  env: {
  }
};
