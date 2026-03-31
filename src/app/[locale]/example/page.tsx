import {getTranslations, setRequestLocale} from 'next-intl/server'

import PageLayout from '@/components/layout/PageLayout'
import ExampleGrid from '@/components/search/ExampleGrid'
import {routing} from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export default async function ExamplePage({
  params,
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  setRequestLocale(locale)
  const t = await getTranslations('Page')

  return (
    <PageLayout title={t('exampleTitle')}>
      <ExampleGrid />
    </PageLayout>
  )
}
