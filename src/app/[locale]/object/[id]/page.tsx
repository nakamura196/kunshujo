import {Suspense} from 'react'
import {setRequestLocale} from 'next-intl/server'
import {getTranslations} from 'next-intl/server'

import PageLayout from '@/components/layout/PageLayout'
import ObjectDetailClient from '@/components/search/ObjectDetailClient'

export const dynamicParams = true
export const revalidate = false

export default async function ObjectPage({
  params,
}: {
  params: Promise<{locale: string; id: string}>
}) {
  const {locale, id} = await params
  setRequestLocale(locale)
  const t = await getTranslations('Object')

  return (
    <PageLayout title={t('title')}>
      <Suspense fallback={<div>...</div>}>
        <ObjectDetailClient id={decodeURIComponent(id)} />
      </Suspense>
    </PageLayout>
  )
}
