'use client'

import {useEffect, useState} from 'react'

import {Link} from '@/i18n/routing'

type ExampleItem = {
  label: string
  description: string
  value: Array<{
    label: string
    image?: string
    value?: {
      name: string
      query: Record<string, string>
    }
  }>
}

function normalizeQuery(label: string) {
  return label.includes(':') ? label.split(':').slice(1).join(':') : label
}

export default function ExampleGrid() {
  const [items, setItems] = useState<ExampleItem[]>([])

  useEffect(() => {
    fetch('/data/example.json')
      .then((response) => response.json())
      .then((data: ExampleItem[]) => setItems(data))
      .catch(() => setItems([]))
  }, [])

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.label}
          className="rounded-[1.75rem] border p-6"
          style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
        >
          <h2 className="text-2xl font-semibold">{item.label}</h2>
          <p
            className="mt-3 text-sm leading-7 text-stone-700 dark:text-stone-300 [&_a]:underline [&_a]:text-stone-900 dark:[&_a]:text-stone-100"
            dangerouslySetInnerHTML={{__html: item.description}}
          />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {item.value.slice(0, 4).map((entry) => (
              <Link
                key={entry.label}
                href={{pathname: '/search', query: entry.value?.query ?? {q: normalizeQuery(entry.label)}}}
                className="overflow-hidden rounded-[1.2rem] border"
                style={{borderColor: 'var(--border)'}}
              >
                {entry.image ? (
                  <img
                    src={entry.image}
                    alt={normalizeQuery(entry.label)}
                    className="aspect-[4/3] w-full object-cover"
                  />
                ) : null}
                <div className="p-3 text-sm">{normalizeQuery(entry.label)}</div>
              </Link>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}
