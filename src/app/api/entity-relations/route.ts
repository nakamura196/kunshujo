import { NextRequest, NextResponse } from 'next/server'
import { getDB } from '@/lib/d1'

/** Get entity relations: /api/entity-relations?id=xxx */
export async function GET(request: NextRequest) {
  const db = await getDB()
  const url = new URL(request.url)
  const id = url.searchParams.get('id') || ''

  if (!id) return NextResponse.json([])

  const result = await db.prepare(
    'SELECT relatedLabel, coOccurrence FROM entity_relations WHERE objectID = ? ORDER BY coOccurrence DESC'
  ).bind(id).all()

  return NextResponse.json(result.results || [])
}
