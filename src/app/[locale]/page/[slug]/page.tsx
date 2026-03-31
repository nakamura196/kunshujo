import {notFound} from 'next/navigation'
import {setRequestLocale} from 'next-intl/server'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import PageLayout from '@/components/layout/PageLayout'
import {STATIC_PAGES} from '@/constants/site'
import {routing} from '@/i18n/routing'
import {getPageContent} from '@/lib/site-data'

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    STATIC_PAGES.map((slug) => ({locale, slug}))
  )
}

export default async function StaticPage({
  params,
}: {
  params: Promise<{locale: string; slug: string}>
}) {
  const {locale, slug} = await params
  setRequestLocale(locale)
  const entry = getPageContent(slug)

  if (!entry) {
    notFound()
  }

  return (
    <PageLayout title={entry.title} description={entry.description}>
      <article className="prose max-w-none prose-stone dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{entry.content}</ReactMarkdown>
      </article>
    </PageLayout>
  )
}
