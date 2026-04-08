import { NextRequest, NextResponse } from 'next/server'
import { getDB } from '@/lib/d1'

/** Get item relations (series): /api/relations?id=xxx */
export async function GET(request: NextRequest) {
  const db = await getDB()
  const url = new URL(request.url)
  const id = url.searchParams.get('id') || ''

  if (!id) return NextResponse.json([])

  const result = await db.prepare(
    'SELECT relatedID FROM item_relations WHERE objectID = ?'
  ).bind(id).all()

  const ids = (result.results || []).map((r: Record<string, unknown>) => r.relatedID as string)
  return NextResponse.json(ids)
}
