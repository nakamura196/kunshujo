import {Suspense} from 'react'
import {setRequestLocale} from 'next-intl/server'
import {getTranslations} from 'next-intl/server'
import type {Metadata} from 'next'

import PageLayout from '@/components/layout/PageLayout'
import EntityDetailClient from '@/components/search/EntityDetailClient'
import {getDB} from '@/lib/d1'
import {SITE, Locale} from '@/constants/site'

export const dynamicParams = true
export const revalidate = false

async function getEntityFromD1(id: string) {
  try {
    const db = await getDB()
    return await db.prepare('SELECT objectID, label, thumbnail FROM entities WHERE objectID = ?').bind(id).first<{objectID: string; label: string; thumbnail: string}>()
  } catch {
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; id: string}>
}): Promise<Metadata> {
  const {locale, id} = await params
  const item = await getEntityFromD1(decodeURIComponent(id))
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

export default async function EntityPage({
  params,
}: {
  params: Promise<{locale: string; id: string}>
}) {
  const {locale, id} = await params
  setRequestLocale(locale)
  const t = await getTranslations('Entity')

  return (
    <PageLayout title={t('title')}>
      <Suspense fallback={<div>...</div>}>
        <EntityDetailClient id={decodeURIComponent(id)} />
      </Suspense>
    </PageLayout>
  )
}
