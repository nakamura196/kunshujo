import {setRequestLocale} from 'next-intl/server'
import {getTranslations} from 'next-intl/server'

import PageLayout from '@/components/layout/PageLayout'
import CategoryIndexClient from '@/components/search/CategoryIndexClient'
import {routing} from '@/i18n/routing'

const SLUGS = ['item', 'entity', 'object']

export function generateStaticParams() {
  const params: {locale: string; slug: string}[] = []
  for (const locale of routing.locales) {
    for (const slug of SLUGS) {
      params.push({locale, slug})
    }
  }
  return params
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{locale: string; slug: string}>
}) {
  const {locale, slug} = await params
  setRequestLocale(locale)
  const t = await getTranslations('Category')

  const slugLabel: Record<string, string> = {
    item: t('itemLabel'),
    entity: t('entityLabel'),
    object: t('objectLabel'),
  }

  return (
    <PageLayout title={`${t('title')} - ${slugLabel[slug] || slug}`}>
      <CategoryIndexClient slug={slug} />
    </PageLayout>
  )
}
