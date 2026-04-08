import { NextRequest, NextResponse } from 'next/server'
import { getDB } from '@/lib/d1'

type SearchType = 'default' | 'entity' | 'object'

const TABLES: Record<SearchType, string> = {
  default: 'item_values',
  entity: 'entity_values',
  object: 'object_values',
}

export async function GET(request: NextRequest) {
  const db = await getDB()
  const url = new URL(request.url)

  const type = (url.searchParams.get('type') || 'default') as SearchType
  const field = url.searchParams.get('field') || ''
  const q = url.searchParams.get('q')?.trim().toLowerCase() || ''
  const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10))
  const size = parseInt(url.searchParams.get('size') || '20', 10)

  const table = TABLES[type] || TABLES.default

  if (!field) {
    return NextResponse.json({ error: 'field is required' }, { status: 400 })
  }

  // Count and aggregate
  let countQuery: string
  let dataQuery: string
  const params: unknown[] = [field]

  if (q) {
    countQuery = `SELECT COUNT(DISTINCT value) as total FROM ${table} WHERE field = ? AND LOWER(value) LIKE ?`
    dataQuery = `SELECT value, COUNT(*) as cnt FROM ${table} WHERE field = ? AND LOWER(value) LIKE ? GROUP BY value ORDER BY cnt DESC`
    params.push(`%${q}%`)
  } else {
    countQuery = `SELECT COUNT(DISTINCT value) as total FROM ${table} WHERE field = ?`
    dataQuery = `SELECT value, COUNT(*) as cnt FROM ${table} WHERE field = ? GROUP BY value ORDER BY cnt DESC`
  }

  const countResult = await db.prepare(countQuery).bind(...params).first<{ total: number }>()
  const total = countResult?.total || 0

  if (size > 0) {
    const offset = (page - 1) * size
    dataQuery += ' LIMIT ? OFFSET ?'
    const dataResult = await db.prepare(dataQuery).bind(...params, size, offset).all()
    return NextResponse.json({
      items: (dataResult.results || []).map((r: Record<string, unknown>) => ({
        key: r.value,
        label: formatLabel(r.value as string),
        value: r.cnt,
      })),
      total,
    })
  } else {
    // All items
    const dataResult = await db.prepare(dataQuery).bind(...params).all()
    return NextResponse.json({
      items: (dataResult.results || []).map((r: Record<string, unknown>) => ({
        key: r.value,
        label: formatLabel(r.value as string),
        value: r.cnt,
      })),
      total,
    })
  }
}

function formatLabel(value: string) {
  return value.includes(':') ? value.split(':').slice(1).join(':') : value
}
