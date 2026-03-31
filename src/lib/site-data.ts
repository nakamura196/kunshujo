import fs from 'node:fs'
import path from 'node:path'

import matter from 'gray-matter'

import type {Locale} from '@/constants/site'

type Frontmatter = {
  title?: string
  description?: string
  date?: string | Date
}

export type MarkdownEntry = {
  slug: string
  title: string
  description?: string
  date?: string
  content: string
}

export type Item = {
  _updated?: string
  agential?: string[]
  book?: string[]
  color?: string[]
  description?: string[]
  keyword?: string[]
  label?: string
  license?: string
  manifest?: string
  member?: string
  mtag?: string[]
  objectID: string
  org?: string[]
  place?: string[]
  tag?: string[]
  thumbnail?: string
  time?: string[]
  [key: string]: unknown
}

const rootDir = process.cwd()

let itemsCache: Item[] | null = null

function getItems(): Item[] {
  if (!itemsCache) {
    const filePath = path.join(rootDir, 'public', 'data', 'index.json')
    itemsCache = JSON.parse(fs.readFileSync(filePath, 'utf8')) as Item[]
  }
  return itemsCache
}

export function getAllItemIds(): string[] {
  return getItems().map((item) => item.objectID)
}

export function getItemById(id: string): Item | null {
  return getItems().find((item) => item.objectID === id) ?? null
}

export type SiteConfig = {
  lang: string
  siteName: string
  siteDesc: string
  footer: string
  siteKeywords: string
  shortName: string
}

export function getSiteConfig(): SiteConfig {
  const filePath = path.join(rootDir, 'static', 'data', 'conf.json')
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as SiteConfig
}

export function getPageContent(slug: string): MarkdownEntry | null {
  const filePath = path.join(rootDir, 'content', 'page', `${slug}.md`)
  if (!fs.existsSync(filePath)) {
    return null
  }

  return parseMarkdownFile(filePath, slug)
}

export function getNewsList(locale: Locale): MarkdownEntry[] {
  const dirPath =
    locale === 'en'
      ? path.join(rootDir, 'content', 'en', 'news')
      : path.join(rootDir, 'content', 'news')

  if (!fs.existsSync(dirPath)) {
    return []
  }

  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      return parseMarkdownFile(path.join(dirPath, file), slug)
    })
    .sort((a, b) => (a.date && b.date ? b.date.localeCompare(a.date) : 0))
}

export function getNewsEntry(
  locale: Locale,
  slug: string
): MarkdownEntry | null {
  const dirPath =
    locale === 'en'
      ? path.join(rootDir, 'content', 'en', 'news')
      : path.join(rootDir, 'content', 'news')
  const filePath = path.join(dirPath, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  return parseMarkdownFile(filePath, slug)
}

function parseMarkdownFile(filePath: string, slug: string): MarkdownEntry {
  const raw = fs.readFileSync(filePath, 'utf8')
  const {data, content} = matter(raw)
  const frontmatter = data as Frontmatter
  const normalizedDate =
    typeof frontmatter.date === 'string'
      ? frontmatter.date
      : frontmatter.date instanceof Date
        ? frontmatter.date.toISOString().slice(0, 10)
        : undefined

  return {
    slug,
    title: frontmatter.title || slug,
    description: frontmatter.description,
    date: normalizedDate,
    content: content.trim(),
  }
}
