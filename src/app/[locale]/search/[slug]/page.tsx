import {Suspense} from 'react'
import {notFound} from 'next/navigation'
import {setRequestLocale} from 'next-intl/server'
import {getTranslations} from 'next-intl/server'

import PageLayout from '@/components/layout/PageLayout'
import SearchExplorer from '@/components/search/SearchExplorer'
import {routing} from '@/i18n/routing'
import {SEARCHES} from '@/constants/search'

const SEARCH_SLUGS = Object.keys(SEARCHES).filter((k) => k !== 'default')

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SEARCH_SLUGS.map((slug) => ({locale, slug}))
  )
}

export default async function SearchSlugPage({
  params,
}: {
  params: Promise<{locale: string; slug: string}>
}) {
  const {locale, slug} = await params
  setRequestLocale(locale)

  if (!SEARCHES[slug]) {
    notFound()
  }

  const t = await getTranslations('Search')

  return (
    <PageLayout title={t('title')} description={t('description')}>
      <Suspense fallback={<div>{t('description')}</div>}>
        <SearchExplorer searchType={slug} />
      </Suspense>
    </PageLayout>
  )
}
