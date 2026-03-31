'use client'

import {useEffect, useState} from 'react'
import {useTranslations} from 'next-intl'

import {Link} from '@/i18n/routing'
import {SEARCHES} from '@/constants/search'

type ObjectItem = {
  objectID: string
  label?: string
  thumbnail?: string
  description?: string[]
  manifest?: string
  member?: string
  within?: string
  mtag?: string[]
  color?: string[]
  score?: string[]
  _updated?: string
  [key: string]: unknown
}

function normalizeManifestUrl(manifest: string) {
  return manifest.replace(/\/manifest\.json$/, '/manifest')
}

export default function ObjectDetailClient({id}: {id: string}) {
  const t = useTranslations('Common')
  const tSearch = useTranslations('Search')
  const tObject = useTranslations('Object')
  const [item, setItem] = useState<ObjectItem | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    fetch('/data/gcv.json')
      .then((res) => res.json())
      .then((data: ObjectItem[]) => {
        if (!mounted) return
        const found = data.find((obj) => obj.objectID === id) || null
        setItem(found)
        setIsLoading(false)
      })
      .catch(() => {
        if (mounted) setIsLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [id])

  if (isLoading) return <div>{t('loading')}</div>
  if (!item) return <div>{t('noResults')}</div>

  const detail = SEARCHES.object.detail

  const iframeUrl = (() => {
    if (!item.manifest || !item.member) return null
    const manifest = normalizeManifestUrl(item.manifest)
    const baseUrl = ''
    return (
      baseUrl +
      '/curation/index.html?manifest=' +
      manifest.replace(
        'https://iiif.dl.itc.u-tokyo.ac.jp/repo',
        baseUrl + '/data'
      ) +
      '&canvas=' +
      encodeURIComponent(item.member)
    )
  })()

  const viewerUrl = (() => {
    if (!item.manifest || !item.member) return null
    try {
      const manifest = normalizeManifestUrl(item.manifest)
      const uuid = manifest.split('/iiif/')[1]?.split('/manifest')[0]
      const pos = Number(item.member.split('#xywh=')[0]?.split('/canvas/p')[1])
      if (!uuid || isNaN(pos)) return null
      return `https://da.dl.itc.u-tokyo.ac.jp/portal/assets/${uuid}?pos=${pos}`
    } catch {
      return null
    }
  })()

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
        <Link href="/search/object" className="underline hover:text-stone-800 dark:hover:text-stone-200">
          {tObject('searchLabel')}
        </Link>
        <span aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
        </span>
        <span className="truncate text-stone-800 dark:text-stone-200">
          {item.label || item.objectID}
        </span>
      </nav>

      {iframeUrl ? (
        <div className="overflow-hidden rounded-[1.75rem] bg-stone-100 dark:bg-stone-800">
          <iframe
            src={iframeUrl}
            width="100%"
            height="450"
            allowFullScreen
            className="border-0 px-4"
          />
        </div>
      ) : null}

      <h1 className="text-3xl font-semibold tracking-tight">
        {item.label || item.objectID}
      </h1>

      <div className="flex flex-wrap gap-3 justify-center">
        {viewerUrl ? (
          <a
            href={viewerUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full px-5 py-3 text-white"
            style={{background: 'var(--accent)'}}
          >
            {t('viewOriginalSite')}
          </a>
        ) : null}

        {item.within ? (
          <Link
            href={`/item/${item.within}`}
            className="inline-flex rounded-full border px-5 py-3"
            style={{borderColor: 'var(--border)'}}
          >
            {t('parentItem')}
          </Link>
        ) : null}
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
                    {tSearch(field.label as 'objects')}
                  </td>
                  <td className="py-4">
                    {field.type === 'text'
                      ? values.join(', ')
                      : values.map((value, i) => (
                          <span key={i} className="mr-4 inline-block">
                            <Link
                              href={`/search/object?fc-${field.value}=${value}`}
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

      {item._updated ? (
        <div className="text-center text-sm text-stone-500 dark:text-stone-400">
          <h3 className="mb-2 font-medium">{t('lastUpdated')}</h3>
          {item._updated}
        </div>
      ) : null}
    </div>
  )
}

function formatLabel(value: string) {
  if (value.includes(':')) {
    return value.split(':')[1]
  }
  return value
}
