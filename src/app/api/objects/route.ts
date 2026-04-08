import { NextRequest, NextResponse } from 'next/server'
import { getDB } from '@/lib/d1'

/** Fetch objects by parent item: /api/objects?within=parentId */
export async function GET(request: NextRequest) {
  const db = await getDB()
  const url = new URL(request.url)
  const within = url.searchParams.get('within') || ''

  if (!within) {
    return NextResponse.json([])
  }

  const result = await db.prepare(
    'SELECT objectID, label, thumbnail FROM objects WHERE within = ?'
  ).bind(within).all()

  return NextResponse.json(result.results || [])
}
