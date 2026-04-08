'use client'

import {useEffect, useMemo, useState, useCallback, useRef} from 'react'
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

const SEARCH_TYPE_MAP: Record<string, string> = {
  default: 'default',
  entity: 'entity',
  object: 'object',
}

/* ── Facet Modal ── */
function FacetModal({
  field,
  label,
  searchType,
  onSelect,
  onClose,
}: {
  field: string
  label: string
  searchType: string
  onSelect: (value: string) => void
  onClose: () => void
}) {
  const [filter, setFilter] = useState('')
  const [values, setValues] = useState<{value: string; count: number}[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    setIsLoading(true)
    const params = new URLSearchParams()
    params.set('field', field)
    params.set('type', searchType === 'entity' ? 'entity' : searchType === 'object' ? 'object' : 'default')
    if (filter.trim()) params.set('q', filter.trim())
    params.set('limit', '200')

    fetch(`/api/facet-values?${params.toString()}`)
      .then((r) => r.json() as Promise<{values: {value: string; count: number}[]}>)
      .then((data) => {
        if (!cancelled) {
          setValues(data.values || [])
          setIsLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setValues([])
          setIsLoading(false)
        }
      })
    return () => { cancelled = true }
  }, [field, searchType, filter])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={(e) => { if (e.target === backdropRef.current) onClose() }}
    >
      <div
        className="w-full max-w-md rounded-2xl border p-5 shadow-xl"
        style={{borderColor: 'var(--border)', background: 'var(--background)'}}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{label}</h2>
          <button onClick={onClose} className="text-xl leading-none px-2">&times;</button>
        </div>
        <input
          autoFocus
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter..."
          className="mb-3 w-full rounded-full border px-4 py-2 text-sm outline-none"
          style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
        />
        <div className="max-h-80 overflow-y-auto">
          {isLoading ? (
            <div className="py-4 text-center text-sm text-stone-400">Loading...</div>
          ) : values.length === 0 ? (
            <div className="py-4 text-center text-sm text-stone-400">No values found</div>
          ) : (
            <ul className="space-y-0.5">
              {values.map(({value, count}) => (
                <li key={value}>
                  <button
                    type="button"
                    onClick={() => { onSelect(value); onClose() }}
                    className="flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1 text-sm text-left transition hover:bg-stone-100 dark:hover:bg-stone-800"
                  >
                    <span className="min-w-0 truncate">{formatLabel(value)}</span>
                    <span className="shrink-0 text-xs tabular-nums text-stone-400">{count}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Advanced Search Fields ── */
const ADVANCED_FIELDS = [
  {field: 'book', labelKey: 'book'},
  {field: 'tag', labelKey: 'tags'},
  {field: 'place', labelKey: 'places'},
  {field: 'agential', labelKey: 'people'},
  {field: 'keyword', labelKey: 'keywords'},
] as const

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
  const [totalCount, setTotalCount] = useState(0)
  const [facetCounts, setFacetCounts] = useState<Record<string, Record<string, number>>>({})
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState(urlQuery)
  const [facetModal, setFacetModal] = useState<{field: string; label: string} | null>(null)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [advancedFields, setAdvancedFields] = useState<Record<string, string>>({})

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

  // Sync advanced field values from URL
  useEffect(() => {
    if (!searchParams) return
    const fields: Record<string, string> = {}
    for (const [key, value] of searchParams.entries()) {
      if (key.startsWith('q-')) {
        fields[key.slice(2)] = value
        setShowAdvanced(true)
      }
    }
    setAdvancedFields(fields)
  }, [searchParams])

  // Fetch from API
  const fetchResults = useCallback(async () => {
    setIsLoading(true)
    const params = new URLSearchParams()
    params.set('type', SEARCH_TYPE_MAP[searchType] || 'default')
    if (urlQuery) params.set('q', urlQuery)
    params.set('sort', urlSort)
    params.set('page', String(urlPage))
    params.set('size', String(urlSize))

    // Add facet filters and field-specific queries
    if (searchParams) {
      for (const [key, value] of searchParams.entries()) {
        if (key.startsWith('fc-') || key.startsWith('q-')) {
          params.append(key, value)
        }
      }
    }

    try {
      const res = await fetch(`/api/search?${params.toString()}`)
      const data = await res.json() as {items: Item[]; total: number; facets: Record<string, Record<string, number>>}
      setItems(data.items || [])
      setTotalCount(data.total || 0)
      setFacetCounts(data.facets || {})
    } catch {
      setItems([])
      setTotalCount(0)
      setFacetCounts({})
    }
    setIsLoading(false)
  }, [searchType, urlQuery, urlSort, urlPage, urlSize, searchParams])

  useEffect(() => { fetchResults() }, [fetchResults])

  // Auto-save search history to localStorage
  useEffect(() => {
    if (!searchParams) return
    const keyword = searchParams.get('q') || ''
    const fcParams: Record<string, string[]> = {}
    for (const [key, value] of searchParams.entries()) {
      if (key.startsWith('fc-')) {
        const field = key.slice(3)
        if (!fcParams[field]) fcParams[field] = []
        fcParams[field].push(value)
      }
    }
    // Only save if there is a keyword or facet filter
    if (!keyword && Object.keys(fcParams).length === 0) return

    const q: Record<string, string | string[]> = {}
    if (keyword) q.keyword = keyword
    for (const [k, v] of Object.entries(fcParams)) {
      q[`fc-${k}`] = v.length === 1 ? v[0] : v
    }

    // Build human-readable label
    const parts: string[] = []
    if (keyword) parts.push(keyword)
    for (const [field, values] of Object.entries(fcParams)) {
      parts.push(`${field}: ${values.map(formatLabel).join(', ')}`)
    }
    const label = parts.join(' / ')

    const STORAGE_KEY = 'kunshujo-search-history'
    const MAX_ITEMS = 20
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      const history: {label: string; q: Record<string, string | string[]>}[] = raw ? JSON.parse(raw) : []
      const serialized = JSON.stringify(q)
      const filtered = history.filter((h) => JSON.stringify(h.q) !== serialized)
      filtered.unshift({label, q})
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered.slice(0, MAX_ITEMS)))
    } catch {
      // Ignore localStorage errors
    }
  }, [searchParams])

  // Pagination (now server-side)
  const totalPages = Math.max(1, Math.ceil(totalCount / urlSize))
  const currentPage = Math.min(urlPage, totalPages)

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
    setAdvancedFields({})
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

  // Search submit (includes advanced fields)
  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault()
    const overrides: Record<string, string | null> = {q: query.trim() || null}
    // Clear existing q-* params
    for (const f of ADVANCED_FIELDS) {
      overrides[`q-${f.field}`] = null
    }
    // Set new q-* params from advancedFields
    for (const [field, value] of Object.entries(advancedFields)) {
      if (value.trim()) overrides[`q-${field}`] = value.trim()
    }
    const qs = buildParams(overrides)
    router.push(qs ? `${pathname}?${qs}` : pathname)
  }

  // Handle facet selection from modal
  function handleFacetSelect(field: string, value: string) {
    const href = buildFacetHref(field, value, false)
    router.push(href)
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
      <form onSubmit={handleSearchSubmit} className="flex flex-col gap-3">
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
            type="submit"
            className="rounded-full border px-5 py-3 text-sm font-medium"
            style={{background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)'}}
          >
            {tSearch('queryLabel')}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full border px-5 py-3"
            style={selectStyle}
          >
            {tSearch('reset')}
          </button>
        </div>
      </form>

      {/* Advanced Search */}
      <div>
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-sm font-medium transition hover:underline"
          style={{color: 'var(--accent)'}}
        >
          {tSearch('advancedSearch')} {showAdvanced ? '\u25B2' : '\u25BC'}
        </button>
        {showAdvanced && (
          <div
            className="mt-3 rounded-2xl border p-4 space-y-3"
            style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {ADVANCED_FIELDS.map(({field, labelKey}) => (
                <div key={field}>
                  <label htmlFor={`adv-${field}`} className="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400">
                    {tSearch(labelKey as Parameters<typeof tSearch>[0])}
                  </label>
                  <input
                    id={`adv-${field}`}
                    value={advancedFields[field] || ''}
                    onChange={(e) => setAdvancedFields((prev) => ({...prev, [field]: e.target.value}))}
                    className="w-full rounded-full border px-4 py-2 text-sm outline-none"
                    style={{borderColor: 'var(--border)', background: 'var(--background)'}}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={(e) => handleSearchSubmit(e)}
                className="rounded-full border px-4 py-2 text-sm font-medium"
                style={{background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)'}}
              >
                {tSearch('queryLabel')}
              </button>
              <button
                type="button"
                onClick={() => {
                  setAdvancedFields({})
                  // Clear q-* params from URL
                  const overrides: Record<string, string | null> = {}
                  for (const f of ADVANCED_FIELDS) overrides[`q-${f.field}`] = null
                  const qs = buildParams(overrides)
                  router.push(qs ? `${pathname}?${qs}` : pathname)
                }}
                className="rounded-full border px-4 py-2 text-sm"
                style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
              >
                {tSearch('reset')}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Facet Modal */}
      {facetModal && (
        <FacetModal
          field={facetModal.field}
          label={facetModal.label}
          searchType={searchType}
          onSelect={(value) => handleFacetSelect(facetModal.field, value)}
          onClose={() => setFacetModal(null)}
        />
      )}

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
                {Object.keys(counts).length >= FACET_SHOW && (
                  <button
                    type="button"
                    onClick={() => setFacetModal({field, label: tSearch(agg.label as Parameters<typeof tSearch>[0])})}
                    className="mt-1 w-full text-center text-xs py-1 transition hover:underline"
                    style={{color: 'var(--accent)'}}
                  >
                    {tSearch('more')}
                  </button>
                )}
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
          {urlLayout === 'list' && items.map((item) => (
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
                {(() => {
                  const listFields = searchConfig.list || [{value: 'tag', max: 4}]
                  const firstField = listFields[0]
                  const restFields = listFields.slice(1)
                  return (
                    <>
                      {firstField && (
                        <p className="mt-3 text-sm leading-7 text-stone-700 dark:text-stone-300">
                          {((item as Record<string, unknown>)[firstField.value] as string[] || []).slice(0, firstField.max ?? 4).join(' / ') || item.objectID}
                        </p>
                      )}
                      {restFields.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 text-xs text-stone-600 dark:text-stone-400">
                          {restFields.flatMap((f) =>
                            ((item as Record<string, unknown>)[f.value] as string[] || []).slice(0, f.max ?? 2).map((value) => (
                              <span key={`${f.value}-${value}`} className="rounded-full border px-3 py-1" style={{borderColor: 'var(--border)'}}>
                                {value}
                              </span>
                            ))
                          )}
                        </div>
                      )}
                    </>
                  )
                })()}
              </div>
            </Link>
          ))}

          {/* Grid layout */}
          {urlLayout === 'grid' && (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {items.map((item) => (
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
