'use client'

import {useState} from 'react'
import {useTranslations} from 'next-intl'

import {Link} from '@/i18n/routing'

import {ToggleLanguage} from './ToggleLanguage'
import {ToggleTheme} from './ToggleTheme'

export default function Header() {
  const t = useTranslations('Nav')
  const tCommon = useTranslations('Common')
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="min-w-0">
          <div className="text-lg font-semibold tracking-wide sm:text-xl">
            {tCommon('siteTitle')}
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 text-sm md:flex">
          <Link href="/search">{t('search')}</Link>
          <Link href="/page/about">{t('about')}</Link>
          <Link href="/news">{t('news')}</Link>
          <Link href="/map">{t('map')}</Link>
        </nav>

        {/* Desktop: theme & language */}
        <div className="hidden items-center gap-2 md:flex">
          <ToggleTheme />
          <ToggleLanguage />
        </div>

        {/* Mobile: hamburger only */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-full border p-2 md:hidden"
          style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t px-4 py-4 md:hidden"
          style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
        >
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/search" onClick={close}>{t('search')}</Link>
            <Link href="/page/about" onClick={close}>{t('about')}</Link>
            <Link href="/example" onClick={close}>{t('example')}</Link>
            <Link href="/news" onClick={close}>{t('news')}</Link>
            <Link href="/map" onClick={close}>{t('map')}</Link>
            <Link href="/vis" onClick={close}>{t('visualization')}</Link>
            <Link href="/category" onClick={close}>{t('category')}</Link>
            <hr style={{borderColor: 'var(--border)'}} />
            <div className="flex items-center gap-3">
              <ToggleTheme />
              <ToggleLanguage />
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
