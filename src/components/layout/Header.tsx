import {useTranslations} from 'next-intl'

import {Link} from '@/i18n/routing'

import {ToggleLanguage} from './ToggleLanguage'
import {ToggleTheme} from './ToggleTheme'

export default function Header() {
  const t = useTranslations('Nav')

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="min-w-0">
          <div className="text-lg font-semibold tracking-wide sm:text-xl">
            {t('home')}
          </div>
        </Link>
        <nav className="hidden items-center gap-4 text-sm md:flex">
          <Link href="/page/about">{t('about')}</Link>
          <Link href="/search">{t('search')}</Link>
          <Link href="/example">{t('example')}</Link>
          <Link href="/news">{t('news')}</Link>
          <Link href="/map">{t('map')}</Link>
          <Link href="/vis">{t('visualization')}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <ToggleTheme />
          <ToggleLanguage />
        </div>
      </div>
    </header>
  )
}
