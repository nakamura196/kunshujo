'use client'

import {useDeferredValue, useEffect, useMemo, useState} from 'react'
import {useTranslations} from 'next-intl'
import {useSearchParams} from 'next/navigation'

import {Link, usePathname, useRouter} from '@/i18n/routing'
import {SEARCHES} from '@/constants/search'

type Item = {
  _updated?: string
  agential?: string[]
  book?: string[]
  color?: string[]
  index?: string[]
  keyword?: string[]
  label?: string
  manifest?: string
  member?: string
  mtag?: string[]
  objectID: string
  org?: string[]
  place?: string[]
  tag?: string[]
  thumbnail?: string
  time?: string[]
}

const DEFAULT_SIZE = 24
const SIZE_OPTIONS = [24, 60, 120, 512]
const FACET_SHOW = 8

const SORT_OPTIONS = [
  {value: 'index:asc',     labelKey: 'sortIndexAsc'    },
  {value: 'index:desc',    labelKey: 'sortIndexDesc'   },
  {value: 'label:asc',     labelKey: 'sortLabelAsc'    },
  {value: '_updated:desc', labelKey: 'sortUpdatedDesc' },
  {value: '_updated:asc',  labelKey: 'sortUpdatedAsc'  },
] as const

function formatLabel(value: string) {
  return value.includes(':') ? value.split(':').slice(1).join(':') : value
}

