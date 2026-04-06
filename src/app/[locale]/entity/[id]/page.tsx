import {Suspense} from 'react'
import {readFileSync} from 'fs'
import {join} from 'path'
import {setRequestLocale} from 'next-intl/server'
import {getTranslations} from 'next-intl/server'
import type {Metadata} from 'next'

import PageLayout from '@/components/layout/PageLayout'
import EntityDetailClient from '@/components/search/EntityDetailClient'
import {SITE, Locale} from '@/constants/site'

export const dynamicParams = true
export const revalidate = false

function getEntityById(id: string) {
  const data = JSON.parse(
    readFileSync(join(process.cwd(), 'public/data/entity.json'), 'utf-8')
  ) as {objectID: string; label?: string; thumbnail?: string}[]
  return data.find((item) => item.objectID === id) ?? null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; id: string}>
}): Promise<Metadata> {
  const {locale, id} = await params
  const item = getEntityById(decodeURIComponent(id))
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
