export type Locale = 'ja' | 'en'

export const SITE = {
  name: {
    ja: '電子展示『捃拾帖』（拡張版）',
    en: 'Kunshujo Digital Exhibition (Extended Edition)',
  },
  description: {
    ja: '東京大学総合図書館所蔵『捃拾帖』の検索・閲覧を中心とした電子展示サイトです。',
    en: 'A digital exhibition site for searching and exploring Kunshujo, held by the University of Tokyo General Library.',
  },
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://kunshujo-i.dl.itc.u-tokyo.ac.jp',
} as const

type HomeMenuItem = {
  key: string
  href: string
  translationKey: string
  descriptionKey: string
  icon?: string
  img?: string
  external?: boolean
}

export const HOME_MENU: HomeMenuItem[] = [
  {
    key: 'about',
    href: '/page/about',
    translationKey: 'nav.about',
    descriptionKey: 'home.aboutDescription',
    icon: 'info',
  },
  {
    key: 'example',
    href: '/example',
    translationKey: 'nav.example',
    descriptionKey: 'home.exampleDescription',
    icon: 'list',
  },
  {
    key: 'search',
    href: '/search',
    translationKey: 'nav.search',
    descriptionKey: 'home.searchDescription',
    icon: 'search',
  },
  {
    key: 'other_search',
    href: '/search/list',
    translationKey: 'nav.otherSearch',
    descriptionKey: 'home.otherSearchDescription',
    icon: 'magnify',
  },
  {
    key: 'map',
    href: '/map',
    translationKey: 'nav.map',
    descriptionKey: 'home.mapDescription',
    icon: 'map',
  },
  {
    key: 'visualization',
    href: '/vis',
    translationKey: 'nav.visualization',
    descriptionKey: 'home.visualizationDescription',
    img: '/img/etc/pd_banner_magnified.webp',
  },
]

export const STATIC_PAGES = ['about', 'dataset', 'function', 'reuse'] as const