export default function SearchExplorer({searchType = 'default'}: {searchType?: string}) {
  const searchConfig = SEARCHES[searchType] || SEARCHES.default
  const FACET_FIELDS = Object.keys(searchConfig.aggs)
  const tCommon = useTranslations('Common')
  const tSearch = useTranslations('Search')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const urlQuery   = searchParams?.get('q')    || ''
  const urlLayout  = (() => {
    const l = searchParams?.get('layout') || 'list'
    return ['list', 'grid', 'graph'].includes(l) ? l : 'list'
  })()
  const urlSort    = searchParams?.get('sort')  || 'index:asc'
  const urlPage    = Math.max(1, parseInt(searchParams?.get('page') || '1', 10))
  const urlSize    = (() => {
    const s = parseInt(searchParams?.get('size') || String(DEFAULT_SIZE), 10)
    return SIZE_OPTIONS.includes(s) ? s : DEFAULT_SIZE
  })()

  const [items, setItems] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState(urlQuery)
  const deferredQuery = useDeferredValue(query)

  // Parse fc-* facet filters from URL
  const activeFacets = useMemo(() => {
    const facets: Record<string, string[]> = {}
    if (!searchParams) return facets
    for (const [key, value] of searchParams.entries()) {
      if (key.startsWith('fc-')) {
        const field = key.slice(3)
        if (!facets[field]) facets[field] = []
        facets[field].push(value)
      }
    }
    return facets
  }, [searchParams])

  useEffect(() => { setQuery(urlQuery) }, [urlQuery])

  useEffect(() => {
    let mounted = true
    fetch(searchConfig.index)
      .then((r) => r.json())
      .then((data: Item[]) => { if (mounted) { setItems(data); setIsLoading(false) } })
      .catch(() => { if (mounted) { setItems([]); setIsLoading(false) } })
    return () => { mounted = false }
  }, [searchConfig.index])

  // 1. Text filter
  const textFilteredItems = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase()
    if (!normalized) return items
    return items.filter((item) => {
      const target = [
        item.label,
        ...(item.tag || []),
        ...(item.book || []),
        ...(item.place || []),
        ...(item.agential || []),
        ...(item.org || []),
        ...(item.keyword || []),
        ...(item.color || []),
        ...(item.mtag || []),
        ...(item.time || []),
      ].filter(Boolean).join(' ').toLowerCase()
      return target.includes(normalized)
    })
  }, [deferredQuery, items])

  // 2. Facet filter (OR within facet, AND across facets)
  const fullyFilteredItems = useMemo(() => {
    let result = textFilteredItems
    for (const [field, values] of Object.entries(activeFacets)) {
      result = result.filter((item) => {
        const itemValues = (item[field as keyof Item] as string[] | undefined) || []
        return values.some((v) => itemValues.includes(v))
      })
    }
    return result
  }, [textFilteredItems, activeFacets])

  // 3. Sort
  const sortedItems = useMemo(() => {
    const [field, dir] = urlSort.split(':')
    if (!field || field === 'index' && !dir) return fullyFilteredItems
    return [...fullyFilteredItems].sort((a, b) => {
      let av: string
      let bv: string
      if (field === 'index') {
        av = a.index?.[0] ?? ''
        bv = b.index?.[0] ?? ''
      } else if (field === 'label') {
        av = a.label ?? ''
        bv = b.label ?? ''
      } else if (field === '_updated') {
        av = a._updated ?? ''
        bv = b._updated ?? ''
      } else {
        return 0
      }
      const cmp = av.localeCompare(bv, undefined, {numeric: true})
      return dir === 'desc' ? -cmp : cmp
    })
  }, [fullyFilteredItems, urlSort])

  // 4. Pagination
  const totalCount = sortedItems.length
  const totalPages = Math.max(1, Math.ceil(totalCount / urlSize))
  const currentPage = Math.min(urlPage, totalPages)
  const pagedItems = useMemo(
    () => sortedItems.slice((currentPage - 1) * urlSize, currentPage * urlSize),
    [sortedItems, currentPage, urlSize]
  )

  // Facet counts: count values within fully-filtered results.
  const facetCounts = useMemo(() => {
    const counts: Record<string, Record<string, number>> = {}
    for (const field of FACET_FIELDS) {
      counts[field] = {}
      for (const item of fullyFilteredItems) {
        const values = (item[field as keyof Item] as string[] | undefined) || []
        for (const value of values) {
          counts[field][value] = (counts[field][value] || 0) + 1
        }
      }
    }
    return counts
  }, [fullyFilteredItems, FACET_FIELDS])

  // URL builders — all reset page to 1
  function buildParams(overrides: Record<string, string | null>): string {
    const params = new URLSearchParams(searchParams?.toString() || '')
    params.delete('page')
    for (const [k, v] of Object.entries(overrides)) {
      if (v === null) params.delete(k)
      else params.set(k, v)
    }
    return params.toString()
  }

  function buildFacetHref(field: string, value: string, remove: boolean): string {
    const params = new URLSearchParams(searchParams?.toString() || '')
    params.delete('page')
    const key = `fc-${field}`
    if (remove) {
      const existing = params.getAll(key).filter((v) => v !== value)
      params.delete(key)
      for (const v of existing) params.append(key, v)
    } else {
      params.append(key, value)
    }
    const qs = params.toString()
    return qs ? `${pathname}?${qs}` : pathname
  }

  function buildPageHref(page: number): string {
    const params = new URLSearchParams(searchParams?.toString() || '')
    if (page === 1) params.delete('page')
    else params.set('page', String(page))
    const qs = params.toString()
    return qs ? `${pathname}?${qs}` : pathname
  }

  function handleReset() {
    setQuery('')
    router.push(pathname)
  }

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const qs = buildParams({sort: e.target.value === 'index:asc' ? null : e.target.value})
    router.push(qs ? `${pathname}?${qs}` : pathname)
  }

  function handleSizeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const qs = buildParams({size: e.target.value === String(DEFAULT_SIZE) ? null : e.target.value})
    router.push(qs ? `${pathname}?${qs}` : pathname)
  }

  function handleLayoutChange(layout: string) {
    const qs = buildParams({layout: layout === 'list' ? null : layout})
    router.push(qs ? `${pathname}?${qs}` : pathname)
  }

  // Compact page range: always show first, last, and up to 3 around current
  const pageRange = useMemo(() => {
    if (totalPages <= 7) return Array.from({length: totalPages}, (_, i) => i + 1)
    const pages: (number | '…')[] = []
    const add = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1].filter(p => p >= 1 && p <= totalPages))
    let prev = 0
    for (const p of [...add].sort((a, b) => a - b)) {
      if (p - prev > 1) pages.push('…')
      pages.push(p)
      prev = p
    }
    return pages
  }, [totalPages, currentPage])

  const selectClass = "rounded-full border px-4 py-2 text-sm outline-none"
  const selectStyle = {borderColor: 'var(--border)', background: 'var(--panel)'}

  return (
    <div className="space-y-6">
      {/* Search input */}
      <div className="flex flex-col gap-3">
        <label htmlFor="search-query" className="text-sm font-medium">
          {tSearch('queryLabel')}
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="search-query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={tCommon('searchPlaceholder')}
            className="min-w-0 flex-1 rounded-full border px-5 py-3 outline-none"
            style={selectStyle}
          />
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full border px-5 py-3"
            style={selectStyle}
          >
            {tSearch('reset')}
          </button>
        </div>
      </div>

      {/* Active facet chips */}
      {Object.keys(activeFacets).length > 0 && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(activeFacets).flatMap(([field, values]) =>
            values.map((value) => (
              <Link
                key={`${field}-${value}`}
                href={buildFacetHref(field, value, true)}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm"
                style={{borderColor: 'var(--accent)', background: 'var(--panel)', color: 'var(--accent)'}}
              >
                <span>{formatLabel(value)}</span>
                <span aria-hidden>×</span>
              </Link>
            ))
          )}
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        {/* Facet sidebar */}
        <aside className="space-y-3">
          {FACET_FIELDS.map((field) => {
            const agg = searchConfig.aggs[field]
            if (!agg) return null
            const counts = facetCounts[field] || {}
            const activeValues = activeFacets[field] || []
            const sortedValues = Object.entries(counts)
              .sort((a, b) => b[1] - a[1])
              .slice(0, FACET_SHOW)
            if (sortedValues.length === 0 && activeValues.length === 0) return null

            return (
              <div
                key={field}
                className="rounded-2xl border p-4"
                style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
              >
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
                  {tSearch(agg.label as Parameters<typeof tSearch>[0])}
                </h3>
                <ul className="space-y-0.5">
                  {sortedValues.map(([value, count]) => {
                    const isActive = activeValues.includes(value)
                    return (
                      <li key={value}>
                        <Link
                          href={buildFacetHref(field, value, isActive)}
                          className="flex items-center justify-between gap-2 rounded-lg px-2 py-1 text-sm transition hover:bg-stone-100 dark:hover:bg-stone-800"
                          style={isActive ? {color: 'var(--accent)', fontWeight: 600} : {}}
                        >
                          <span className="min-w-0 truncate">{formatLabel(value)}</span>
                          <span className="shrink-0 text-xs tabular-nums text-stone-400">{count}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </aside>

        {/* Results */}
        <div className="space-y-4">
          {/* Toolbar: count + sort + size */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-stone-700 dark:text-stone-300">
              {isLoading ? tCommon('loading') : tSearch('results', {count: totalCount})}
            </div>
            {!isLoading && totalCount > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center rounded-full border" style={{borderColor: 'var(--border)', background: 'var(--panel)'}} role="group" aria-label={tSearch('layoutLabel')}>
                  {(['list', 'grid', 'graph'] as const).map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => handleLayoutChange(l)}
                      className="px-3 py-2 text-sm first:rounded-l-full last:rounded-r-full"
                      style={urlLayout === l ? {background: 'var(--accent)', color: '#fff', fontWeight: 600} : {}}
                      aria-pressed={urlLayout === l}
                    >
                      {tSearch(l === 'list' ? 'layoutList' : l === 'grid' ? 'layoutGrid' : 'layoutGraph')}
                    </button>
                  ))}
                </div>
                <select
                  value={urlSort}
                  onChange={handleSortChange}
                  className={selectClass}
                  style={selectStyle}
                  aria-label={tSearch('sortLabel')}
                >
                  {SORT_OPTIONS.map(({value, labelKey}) => (
                    <option key={value} value={value}>
                      {tSearch(labelKey)}
                    </option>
                  ))}
                </select>
                <select
                  value={urlSize}
                  onChange={handleSizeChange}
                  className={selectClass}
                  style={selectStyle}
                  aria-label={tSearch('sizeLabel')}
                >
                  {SIZE_OPTIONS.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {!isLoading && totalCount === 0 && (
            <div
              className="rounded-3xl border px-6 py-10 text-center"
              style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
            >
              {tCommon('noResults')}
            </div>
          )}

          {/* List layout */}
          {urlLayout === 'list' && pagedItems.map((item) => (
            <Link
              key={item.objectID}
              href={`/${searchType === 'entity' ? 'entity' : searchType === 'object' ? 'object' : 'item'}/${item.objectID}`}
              className="grid gap-5 rounded-[1.75rem] border p-4 transition sm:grid-cols-[180px_1fr]"
              style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-stone-200 dark:bg-stone-800 flex items-center justify-center p-2">
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.label || tCommon('thumbnailAlt')}
                    className="h-full w-full object-contain"
                  />
                ) : null}
              </div>
              <div className="min-w-0">
                <h2 className="text-xl font-semibold">{item.label || item.objectID}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-700 dark:text-stone-300">
                  {(item.tag || []).slice(0, 4).join(' / ') || item.objectID}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-stone-600 dark:text-stone-400">
                  {(item.book || []).slice(0, 1).map((value) => (
                    <span key={value} className="rounded-full border px-3 py-1" style={{borderColor: 'var(--border)'}}>
                      {value}
                    </span>
                  ))}
                  {(item.place || []).slice(0, 2).map((value) => (
                    <span key={value} className="rounded-full border px-3 py-1" style={{borderColor: 'var(--border)'}}>
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}

          {/* Grid layout */}
          {urlLayout === 'grid' && (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {pagedItems.map((item) => (
                <Link
                  key={item.objectID}
                  href={`/${searchType === 'entity' ? 'entity' : searchType === 'object' ? 'object' : 'item'}/${item.objectID}`}
                  className="rounded-2xl border p-3 transition hover:shadow-md"
                  style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-stone-200 dark:bg-stone-800 flex items-center justify-center p-1">
                    {item.thumbnail ? (
                      <img
                        src={item.thumbnail}
                        alt={item.label || tCommon('thumbnailAlt')}
                        className="h-full w-full object-contain"
                      />
                    ) : null}
                  </div>
                  <h2 className="mt-2 text-sm font-semibold line-clamp-2">{item.label || item.objectID}</h2>
                  <p className="mt-1 text-xs text-stone-500 dark:text-stone-400 line-clamp-1">
                    {(item.tag || []).slice(0, 2).join(' / ') || item.objectID}
                  </p>
                </Link>
              ))}
            </div>
          )}

          {/* Graph layout */}
          {urlLayout === 'graph' && (
            <div className="space-y-6">
              {FACET_FIELDS.map((field) => {
                const agg = searchConfig.aggs[field]
                if (!agg) return null
                const counts = facetCounts[field] || {}
                const sortedValues = Object.entries(counts)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 20)
                if (sortedValues.length === 0) return null
                const maxCount = sortedValues[0]?.[1] || 1

                return (
                  <div
                    key={field}
                    className="rounded-2xl border p-5"
                    style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
                  >
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
                      {tSearch(agg.label as Parameters<typeof tSearch>[0])}
                    </h3>
                    <div className="space-y-1.5">
                      {sortedValues.map(([value, count]) => (
                        <div key={value} className="flex items-center gap-3 text-sm">
                          <span className="w-32 shrink-0 truncate text-right text-xs text-stone-600 dark:text-stone-400">
                            {formatLabel(value)}
                          </span>
                          <div className="flex-1 h-5 rounded bg-stone-100 dark:bg-stone-800 overflow-hidden">
                            <div
                              className="h-full rounded"
                              style={{
                                width: `${Math.max(2, (count / maxCount) * 100)}%`,
                                background: 'var(--accent)',
                                opacity: 0.75,
                              }}
                            />
                          </div>
                          <span className="w-12 shrink-0 text-xs tabular-nums text-stone-500">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Pagination */}
          {urlLayout !== 'graph' && totalPages > 1 && (
            <nav className="flex items-center justify-center gap-1 pt-4">
              {currentPage > 1 ? (
                <Link
                  href={buildPageHref(currentPage - 1)}
                  className="rounded-full border px-4 py-2 text-sm"
                  style={selectStyle}
                >
                  {tSearch('prevPage')}
                </Link>
              ) : (
                <span className="rounded-full border px-4 py-2 text-sm opacity-30" style={selectStyle}>
                  {tSearch('prevPage')}
                </span>
              )}

              {pageRange.map((p, i) =>
                p === '…' ? (
                  <span key={`ellipsis-${i}`} className="px-2 text-sm text-stone-400">…</span>
                ) : (
                  <Link
                    key={p}
                    href={buildPageHref(p)}
                    className="rounded-full border px-3 py-2 text-sm min-w-[2.5rem] text-center"
                    style={p === currentPage
                      ? {borderColor: 'var(--accent)', color: 'var(--accent)', background: 'var(--panel)', fontWeight: 600}
                      : selectStyle}
                  >
                    {p}
                  </Link>
                )
              )}

              {currentPage < totalPages ? (
                <Link
                  href={buildPageHref(currentPage + 1)}
                  className="rounded-full border px-4 py-2 text-sm"
                  style={selectStyle}
                >
                  {tSearch('nextPage')}
                </Link>
              ) : (
                <span className="rounded-full border px-4 py-2 text-sm opacity-30" style={selectStyle}>
                  {tSearch('nextPage')}
                </span>
              )}
            </nav>
          )}
        </div>
      </div>
    </div>
  )
}
