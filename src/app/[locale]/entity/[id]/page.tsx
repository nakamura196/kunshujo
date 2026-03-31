import {Suspense} from 'react'
import {readFileSync} from 'fs'
import {join} from 'path'
import {setRequestLocale} from 'next-intl/server'
import {getTranslations} from 'next-intl/server'

import PageLayout from '@/components/layout/PageLayout'
import EntityDetailClient from '@/components/search/EntityDetailClient'
import {routing} from '@/i18n/routing'

export function generateStaticParams() {
  const data = JSON.parse(
    readFileSync(join(process.cwd(), 'public/data/entity.json'), 'utf-8')
  ) as {objectID: string}[]

  const params: {locale: string; id: string}[] = []
  for (const locale of routing.locales) {
    for (const item of data) {
      params.push({locale, id: encodeURIComponent(item.objectID)})
    }
  }
  return params
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
