export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Qiblat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  mode: 'spa',

  target: 'server',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
    baseURL: process.env.API_URL || 'http://localhost:8000'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.js'
      }, {
        code: 'fr',
        name: 'Français',
        file: 'fr.js'
      }, {
        code: 'id',
        name: 'Bahasa Indonesia',
        file: 'id.js'
      }, {
        code: 'ar',
        name: 'Arabic',
        file: 'ar.js'
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
      local: {
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
