const fs = require('fs')

const environment = process.env.NODE_ENV
const env = require(`./env/${environment}.ts`)

const conf = JSON.parse(fs.readFileSync('static/data/conf.json'))

for (let key in conf) {
  env[key] = conf[key]
}

const etc = env.etc || {}

// legend, settings, などの追加項目
for (let key in etc) {
  env[key] = JSON.parse(fs.readFileSync(etc[key]))
}

env.menu = [
  {
    label: '検索',
    to: {
      name: 'search-slug',
    },
    icon: 'mdi-magnify',
    top: true,
    description: 'アイテムを検索します',
  },
  {
    label: 'エンティティ検索',
    to: {
      name: 'search-slug',
      params: {
        slug: 'entity',
      },
    },
    icon: 'mdi-tag',
    description: 'エンティティ（人物、場所、キーワードなど）を検索します',
    top: true,
  },
  {
    label: 'category',
    to: {
      name: 'category-slug',
      params: {
        slug: 'item',
      },
    },
    icon: 'mdi-tag',
    description: 'アイテムのメタデータ別の集計結果を表示します。',
    top: true,
  },
  {
    label: 'カテゴリ（エンティティ）',
    to: {
      name: 'category-slug',
      params: {
        slug: 'entity',
      },
    },
    icon: 'mdi-tag',
    description: 'エンティティのメタデータ別の集計結果を表示します。',
    top: true,
  },
]

// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
let routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/kunshujo/',
        },
      }
    : {}

// path
const baseUrl = env.BASE_URL || ''
const baseDir = env.BASE_DIR || '/'
const basePath = baseUrl + baseDir

// meta
const lang = conf.lang
const siteName = conf.siteName
env.siteName = siteName

const siteDesc = conf.siteDesc
env.siteDesc = siteDesc

const footer = conf.footer
env.footer = footer

const siteKeywords = conf.siteKeywords

// images
const iconImages = baseDir + 'img/icons/'
const ogpImages = basePath + 'img/ogp/'

env.top = basePath + 'img/ogp/home.webp'

// pwa
const shortName = conf.shortName
const manifestIcon = 'img/icons/icon-512.png'
// const splashscreens = cdnPath + 'img/splashscreens/'

env.searches = {
  default: {
    label: 'item',
    index: 'data/index.json',
    aggs: {
      book: {
        key: 'book',
        sort: '',
        label: 'book',
        value: {},
        more: false,
        open: true,
      },
      agentials: {
        key: 'agentials',
        sort: '',
        label: 'agentials',
        value: {},
        more: false,
        open: true,
      },
      places: {
        key: 'places',
        sort: '',
        label: 'places',
        value: {},
        more: false,
        open: true,
      },
      orgs: {
        key: 'orgs',
        sort: '',
        label: 'orgs',
        value: {},
        more: false,
        open: true,
      },
      keywords: {
        key: 'keywords',
        sort: '',
        label: 'keywords',
        value: {},
        more: false,
        open: true,
      },
      times: {
        key: 'times',
        sort: '',
        label: 'times',
        value: {},
        more: false,
        open: true,
      },
    },
    sort: [{ label: '適合度', value: '_score' }],
    defaultSort: '_score:desc',
    defaultLayout: 'grid',
    name: 'item-id',
    detail: [
      {
        label: 'book',
        value: 'book',
      },
      {
        label: 'tags',
        value: 'tags',
        type: 'text',
      },
      {
        label: 'agentials',
        value: 'agentials',
      },
      {
        label: 'places',
        value: 'places',
      },
      {
        label: 'keywords',
        value: 'keywords',
      },
      {
        label: 'times',
        value: 'times',
      },
    ],
    advanced: [],
    layout: [
      {
        label: 'list',
        value: 'list',
        icon: 'mdi-view-list',
        component: 'search-layout-list',
      },
      {
        label: 'grid',
        value: 'grid',
        icon: 'mdi-view-grid',
        component: 'search-layout-grid',
      },
      {
        label: 'graph',
        value: 'graph',
        icon: 'mdi-chart-bar',
        component: 'search-layout-graph',
      },
    ],
    list: [
      {
        label: 'tags',
        value: 'tags',
      },
      {
        label: 'book',
        value: 'book',
      },
    ],
  },
  entity: {
    label: 'entity',
    index: 'data/entity.json',
    aggs: {
      タイプ: {
        key: 'タイプ',
        sort: '',
        label: 'タイプ',
        value: {},
        more: false,
        open: true,
      },
    },
    sort: [{ label: '適合度', value: '_score' }],
    defaultSort: '_score:desc',
    defaultLayout: 'grid',
    name: 'entity-id',
    detail: [
      {
        label: 'タイプ',
        value: 'タイプ',
      },
    ],
    advanced: [],
    layout: [
      {
        label: 'list',
        value: 'list',
        icon: 'mdi-view-list',
        component: 'search-layout-list',
      },
      {
        label: 'grid',
        value: 'grid',
        icon: 'mdi-view-grid',
        component: 'search-layout-grid',
      },
      {
        label: 'graph',
        value: 'graph',
        icon: 'mdi-chart-bar',
        component: 'search-layout-graph',
      },
    ],
    list: [
      {
        label: 'タイプ',
        value: 'タイプ',
      },
    ],
  },
}

