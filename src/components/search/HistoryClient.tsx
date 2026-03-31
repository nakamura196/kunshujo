'use client'

import {useEffect, useState} from 'react'
import {useTranslations} from 'next-intl'
import {Link} from '@/i18n/routing'

type HistoryEntry = {
  label?: string
  q: Record<string, string | string[]>
}

const STORAGE_KEY = 'kunshujo-search-history'

export default function HistoryClient() {
  const t = useTranslations('History')
  const [items, setItems] = useState<HistoryEntry[]>([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setItems(JSON.parse(stored))
      }
    } catch {
      // ignore
    }
  }, [])

  function clearHistory() {
    localStorage.removeItem(STORAGE_KEY)
    setItems([])
  }

  function getSearchUrl(query: Record<string, string | string[]>) {
    const params = new URLSearchParams()
    for (const [key, val] of Object.entries(query)) {
      const values = Array.isArray(val) ? val : [val]
      for (const v of values) {
        params.append(key, v)
      }
    }
    return `/search?${params.toString()}`
  }

  function getText(query: Record<string, string | string[]>) {
    const parts: string[] = []

    if (query.keyword) {
      const kw = Array.isArray(query.keyword) ? query.keyword : [query.keyword]
      parts.push(kw.join(' '))
    }

    for (const [key, val] of Object.entries(query)) {
      if (key.startsWith('fc-') || key.startsWith('q-')) {
        const values = Array.isArray(val) ? val : [val]
        const label = key.replace('fc-', '').replace('q-', '')
        parts.push(`${label}: ${values.join(', ')}`)
      }
    }

    return parts.join(' ') || t('allItems')
  }

  if (items.length === 0) {
    return (
      <div className="text-center text-sm text-stone-500 dark:text-stone-400">
        {t('noHistory')}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-stone-500 dark:text-stone-400">
          {t('recentSearches')}
        </h2>
        <button
          type="button"
          onClick={clearHistory}
          className="rounded-full border px-4 py-2 text-sm"
          style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
        >
          {t('clearHistory')}
        </button>
      </div>
      <div className="divide-y" style={{borderColor: 'var(--border)'}}>
        {items.map((item, i) => (
          <Link
            key={i}
            href={getSearchUrl(item.q)}
            className="block py-4 transition hover:opacity-70"
          >
            {getText(item.q)}
          </Link>
        ))}
      </div>
    </div>
  )
}
