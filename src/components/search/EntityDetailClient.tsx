'use client'

import {useCallback, useEffect, useMemo, useState} from 'react'
import {useLocale, useTranslations} from 'next-intl'

import {Link} from '@/i18n/routing'
import {SEARCHES} from '@/constants/search'
import {SITE} from '@/constants/site'

type EntityItem = {
  objectID: string
  label?: string
  thumbnail?: string
  description?: string[]
  count?: number
  jk?: string[]
  タイプ?: string[]
  _updated?: string
  [key: string]: unknown
}

type RelatedEntry = {
  id: string
  label: string
  thumbnail?: string
  coOccurrence: number
  href: string
}

// ─── Horizontal scroll list ───────────────────────────────────

function HorizontalItems({
  title,
  items,
  coOccurrenceLabel,
}: {
  title: string
  items: RelatedEntry[]
  coOccurrenceLabel?: string
}) {
  if (items.length === 0) return null

  return (
    <section className="mt-10">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {items.map((entry) => (
          <Link
            key={entry.id}
            href={entry.href}
            className="w-40 shrink-0 overflow-hidden rounded-2xl border transition hover:-translate-y-0.5"
            style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
          >
            <div className="flex aspect-square items-center justify-center bg-stone-200 p-2 dark:bg-stone-800">
              {entry.thumbnail ? (
                <img
                  src={entry.thumbnail}
                  alt={entry.label}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-xs text-stone-400">{entry.label}</span>
              )}
            </div>
            <div className="p-2">
              <p className="line-clamp-2 text-xs font-medium">{entry.label}</p>
              {coOccurrenceLabel && (
                <p className="mt-1 text-[10px] text-stone-500">
                  {coOccurrenceLabel}: {entry.coOccurrence}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// ─── Main component ───────────────────────────────────────────

export default function EntityDetailClient({id}: {id: string}) {
  const t = useTranslations('Common')
  const tSearch = useTranslations('Search')
  const tEntity = useTranslations('Entity')
  const locale = useLocale()
  const [item, setItem] = useState<EntityItem | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [relatedEntities, setRelatedEntities] = useState<RelatedEntry[]>([])
  const [snackbar, setSnackbar] = useState(false)

  // Load entity from API
  useEffect(() => {
    let mounted = true

    fetch(`/api/entity?id=${encodeURIComponent(id)}`)
      .then((res) => res.json() as Promise<EntityItem>)
      .then((data) => {
        if (!mounted) return
        if (data && data.objectID) {
          setItem(data)
        }
        setIsLoading(false)
      })
      .catch(() => {
        if (mounted) setIsLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [id])

  // Load related entities
  useEffect(() => {
    if (!item) return
    let mounted = true

    fetch(`/api/entity-relations?id=${encodeURIComponent(item.objectID)}`)
      .then((res) => res.json() as Promise<{relatedLabel: string; coOccurrence: number}[]>)
      .then((relations) => {
        if (!mounted) return
        setRelatedEntities(
          relations.map((rel) => ({
            id: rel.relatedLabel,
            label: rel.relatedLabel.split(':')[1] || rel.relatedLabel,
            thumbnail: undefined,
            coOccurrence: rel.coOccurrence,
            href: `/entity/${encodeURIComponent(rel.relatedLabel)}`,
          }))
        )
      })
      .catch(() => {})

    return () => {
      mounted = false
    }
  }, [item])

  // Citation
  const citationText = useMemo(() => {
    if (!item) return ''
    const title = item.label || ''
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const siteName = SITE.name[locale as 'ja' | 'en']
    if (locale === 'en') {
      return `"${title}" ${siteName} (${url})`
    }
    return `『${title}』${siteName} (${url})`
  }, [item, locale])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(citationText).catch(() => {})
    setSnackbar(true)
    setTimeout(() => setSnackbar(false), 2000)
  }, [citationText])

  // Share URL
  const shareUrl = useMemo(() => {
    if (typeof window === 'undefined') return ''
    return window.location.href
  }, [])

  if (isLoading) return <div>{t('loading')}</div>
  if (!item) return <div>{t('noResults')}</div>

  const detail = SEARCHES.entity.detail
  const prefix = id.split(':')[0]
  const fieldMap: Record<string, string> = {
    chname: 'agential',
    place: 'place',
    time: 'time',
    org: 'org',
    keyword: 'keyword',
  }
  const searchField = fieldMap[prefix] || 'agential'
  const shareTitle = item.label || item.objectID

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
        <Link href="/" className="underline">
          {t('top')}
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
        <Link href="/search/entity" className="underline">
          {tEntity('searchLabel')}
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
        <span>{item.label || item.objectID}</span>
      </nav>

      {item.thumbnail ? (
        <div
          className="overflow-hidden rounded-[1.75rem] bg-stone-100 dark:bg-stone-800"
          style={{maxHeight: 300}}
        >
          <img
            src={item.thumbnail}
            alt={item.label || t('thumbnailAlt')}
            className="mx-auto h-full object-contain"
            style={{maxHeight: 300}}
          />
        </div>
      ) : null}

      <h1 className="text-3xl font-semibold tracking-tight">
        {item.label || item.objectID}
      </h1>

      {/* Description rendered as HTML */}
      {item.description && item.description[0] ? (
        <div
          className="text-stone-700 dark:text-stone-300"
          dangerouslySetInnerHTML={{
            __html: item.description.join('<br />'),
          }}
        />
      ) : null}

      {/* Search items button */}
      <div className="text-center">
        <Link
          href={`/search?fc-${searchField}=${id}`}
          className="inline-flex rounded-full px-6 py-3 font-medium text-white"
          style={{background: 'var(--accent)'}}
        >
          {t('searchNItems', {count: Number(item.count || 0)})}
        </Link>
      </div>

      {/* Citation & Share buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="relative">
          <button
            type="button"
            onClick={copyToClipboard}
            className="inline-flex rounded-full border px-5 py-3 text-sm"
            style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
            title={t('citation')}
          >
            {t('citationCopy')}
          </button>
        </div>

        {/* Share: Twitter/X */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-full border px-5 py-3 text-sm"
          style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
          title="X (Twitter)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          {tEntity('share')}
        </a>

        {/* Share: Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-full border px-5 py-3 text-sm"
          style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
          title="Facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.613.115l.29.038v3.303l-1.174.007c-1.005-.007-1.66.168-2.101.584-.44.416-.62 1.044-.62 1.903v1.608h3.728l-.734 3.667h-2.994v7.98z" />
          </svg>
          {tEntity('share')}
        </a>
      </div>

      {/* Metadata table */}
      <div
        className="rounded-[1.75rem] border p-6"
        style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
      >
        <h2 className="mb-6 text-xl font-semibold">{tSearch('metadata')}</h2>
        <table className="w-full">
          <tbody>
            {detail.map((field) => {
              const values = item[field.value] as string[] | undefined
              if (!values || values.length === 0 || !values[0]) return null

              // JapanKnowledge links
              if (field.value === 'jk') {
                return (
                  <tr
                    key={field.value}
                    className="border-t first:border-t-0"
                    style={{borderColor: 'var(--border)'}}
                  >
                    <td className="py-4 pr-4 align-top text-sm font-medium text-stone-500 dark:text-stone-400 sm:w-1/4">
                      JapanKnowledge
                    </td>
                    <td className="py-4">
                      {values.map((value, i) => (
                        <div key={i} className="mb-2 flex flex-wrap gap-2">
                          <a
                            href={`https://japanknowledge.com/psnl/display/?lid=${value}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex rounded-full px-3 py-1 text-xs text-white"
                            style={{background: 'var(--accent)'}}
                          >
                            {t('jkPersonal')}
                          </a>
                          <a
                            href={`https://japanknowledge.com/lib/display/?lid=${value}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex rounded-full px-3 py-1 text-xs text-white"
                            style={{background: 'var(--accent)'}}
                          >
                            {t('jkLib')}
                          </a>
                          <a
                            href={`https://japanknowledge-com.utokyo.idm.oclc.org/lib/display/?lid=${value}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex rounded-full px-3 py-1 text-xs text-white"
                            style={{background: 'var(--accent)'}}
                          >
                            {t('jkEzproxy')}
                          </a>
                        </div>
                      ))}
                    </td>
                  </tr>
                )
              }

              return (
                <tr
                  key={field.value}
                  className="border-t first:border-t-0"
                  style={{borderColor: 'var(--border)'}}
                >
                  <td className="py-4 pr-4 align-top text-sm font-medium text-stone-500 dark:text-stone-400 sm:w-1/4">
                    {tSearch(field.label as 'type')}
                  </td>
                  <td className="py-4">
                    {values.map((value, i) => (
                      <span key={i}>
                        <Link
                          href={`/search/entity?fc-${field.value}=${value}`}
                          className="underline"
                        >
                          {value}
                        </Link>
                        {i < values.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Related entities */}
      <HorizontalItems
        title={tEntity('relatedEntities')}
        items={relatedEntities}
        coOccurrenceLabel={tEntity('coOccurrence')}
      />

      {/* Last updated */}
      {item._updated ? (
        <div className="text-center text-sm text-stone-500 dark:text-stone-400">
          <h3 className="mb-2 font-medium">{t('lastUpdated')}</h3>
          {item._updated}
        </div>
      ) : null}

      {/* Snackbar */}
      {snackbar ? (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full px-6 py-3 text-sm text-white shadow-lg"
          style={{background: 'var(--accent)'}}
        >
          {t('copied')}
        </div>
      ) : null}
    </div>
  )
}
