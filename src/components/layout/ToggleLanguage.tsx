'use client'

import {useLocale} from 'next-intl'

import {usePathname, useRouter} from '@/i18n/routing'

export function ToggleLanguage() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const nextLocale = locale === 'ja' ? 'en' : 'ja'

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, {locale: nextLocale})}
      className="rounded-full border px-3 py-2 text-sm"
      style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
    >
      {nextLocale.toUpperCase()}
    </button>
  )
}
