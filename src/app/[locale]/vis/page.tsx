import {setRequestLocale} from 'next-intl/server'
import {getTranslations} from 'next-intl/server'

import PageLayout from '@/components/layout/PageLayout'
import {routing} from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

const VIS_ITEMS = [
  {
    labelKey: 'item1',
    href: 'https://utda.github.io/kunshujo-a/item/pd/',
    img: '/img/etc/pd_banner_magnified.webp',
    descKey: 'descNypl',
  },
  {
    labelKey: 'item2',
    href: 'https://utda.github.io/kunshujo-a/item/pp/',
    img: '/img/etc/pixplot.webp',
    descKey: 'descPixplot',
  },
  {
    labelKey: 'object1',
    href: 'https://utda.github.io/kunshujo-a/object/pd/',
    img: '/img/etc/pd_banner_magnified.webp',
    descKey: 'descNypl',
  },
  {
    labelKey: 'object2',
    href: 'https://utda.github.io/kunshujo-a/object/pp/',
    img: '/img/etc/pixplot.webp',
    descKey: 'descPixplot',
  },
]

export default async function VisPage({
  params,
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  setRequestLocale(locale)
  const t = await getTranslations('Vis')

  return (
    <PageLayout title={t('title')}>
      <div className="grid gap-6 sm:grid-cols-2">
        {VIS_ITEMS.map((item) => (
          <a
            key={item.labelKey}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-[1.75rem] border transition hover:shadow-md"
            style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
          >
            <div className="aspect-video overflow-hidden bg-stone-200 dark:bg-stone-800">
              <img
                src={item.img}
                alt={t(item.labelKey as 'item1')}
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{t(item.labelKey as 'item1')}</h3>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                {t(item.descKey as 'descNypl')}
              </p>
            </div>
          </a>
        ))}
      </div>
    </PageLayout>
  )
}
