import {useTranslations} from 'next-intl'
import {setRequestLocale} from 'next-intl/server'

import Hero from '@/components/page/home/Hero'
import {Link} from '@/i18n/routing'
import {HOME_MENU, Locale} from '@/constants/site'
import {getNewsList} from '@/lib/site-data'

export function generateStaticParams() {
  return [{locale: 'ja'}, {locale: 'en'}]
}

export default async function HomePage({
  params,
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  setRequestLocale(locale)

  return <HomeContent locale={locale as Locale} />
}

const ICON_MAP: Record<string, React.ReactNode> = {
  info: (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
  ),
  list: (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
  ),
  search: (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  ),
  magnify: (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
  ),
  map: (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
  ),
}

function HomeContent({locale}: {locale: Locale}) {
  const tHome = useTranslations('Home')
  const tNav = useTranslations('Nav')
  const news = getNewsList(locale).slice(0, 3)

  return (
    <main>
      <Hero />

      {/* Site description */}
      <section className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6">
        <p className="text-base leading-8 text-stone-700 dark:text-stone-300">
          {tHome('siteDescriptionLong')}
        </p>
      </section>

      {/* Featured menu grid */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {HOME_MENU.map((item) => {
            const labelKey = item.translationKey.split('.').pop() as
              | 'about'
              | 'search'
              | 'example'
              | 'news'
              | 'map'
              | 'visualization'
              | 'otherSearch'
            const descriptionKey = item.descriptionKey
              .split('.')
              .pop() as
              | 'aboutDescription'
              | 'searchDescription'
              | 'exampleDescription'
              | 'newsDescription'
              | 'mapDescription'
              | 'visualizationDescription'
              | 'otherSearchDescription'

            const cardContent = (
              <>
                {item.img ? (
                  <div className="aspect-[16/9] overflow-hidden rounded-[1.25rem] bg-stone-200 dark:bg-stone-800">
                    <img
                      src={item.img}
                      alt={tNav(labelKey)}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : item.icon && ICON_MAP[item.icon] ? (
                  <div className="flex aspect-[16/9] items-center justify-center rounded-[1.25rem] bg-stone-100 text-stone-400 dark:bg-stone-800 dark:text-stone-500">
                    {ICON_MAP[item.icon]}
                  </div>
                ) : null}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{tNav(labelKey)}</h3>
                  <p className="mt-2 text-sm leading-7 text-stone-700 dark:text-stone-300">
                    {tHome(descriptionKey)}
                  </p>
                </div>
              </>
            )

            const className =
              'rounded-[1.75rem] border p-4 transition hover:-translate-y-0.5'
            const style = {
              borderColor: 'var(--border)',
              background: 'var(--panel)',
            }

            if (item.external) {
              return (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                  style={style}
                >
                  {cardContent}
                </a>
              )
            }

            return (
              <Link
                key={item.key}
                href={item.href}
                className={className}
                style={style}
              >
                {cardContent}
              </Link>
            )
          })}
        </div>
      </section>

      {/* Latest news */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div
          className="rounded-[2rem] border p-8"
          style={{borderColor: 'var(--border)', background: 'var(--panel-strong)'}}
        >
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">{tHome('latestNews')}</h2>
            <Link href="/news" className="text-sm underline">
              {tNav('news')}
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {news.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="rounded-[1.5rem] border p-5"
                style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
              >
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  {item.date}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
