#!/usr/bin/env node
/**
 * Pre-build: convert Markdown content files to JSON for Cloudflare Workers compatibility.
 * Workers can't use readFileSync, so we bundle content as static JSON.
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const ROOT = process.cwd()
const OUT = join(ROOT, 'src/generated')

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true })

// Pages
const pagesDir = join(ROOT, 'content/page')
const pages = {}
for (const file of readdirSync(pagesDir).filter(f => f.endsWith('.md'))) {
  const slug = file.replace(/\.md$/, '')
  const raw = readFileSync(join(pagesDir, file), 'utf8')
  const { data, content } = matter(raw)
  pages[slug] = {
    slug,
    title: data.title || slug,
    description: data.description || '',
    content: content.trim(),
  }
}
writeFileSync(join(OUT, 'pages.json'), JSON.stringify(pages))
console.log(`Pages: ${Object.keys(pages).length}`)

// News (ja)
const newsJaDir = join(ROOT, 'content/news')
const newsJa = []
if (existsSync(newsJaDir)) {
  for (const file of readdirSync(newsJaDir).filter(f => f.endsWith('.md'))) {
    const slug = file.replace(/\.md$/, '')
    const raw = readFileSync(join(newsJaDir, file), 'utf8')
    const { data, content } = matter(raw)
    const date = typeof data.date === 'string' ? data.date :
      data.date instanceof Date ? data.date.toISOString().slice(0, 10) : undefined
    newsJa.push({ slug, title: data.title || slug, description: data.description, date, content: content.trim() })
  }
}
newsJa.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
writeFileSync(join(OUT, 'news-ja.json'), JSON.stringify(newsJa))

// News (en)
const newsEnDir = join(ROOT, 'content/en/news')
const newsEn = []
if (existsSync(newsEnDir)) {
  for (const file of readdirSync(newsEnDir).filter(f => f.endsWith('.md'))) {
    const slug = file.replace(/\.md$/, '')
    const raw = readFileSync(join(newsEnDir, file), 'utf8')
    const { data, content } = matter(raw)
    const date = typeof data.date === 'string' ? data.date :
      data.date instanceof Date ? data.date.toISOString().slice(0, 10) : undefined
    newsEn.push({ slug, title: data.title || slug, description: data.description, date, content: content.trim() })
  }
}
newsEn.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
writeFileSync(join(OUT, 'news-en.json'), JSON.stringify(newsEn))

console.log(`News: ja=${newsJa.length}, en=${newsEn.length}`)
console.log('Content prebuild complete')
