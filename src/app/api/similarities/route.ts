import { NextRequest, NextResponse } from 'next/server'
import { getDB } from '@/lib/d1'

/** Get similar items: /api/similarities?id=xxx */
export async function GET(request: NextRequest) {
  const db = await getDB()
  const url = new URL(request.url)
  const id = url.searchParams.get('id') || ''

  if (!id) return NextResponse.json({ texts: [], images: [] })

  const result = await db.prepare(
    'SELECT relatedID, simType FROM item_similarities WHERE objectID = ?'
  ).bind(id).all()

  const texts: string[] = []
  const images: string[] = []
  for (const row of (result.results || []) as { relatedID: string; simType: string }[]) {
    if (row.simType === 'text') texts.push(row.relatedID)
    else if (row.simType === 'image') images.push(row.relatedID)
  }

  return NextResponse.json({ texts, images })
}
