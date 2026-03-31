import {getTranslations} from 'next-intl/server'

import {Link} from '@/i18n/routing'
import type {Item} from '@/lib/site-data'

async function MetaSection({
  title,
  values,
}: {
  title: string
  values?: string[]
}) {
  if (!values || values.length === 0) {
    return null
  }

  return (
    <section className="border-t py-5 first:border-t-0 first:pt-0" style={{borderColor: 'var(--border)'}}>
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
        {title}
      </h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {values.map((value) => (
          <span
            key={`${title}-${value}`}
            className="rounded-full border px-3 py-1 text-sm"
            style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
          >
            {value}
          </span>
        ))}
      </div>
    </section>
  )
}

export default async function ItemDetail({item}: {item: Item}) {
  const tCommon = await getTranslations('Common')
  const tSearch = await getTranslations('Search')

  return (
    <div className="space-y-8">
      <Link href="/search" className="mb-8 inline-block text-sm underline">
        {tCommon('backToSearch')}
      </Link>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,420px)_1fr]">
        <div className="overflow-hidden rounded-[1.75rem] border" style={{borderColor: 'var(--border)'}}>
          {item.thumbnail ? (
            <img
              src={item.thumbnail}
              alt={item.label || tCommon('thumbnailAlt')}
              className="h-full w-full object-cover"
            />
          ) : null}
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {item.label || item.objectID}
          </h1>
          {item._updated ? (
            <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
              {tSearch('updated')}: {item._updated}
            </p>
          ) : null}
          {item.member ? (
            <p className="mt-5">
              <a
                href={item.member}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full px-5 py-3 text-white"
                style={{background: 'var(--accent)'}}
              >
                {tCommon('viewOriginal')}
              </a>
            </p>
          ) : null}
          <div className="mt-8 space-y-2 text-sm leading-7 text-stone-700 dark:text-stone-300">
            {(item.tag || []).map((value) => (
              <p key={value}>{value}</p>
            ))}
          </div>
        </div>
      </div>

      <div
        className="rounded-[1.75rem] border p-6"
        style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
      >
        <h2 className="mb-6 text-xl font-semibold">{tSearch('metadata')}</h2>
        <div className="space-y-1">
          <MetaSection title={tSearch('book')} values={item.book} />
          <MetaSection title={tSearch('places')} values={item.place} />
          <MetaSection title={tSearch('people')} values={item.agential} />
          <MetaSection title={tSearch('organizations')} values={item.org} />
          <MetaSection title={tSearch('keywords')} values={item.keyword} />
          <MetaSection title={tSearch('colors')} values={item.color} />
          <MetaSection title={tSearch('objects')} values={item.mtag} />
          <MetaSection title={tSearch('tags')} values={item.tag} />
        </div>
      </div>
    </div>
  )
}
