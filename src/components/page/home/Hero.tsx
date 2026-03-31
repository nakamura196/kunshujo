import {useTranslations} from 'next-intl'

import {Link} from '@/i18n/routing'

export default function Hero() {
  const t = useTranslations('Home')

  return (
    <section className="relative overflow-hidden border-b" style={{borderColor: 'var(--border)'}}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-amber-800 dark:text-amber-300">
            {t('eyebrow')}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700 dark:text-stone-300 sm:text-lg">
            {t('lead')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/search"
              className="rounded-full px-6 py-3 font-medium text-white"
              style={{background: 'var(--accent)'}}
            >
              {t('searchCta')}
            </Link>
            <Link
              href="/news"
              className="rounded-full border px-6 py-3 font-medium"
              style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
            >
              {t('newsCta')}
            </Link>
          </div>
        </div>
        <div className="relative">
          <div
            className="aspect-[4/5] overflow-hidden rounded-[2rem] border p-3 shadow-xl"
            style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
          >
            <img
              src="/img/ogp/home.webp"
              alt="Kunshujo"
              className="h-full w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
