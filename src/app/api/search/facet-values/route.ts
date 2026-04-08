import { NextRequest, NextResponse } from 'next/server'
import { getDB } from '@/lib/d1'
import { CONFIGS, normalizeItaiji, type SearchType } from '../route'

/**
 * Returns all distinct values for a given field, optionally filtered by a partial query.
 * Supports the "show all" facet dialog in the UI.
 *
 * Query params:
 *   - type: search type (default | entity | object)
 *   - field: the facet field name (required)
 *   - q: optional partial string to filter values
 *   - limit: max results (default 100, max 500)
 */
export async function GET(request: NextRequest) {
  const db = await getDB()
  const url = new URL(request.url)

  const type = (url.searchParams.get('type') || 'default') as SearchType
  const config = CONFIGS[type] || CONFIGS.default
  const field = url.searchParams.get('field')
  const q = url.searchParams.get('q')?.trim().toLowerCase() || ''
  const limit = Math.max(1, Math.min(500, parseInt(url.searchParams.get('limit') || '100', 10)))

  if (!field) {
    return NextResponse.json({ error: 'field parameter is required' }, { status: 400 })
  }

  const conditions: string[] = ['v.field = ?']
  const params: unknown[] = [field]

  if (q) {
    const normalized = normalizeItaiji(q)
    conditions.push('LOWER(v.value) LIKE ?')
    params.push(`%${normalized}%`)
  }

  const whereClause = `WHERE ${conditions.join(' AND ')}`

  const result = await db.prepare(
    `SELECT v.value, COUNT(DISTINCT v.objectID) as cnt
     FROM ${config.valuesTable} v
     ${whereClause}
     GROUP BY v.value
     ORDER BY cnt DESC
     LIMIT ?`
  ).bind(...params, limit).all()

  const values: Record<string, number> = {}
  for (const row of (result.results || []) as { value: string; cnt: number }[]) {
    values[row.value] = row.cnt
  }

  return NextResponse.json({ field, values })
}