export default {
  telemetry: false,
  server: {
    port: 8003, // デフォルト: 3000
  },
  // Target (https://go.nuxtjs.dev/config-target)

  ssr: env.ssr,
  target: 'static',
  // srcDir: 'src/',

  env,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang,
    },
    titleTemplate: `%s - ${siteName}`,
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no',
      },
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      // ogp関連
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: basePath },
      { hid: 'og:title', property: 'og:title', content: siteName },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${ogpImages}home.jpg`,
      },
      { name: 'twitter:card', content: 'summary' },
      // pwa iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: iconImages + 'favicon-16.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: iconImages + 'favicon-32.png',
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: iconImages + 'favicon-48.png',
      },
      {
        rel: 'icon',
        sizes: '72x72',
        type: 'image/png',
        href: iconImages + 'favicon-72.png',
      },
      // apple touch icon
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: iconImages + 'apple-touch-icon.png',
      },
    ],
  },

  manifest: {
    lang,
    name: siteName,
    short_name: shortName,
    description: siteDesc,
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
  },
  icon: {
    iconFileName: manifestIcon,
  },

  loading: { color: '#E64A19', height: '5px' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/style.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/utils.ts',
    { src: '@/plugins/leaflet.js', ssr: false },
    { src: '@/plugins/vue-scrollTo.js', ssr: false },
    '@/plugins/es.ts',
    '@/plugins/localEs.ts',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  moment: {
    // ここにオプションが記述できる
    locales: ['ja'],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-i18n',
    // Simple usage
    // '@nuxtjs/amp',
    '@nuxt/content',
    '@nuxtjs/google-gtag',
  ],

  'google-gtag': {
    id: 'G-KYBLVDY8SM', //サイトのID
    debug: true, // 開発環境でも表示したい場合
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: baseUrl,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    defaultAssets: {
      font: false,
      icons: 'mdi',
    },
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en_US', file: 'en.json' },
      { code: 'ja', iso: 'ja_JP', file: 'ja.json' },
    ],
    defaultLocale: 'ja',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    // strategy: 'no_prefix'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  ...routerBase,

  generate: {
    routes() {
      return [] //routes2()
    },
  },
}

function routes2() {
  const pages = []
  const fs = require('fs')
  const index = JSON.parse(fs.readFileSync('static/data/index.json'))
  for (const item of index) {
    const id = item.objectID
    pages.push({
      route: `/item/${id}`,
    })

    pages.push({
      route: `/en/item/${id}`,
    })
  }

  return pages
}
