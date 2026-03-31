'use client'

import {useEffect, useMemo, useState} from 'react'
import {useTranslations} from 'next-intl'
import {Link} from '@/i18n/routing'
import {SEARCHES} from '@/constants/search'

type BucketItem = {
  label: string
  value: number
  key: string
}

const PAGE_SIZE_OPTIONS = [20, 50, 100, -1] as const

export default function CategoryFieldClient({
  slug,
  field,
}: {
  slug: string
  field: string
}) {
  const t = useTranslations('Common')
  const tSearch = useTranslations('Search')
  const tCategory = useTranslations('Category')
  const [items, setItems] = useState<BucketItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [viewMode, setViewMode] = useState<'table' | 'chart'>('table')
  const [pageSize, setPageSize] = useState<number>(20)
  const [currentPage, setCurrentPage] = useState(1)

  const configKey = slug === 'item' ? 'default' : slug
  const config = SEARCHES[configKey]
  const searchSlug = slug === 'item' ? '' : slug

  useEffect(() => {
    if (!config) return
    let mounted = true

    fetch(config.index)
      .then((res) => res.json())
      .then((data: Record<string, unknown>[]) => {
        if (!mounted) return

        const counts: Record<string, number> = {}
        for (const item of data) {
          const fieldValues = item[field]
          if (!Array.isArray(fieldValues)) continue
          for (const val of fieldValues) {
            if (!val) continue
            const key = String(val)
            counts[key] = (counts[key] || 0) + 1
          }
        }

        const buckets: BucketItem[] = Object.entries(counts)
          .map(([key, count]) => ({
            label: formatLabel(key),
            value: count,
            key,
          }))
          .sort((a, b) => b.value - a.value)

        setItems(buckets)
        setIsLoading(false)
      })
      .catch(() => {
        if (mounted) setIsLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [config, field])

  const filteredItems = useMemo(() => {
    if (!search.trim()) return items
    const q = search.trim().toLowerCase()
    return items.filter((item) => item.label.toLowerCase().includes(q))
  }, [items, search])

  // Reset to page 1 when search or pageSize changes
  useEffect(() => {
    setCurrentPage(1)
  }, [search, pageSize])

  const totalItems = filteredItems.length
  const totalPages = pageSize === -1 ? 1 : Math.max(1, Math.ceil(totalItems / pageSize))
  const safeCurrentPage = Math.min(currentPage, totalPages)

  const paginatedItems = useMemo(() => {
    if (pageSize === -1) return filteredItems
    const start = (safeCurrentPage - 1) * pageSize
    return filteredItems.slice(start, start + pageSize)
  }, [filteredItems, safeCurrentPage, pageSize])

  const rangeStart = totalItems === 0 ? 0 : (safeCurrentPage - 1) * (pageSize === -1 ? totalItems : pageSize) + 1
  const rangeEnd = pageSize === -1 ? totalItems : Math.min(safeCurrentPage * pageSize, totalItems)

  const maxValue = useMemo(
    () => Math.max(...filteredItems.map((item) => item.value), 1),
    [filteredItems]
  )

  if (!config) return null

  const aggLabel = config.aggs[field]?.label || field

  // Build tabs from aggs config
  const tabs = Object.entries(config.aggs)
    .filter(([, agg]) => !agg.hide)
    .map(([key, agg]) => ({
      key,
      label: agg.label,
      href: `/category/${slug}/${key}` as const,
    }))

  if (isLoading) {
    return (
      <div className="space-y-4 text-center">
        <div className="animate-pulse text-sm text-stone-500">
          {t('loading')}
        </div>
        <p className="text-sm text-stone-400">{t('loadingIndexMessage')}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <Link
            key={tab.key}
            href={tab.href}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              tab.key === field ? 'font-bold' : ''
            }`}
            style={{
              borderColor: 'var(--border)',
              background: tab.key === field ? 'var(--panel-strong)' : 'var(--panel)',
            }}
          >
            {tSearch(tab.label as 'people')}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">{tSearch(aggLabel as 'people')}</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setViewMode('table')}
            className={`rounded-full border px-4 py-2 text-sm ${viewMode === 'table' ? 'font-bold' : ''}`}
            style={{borderColor: 'var(--border)', background: viewMode === 'table' ? 'var(--panel-strong)' : 'var(--panel)'}}
          >
            {tCategory('tableView')}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('chart')}
            className={`rounded-full border px-4 py-2 text-sm ${viewMode === 'chart' ? 'font-bold' : ''}`}
            style={{borderColor: 'var(--border)', background: viewMode === 'chart' ? 'var(--panel-strong)' : 'var(--panel)'}}
          >
            {tCategory('chartView')}
          </button>
        </div>
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={t('inputSearchKeyword')}
        className="w-full rounded-full border px-5 py-3 outline-none"
        style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
      />

      {/* Pagination controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span>{tCategory('itemsPerPage')}:</span>
          {PAGE_SIZE_OPTIONS.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setPageSize(size)}
              className={`rounded-full border px-3 py-1 text-sm ${pageSize === size ? 'font-bold' : ''}`}
              style={{
                borderColor: 'var(--border)',
                background: pageSize === size ? 'var(--panel-strong)' : 'var(--panel)',
              }}
            >
              {size === -1 ? tCategory('all') : size}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-stone-500">
            {rangeStart}–{rangeEnd} / {totalItems}
          </span>
          <button
            type="button"
            disabled={safeCurrentPage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="rounded-full border px-3 py-1 text-sm disabled:opacity-40"
            style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
          >
            {tSearch('prevPage')}
          </button>
          <button
            type="button"
            disabled={safeCurrentPage >= totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-full border px-3 py-1 text-sm disabled:opacity-40"
            style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
          >
            {tSearch('nextPage')}
          </button>
        </div>
      </div>

      {viewMode === 'table' ? (
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b" style={{borderColor: 'var(--border)'}}>
              <th className="py-3 text-left">{t('name')}</th>
              <th className="py-3 text-right">{t('results')}</th>
            </tr>
          </thead>
          <tbody>
            {paginatedItems.map((item) => (
              <tr
                key={item.key}
                className="border-b"
                style={{borderColor: 'var(--border)'}}
              >
                <td className="py-3">
                  <Link
                    href={searchSlug ? `/search?fc-${field}=${item.key}` : `/search?fc-${field}=${item.key}`}
                    className="underline"
                  >
                    {item.label}
                  </Link>
                </td>
                <td className="py-3 text-right">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="space-y-2">
          {paginatedItems.slice(0, 50).map((item) => (
            <div key={item.key} className="flex items-center gap-3">
              <div className="w-28 shrink-0 truncate text-xs">
                {item.label}
              </div>
              <div className="flex-1">
                <div
                  className="h-6 rounded"
                  style={{
                    width: `${(item.value / maxValue) * 100}%`,
                    background: 'var(--accent)',
                    minWidth: 4,
                  }}
                />
              </div>
              <div className="w-12 shrink-0 text-right text-xs">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function formatLabel(value: string) {
  if (value.includes(':')) {
    return value.split(':')[1]
  }
  return value
}
