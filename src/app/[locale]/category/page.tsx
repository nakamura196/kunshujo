import {setRequestLocale} from 'next-intl/server'
import {getTranslations} from 'next-intl/server'

import PageLayout from '@/components/layout/PageLayout'
import {Link, routing} from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export default async function CategoryListPage({
  params,
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  setRequestLocale(locale)
  const t = await getTranslations('Category')

  const items = [
    {
      label: t('byItem'),
      href: '/category/item',
      description: t('byItemDesc'),
    },
    {
      label: t('byEntity'),
      href: '/category/entity',
      description: t('byEntityDesc'),
    },
    {
      label: t('byObject'),
      href: '/category/object',
      description: t('byObjectDesc'),
    },
  ]

  return (
    <PageLayout title={t('title')}>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-[1.75rem] border p-6 transition hover:-translate-y-0.5"
            style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
          >
            <h3 className="text-xl font-semibold">{item.label}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-700 dark:text-stone-300">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </PageLayout>
  )
}
