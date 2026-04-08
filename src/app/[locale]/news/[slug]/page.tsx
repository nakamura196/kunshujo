import {notFound} from 'next/navigation'
import {setRequestLocale} from 'next-intl/server'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import PageLayout from '@/components/layout/PageLayout'
import {Locale} from '@/constants/site'
import {routing} from '@/i18n/routing'
import {getNewsEntry, getNewsList} from '@/lib/site-data'

export const dynamicParams = true

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getNewsList(locale as Locale).map((entry) => ({locale, slug: entry.slug}))
  )
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{locale: string; slug: string}>
}) {
  const {locale, slug} = await params
  setRequestLocale(locale)
  const entry = getNewsEntry(locale as Locale, slug)

  if (!entry) {
    notFound()
  }

  return (
    <PageLayout title={entry.title} description={entry.date}>
      <article className="prose max-w-none prose-stone dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{entry.content}</ReactMarkdown>
      </article>
    </PageLayout>
  )
}
