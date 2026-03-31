'use client'

import {useCallback, useEffect, useMemo, useState} from 'react'
import {useLocale, useTranslations} from 'next-intl'
import {useSearchParams} from 'next/navigation'

import {Link} from '@/i18n/routing'
import {SEARCHES} from '@/constants/search'
import {SITE} from '@/constants/site'

type Item = {
  _updated?: string
  agential?: string[]
  book?: string[]
  color?: string[]
  description?: string[]
  keyword?: string[]
  label?: string
  license?: string
  manifest?: string
  member?: string
  mtag?: string[]
  objectID: string
  org?: string[]
  place?: string[]
  tag?: string[]
  thumbnail?: string
  time?: string[]
  [key: string]: unknown
}

type RelatedEntry = {
  id: string
  label: string
  thumbnail?: string
  description?: string | null
  href: string
}

function normalizeManifestUrl(manifest: string) {
  return manifest.replace(/\/manifest\.json$/, '/manifest')
}

function formatLabel(value: string) {
  return value.includes(':') ? value.split(':')[1] : value
}

// ─── Horizontal scroll list ───────────────────────────────────

function HorizontalItems({
  title,
  subtitle,
  items,
}: {
  title: string
  subtitle?: string
  items: RelatedEntry[]
}) {
  if (items.length === 0) return null

  return (
    <section className="mt-10">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle ? (
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            {subtitle}
          </p>
        ) : null}
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
              ) : null}
            </div>
            <div className="p-2">
              <p className="line-clamp-2 text-xs font-medium">{entry.label}</p>
              {entry.description ? (
                <p className="mt-1 line-clamp-1 text-[10px] text-stone-500">
                  {entry.description}
                </p>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// ─── Main component ───────────────────────────────────────────

export default function ItemDetailClient({
  initialId,
  initialItem,
}: {
  initialId?: string
  initialItem?: Item
} = {}) {
  const t = useTranslations('Common')
  const tSearch = useTranslations('Search')
  const locale = useLocale()
  const params = useSearchParams()
  const id = initialId || params?.get('id') || null

  const [item, setItem] = useState<Item | null>(initialItem || null)
  const [indexData, setIndexData] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState(!initialItem)

  const [relatedItems, setRelatedItems] = useState<RelatedEntry[]>([])
  const [moreLikeThis, setMoreLikeThis] = useState<RelatedEntry[]>([])
  const [similarImages, setSimilarImages] = useState<RelatedEntry[]>([])
  const [objects, setObjects] = useState<RelatedEntry[]>([])

  const [snackbar, setSnackbar] = useState(false)

  // Load main index (needed for related items even when initialItem is provided)
  useEffect(() => {
    if (!id) {
      setIsLoading(false)
      return
    }
    let mounted = true

    fetch('/data/index.json')
      .then((res) => res.json())
      .then((data: Item[]) => {
        if (!mounted) return
        setIndexData(data)
        if (!initialItem) {
          setItem(data.find((entry) => entry.objectID === id) || null)
        }
        setIsLoading(false)
      })
      .catch(() => {
        if (mounted) setIsLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [id, initialItem])

  // Build index map
  const indexMap = useMemo(() => {
    const map: Record<string, Item> = {}
    for (const entry of indexData) {
      map[entry.objectID] = entry
    }
    return map
  }, [indexData])

  // Load related items (series)
  useEffect(() => {
    if (!item) return
    let mounted = true

    fetch('/data/relation2.json')
      .then((res) => res.json())
      .then((data: Record<string, string[]>) => {
        if (!mounted) return
        const ids = data[item.objectID] || []
        setRelatedItems(
          ids
            .filter((rid) => indexMap[rid])
            .map((rid) => ({
              id: rid,
              label: indexMap[rid].label || rid,
              thumbnail: indexMap[rid].thumbnail,
              description: indexMap[rid].tag?.join(', ') || null,
              href: `/item/${rid}`,
            }))
        )
      })
      .catch(() => {})

    return () => {
      mounted = false
    }
  }, [item, indexMap])

  // Load more like this (text similarity)
  useEffect(() => {
    if (!item?.manifest) return
    let mounted = true

    const spl = item.manifest.split('/')
    const mid = spl[spl.length - 2]

    fetch(`/data/relations/${mid}.json`)
      .then((res) => res.json())
      .then((data: Record<string, {texts?: string[]; images?: string[]}>) => {
        if (!mounted) return
        const entry = data[item.objectID]

        // texts → MoreLikeThis
        if (entry?.texts) {
          setMoreLikeThis(
            entry.texts
              .filter((rid) => indexMap[rid])
              .map((rid) => ({
                id: rid,
                label: indexMap[rid].label || rid,
                thumbnail: indexMap[rid].thumbnail,
                description: indexMap[rid].tag?.join(', ') || null,
                href: `/item/${rid}`,
              }))
          )
        }

        // images → SimilarImages
        if (entry?.images) {
          setSimilarImages(
            entry.images
              .filter((rid) => indexMap[rid])
              .map((rid) => ({
                id: rid,
                label: indexMap[rid].label || rid,
                thumbnail: indexMap[rid].thumbnail,
                description: indexMap[rid].tag?.join(', ') || null,
                href: `/item/${rid}`,
              }))
          )
        }
      })
      .catch(() => {})

    return () => {
      mounted = false
    }
  }, [item, indexMap])

  // Load detected objects (GCV)
  useEffect(() => {
    if (!item) return
    let mounted = true

    fetch('/data/gcv.json')
      .then((res) => res.json())
      .then(
        (
          data: {objectID: string; label?: string; thumbnail?: string; within?: string}[]
        ) => {
          if (!mounted) return
          setObjects(
            data
              .filter((obj) => obj.within === item.objectID)
              .map((obj) => ({
                id: obj.objectID,
                label: obj.label || obj.objectID,
                thumbnail: obj.thumbnail,
                description: null,
                href: `/object/${obj.objectID}`,
              }))
          )
        }
      )
      .catch(() => {})

    return () => {
      mounted = false
    }
  }, [item])

  // Computed URLs
  const iframeUrl = useMemo(() => {
    if (!item?.manifest || !item?.member) return null
    const manifest = normalizeManifestUrl(item.manifest)
    return (
      '/curation/index.html?manifest=' +
      manifest.replace(
        'https://iiif.dl.itc.u-tokyo.ac.jp/repo',
        '/data'
      ) +
      '&canvas=' +
      encodeURIComponent(item.member)
    )
  }, [item])

  const viewerUrl2 = useMemo(() => {
    if (!item?.manifest || !item?.member) return null
    try {
      const manifest = normalizeManifestUrl(item.manifest)
      const uuid = manifest.split('/iiif/')[1]?.split('/manifest')[0]
      const pos = Number(
        item.member.split('#xywh=')[0]?.split('/canvas/p')[1]
      )
      if (!uuid || isNaN(pos)) return null
      return `https://da.dl.itc.u-tokyo.ac.jp/portal/assets/${uuid}?pos=${pos}`
    } catch {
      return null
    }
  }, [item])

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

  // ─── Render ───

  if (isLoading) return <div>{t('loading')}</div>
  if (!item) return <div>{t('noResults')}</div>

  const detail = SEARCHES.default.detail

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
        <Link href="/" className="underline hover:text-stone-800 dark:hover:text-stone-200">
          {t('top')}
        </Link>
        <span aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
        </span>
        <Link href="/search" className="underline hover:text-stone-800 dark:hover:text-stone-200">
          {tSearch('title')}
        </Link>
        <span aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
        </span>
        <span className="truncate text-stone-800 dark:text-stone-200">
          {item.label || item.objectID}
        </span>
      </nav>

      {/* IIIF Curation Viewer */}
      {iframeUrl ? (
        <div className="overflow-hidden rounded-[1.75rem] bg-stone-100 dark:bg-stone-800">
          <iframe
            src={iframeUrl}
            width="100%"
            height="450"
            allowFullScreen
            className="border-0"
          />
        </div>
      ) : null}

      {/* Title */}
      <h1 className="text-3xl font-semibold tracking-tight">
        {item.label || item.objectID}
      </h1>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {viewerUrl2 ? (
          <a
            href={viewerUrl2}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full px-5 py-3 text-sm font-medium text-white"
            style={{background: 'var(--accent)'}}
          >
            {t('viewOriginalSite')}
          </a>
        ) : null}

        {/* Citation button */}
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

        {/* Share buttons */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-stone-500 dark:text-stone-400">{t('share')}</span>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(item.label || '')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border p-2"
            style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
            title="Twitter/X"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border p-2"
            style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
            title="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Description */}
      {item.description && item.description[0] ? (
        <div
          className="rounded-[1.75rem] border p-6"
          style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
        >
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
            {t('description')}
          </h2>
          <p dangerouslySetInnerHTML={{__html: item.description.join('<br />')}} />
        </div>
      ) : null}

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
              return (
                <tr
                  key={field.value}
                  className="border-t first:border-t-0"
                  style={{borderColor: 'var(--border)'}}
                >
                  <td className="py-4 pr-4 align-top text-sm font-medium text-stone-500 dark:text-stone-400 sm:w-1/4">
                    {tSearch(field.label as 'book')}
                  </td>
                  <td className="py-4">
                    {field.type === 'text'
                      ? values.join(', ')
                      : values.map((value, i) => (
                          <span key={i} className="mr-4 inline-block">
                            <Link
                              href={`/search?fc-${field.value}=${value}`}
                              className="underline"
                            >
                              {formatLabel(value)}
                            </Link>
                            {value.includes(':') ? (
                              <Link
                                href={`/entity/${encodeURIComponent(value)}`}
                                className="ml-2 rounded-full px-3 py-1 text-xs text-white"
                                style={{background: 'var(--accent)'}}
                              >
                                {t('viewDetails')}
                              </Link>
                            ) : null}
                          </span>
                        ))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Related items (series) */}
      <HorizontalItems
        title={locale === 'ja' ? '一連の資料' : 'Related Materials'}
        subtitle={
          locale === 'ja'
            ? '複数のページに渡っている場合、前後の資料がここに表示されます'
            : 'If the material spans multiple pages, previous and next materials are displayed here'
        }
        items={relatedItems}
      />

      {/* More like this (text similarity) */}
      <HorizontalItems
        title={locale === 'ja' ? '内容が似ている資料' : 'More Like This'}
        items={moreLikeThis}
      />

      {/* Similar images */}
      <HorizontalItems
        title={locale === 'ja' ? '見た目が似ている資料' : 'Similar Images'}
        items={similarImages}
      />

      {/* Detected objects (GCV) */}
      <HorizontalItems
        title={
          locale === 'ja'
            ? 'オブジェクト（機械タグ）'
            : 'Objects (Machine Tags)'
        }
        items={objects}
      />

      {/* License */}
      <div
        className="rounded-[1.75rem] p-8 text-center"
        style={{background: 'var(--panel-strong)'}}
      >
        <h3 className="mb-3 text-sm font-semibold">{t('license')}</h3>
        <Link href="/page/reuse" className="text-sm underline">
          {SITE.url}/page/reuse
        </Link>
      </div>

      {/* Last updated */}
      {item._updated ? (
        <div className="text-center text-sm text-stone-500 dark:text-stone-400">
          <h3 className="mb-2 font-medium">{t('lastUpdated')}</h3>
          {item._updated}
        </div>
      ) : null}

      {/* Snackbar */}
      {snackbar ? (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full px-6 py-3 text-sm text-white shadow-lg"
          style={{background: 'var(--accent)'}}
        >
          {t('copied')}
        </div>
      ) : null}
    </div>
  )
}
