import { NextRequest, NextResponse } from 'next/server'
import { getDB } from '@/lib/d1'

export async function GET(request: NextRequest) {
  const db = await getDB()
  const url = new URL(request.url)
  const id = url.searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'id is required' }, { status: 400 })
  }

  const item = await db.prepare('SELECT * FROM objects WHERE objectID = ?').bind(id).first()
  if (!item) {
    return NextResponse.json({ error: 'not found' }, { status: 404 })
  }

  const values = await db.prepare(
    'SELECT field, value FROM object_values WHERE objectID = ?'
  ).bind(id).all()

  const result: Record<string, unknown> = { ...item }
  if (typeof result.description === 'string') {
    try { result.description = JSON.parse(result.description as string) } catch { /* */ }
  }
  delete result.search_text

  const fieldMap: Record<string, string[]> = {}
  for (const row of (values.results || []) as { field: string; value: string }[]) {
    if (!fieldMap[row.field]) fieldMap[row.field] = []
    fieldMap[row.field].push(row.value)
  }
  for (const [field, vals] of Object.entries(fieldMap)) {
    result[field] = vals
  }

  return NextResponse.json(result)
}
