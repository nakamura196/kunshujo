import {Suspense} from 'react'
import {setRequestLocale} from 'next-intl/server'
import {getTranslations} from 'next-intl/server'

import PageLayout from '@/components/layout/PageLayout'
import HistoryClient from '@/components/search/HistoryClient'
import {routing} from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export default async function HistoryPage({
  params,
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  setRequestLocale(locale)
  const t = await getTranslations('History')

  return (
    <PageLayout title={t('title')}>
      <Suspense fallback={<div>...</div>}>
        <HistoryClient />
      </Suspense>
    </PageLayout>
  )
}
