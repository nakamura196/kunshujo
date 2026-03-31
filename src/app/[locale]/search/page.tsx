import {Suspense} from 'react'

import {setRequestLocale} from 'next-intl/server'
import {getTranslations} from 'next-intl/server'

import PageLayout from '@/components/layout/PageLayout'
import SearchExplorer from '@/components/search/SearchExplorer'
import {routing} from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export default async function SearchPage({
  params,
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  setRequestLocale(locale)
  const t = await getTranslations('Search')

  return (
    <PageLayout title={t('title')} description={t('description')}>
      <Suspense fallback={<div>{t('description')}</div>}>
        <SearchExplorer />
      </Suspense>
    </PageLayout>
  )
}
