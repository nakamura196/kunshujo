import { NextRequest, NextResponse } from 'next/server'
import { getDB } from '@/lib/d1'

type SearchType = 'default' | 'entity' | 'object'

const VALUES_TABLES: Record<SearchType, string> = {
  default: 'item_values',
  entity: 'entity_values',
  object: 'object_values',
}

export async function GET(request: NextRequest) {
  const db = await getDB()
  const url = new URL(request.url)

  const field = url.searchParams.get('field')
  if (!field) {
    return NextResponse.json({ error: 'field parameter is required' }, { status: 400 })
  }

  const type = (url.searchParams.get('type') || 'default') as SearchType
  const table = VALUES_TABLES[type] || VALUES_TABLES.default
  const q = url.searchParams.get('q')?.trim().toLowerCase() || ''
  const limit = Math.max(1, Math.min(500, parseInt(url.searchParams.get('limit') || '200', 10)))

  const conditions: string[] = ['field = ?']
  const params: unknown[] = [field]

  if (q) {
    conditions.push('LOWER(value) LIKE ?')
    params.push(`%${q}%`)
  }

  const whereClause = `WHERE ${conditions.join(' AND ')}`

  const result = await db.prepare(
    `SELECT value, COUNT(*) as cnt FROM ${table} ${whereClause} GROUP BY value ORDER BY cnt DESC LIMIT ?`
  ).bind(...params, limit).all()

  const values = (result.results || []).map((row: Record<string, unknown>) => ({
    value: row.value as string,
    count: row.cnt as number,
  }))

  return NextResponse.json({ values })
}
