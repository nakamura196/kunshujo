import {Suspense} from 'react'
import {notFound} from 'next/navigation'
import {setRequestLocale} from 'next-intl/server'
import {getTranslations} from 'next-intl/server'
import type {Metadata} from 'next'

import PageLayout from '@/components/layout/PageLayout'
import ItemDetailClient from '@/components/search/ItemDetailClient'
import {getItemById} from '@/lib/site-data'
import {SITE, Locale} from '@/constants/site'

export const dynamicParams = true
export const revalidate = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; id: string}>
}): Promise<Metadata> {
  const {locale, id} = await params
  const item = getItemById(decodeURIComponent(id))
  const title = item?.label || id
  const siteName = SITE.name[locale as Locale]
  return {
    title,
    openGraph: {
      title: `${title} - ${siteName}`,
      type: 'article',
      ...(item?.thumbnail ? {images: [{url: item.thumbnail}]} : {}),
    },
  }
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{locale: string; id: string}>
}) {
  const {locale, id} = await params
  setRequestLocale(locale)
  const t = await getTranslations('Search')

  const decodedId = decodeURIComponent(id)
  const item = getItemById(decodedId)
  if (!item) {
    notFound()
  }

  return (
    <PageLayout title={t('detailTitle')}>
      <Suspense fallback={<div>...</div>}>
        <ItemDetailClient initialId={decodedId} initialItem={item} />
      </Suspense>
    </PageLayout>
  )
}
