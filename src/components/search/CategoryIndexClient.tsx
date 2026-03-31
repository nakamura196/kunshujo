'use client'

import {useTranslations} from 'next-intl'
import {Link} from '@/i18n/routing'
import {SEARCHES} from '@/constants/search'

export default function CategoryIndexClient({slug}: {slug: string}) {
  const tSearch = useTranslations('Search')
  const tCategory = useTranslations('Category')

  const configKey = slug === 'item' ? 'default' : slug
  const config = SEARCHES[configKey]

  if (!config) {
    return <div>{tCategory('title')}</div>
  }

  const aggs = config.aggs

  return (
    <div className="space-y-4">
      <table className="w-full">
        <thead>
          <tr className="border-b" style={{borderColor: 'var(--border)'}}>
            <th className="py-3 text-left text-sm font-medium text-stone-500 dark:text-stone-400">
              {tSearch('metadata')}
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(aggs)
            .filter(([, agg]) => !agg.hide)
            .map(([key, agg]) => (
              <tr
                key={key}
                className="border-b"
                style={{borderColor: 'var(--border)'}}
              >
                <td className="py-4">
                  <Link
                    href={`/category/${slug}/${key}`}
                    className="underline"
                  >
                    {tSearch(agg.label as 'people')}
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
