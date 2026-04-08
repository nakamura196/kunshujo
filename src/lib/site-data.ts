import type {Locale} from '@/constants/site'

import pagesData from '@/generated/pages.json'
import newsJaData from '@/generated/news-ja.json'
import newsEnData from '@/generated/news-en.json'

export type MarkdownEntry = {
  slug: string
  title: string
  description?: string
  date?: string
  content: string
}

const pages = pagesData as Record<string, MarkdownEntry>
const newsJa = newsJaData as MarkdownEntry[]
const newsEn = newsEnData as MarkdownEntry[]

export function getPageContent(slug: string): MarkdownEntry | null {
  return pages[slug] || null
}

export function getNewsList(locale: Locale): MarkdownEntry[] {
  return locale === 'en' ? newsEn : newsJa
}

export function getNewsEntry(
  locale: Locale,
  slug: string
): MarkdownEntry | null {
  const list = locale === 'en' ? newsEn : newsJa
  return list.find((entry) => entry.slug === slug) || null
}
