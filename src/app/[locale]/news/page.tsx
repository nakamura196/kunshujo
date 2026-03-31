import {getTranslations, setRequestLocale} from 'next-intl/server'

import PageLayout from '@/components/layout/PageLayout'
import {Link, routing} from '@/i18n/routing'
import {Locale} from '@/constants/site'
import {getNewsList} from '@/lib/site-data'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  setRequestLocale(locale)
  const t = await getTranslations('Page')
  const items = getNewsList(locale as Locale)

  return (
    <PageLayout title={t('newsListTitle')}>
      <div className="grid gap-4">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/news/${item.slug}`}
            className="rounded-[1.5rem] border p-6"
            style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
          >
            <p className="text-sm text-stone-600 dark:text-stone-400">
              {item.date}
            </p>
            <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
          </Link>
        ))}
      </div>
    </PageLayout>
  )
}
