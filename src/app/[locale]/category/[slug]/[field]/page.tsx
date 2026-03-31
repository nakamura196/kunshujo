import {Suspense} from 'react'
import {setRequestLocale} from 'next-intl/server'
import {getTranslations} from 'next-intl/server'

import PageLayout from '@/components/layout/PageLayout'
import CategoryFieldClient from '@/components/search/CategoryFieldClient'
import {SEARCHES} from '@/constants/search'
import {routing} from '@/i18n/routing'

const SLUGS = ['item', 'entity', 'object']

export function generateStaticParams() {
  const params: {locale: string; slug: string; field: string}[] = []
  for (const locale of routing.locales) {
    for (const slug of SLUGS) {
      const configKey = slug === 'item' ? 'default' : slug
      const config = SEARCHES[configKey]
      if (!config) continue
      for (const field of Object.keys(config.aggs)) {
        params.push({locale, slug, field})
      }
    }
  }
  return params
}

export default async function CategoryFieldPage({
  params,
}: {
  params: Promise<{locale: string; slug: string; field: string}>
}) {
  const {locale, slug, field} = await params
  setRequestLocale(locale)
  const t = await getTranslations('Category')

  const slugLabel: Record<string, string> = {
    item: t('itemLabel'),
    entity: t('entityLabel'),
    object: t('objectLabel'),
  }

  return (
    <PageLayout title={`${t('title')} - ${slugLabel[slug] || slug}`}>
      <Suspense fallback={<div>...</div>}>
        <CategoryFieldClient slug={slug} field={decodeURIComponent(field)} />
      </Suspense>
    </PageLayout>
  )
}
