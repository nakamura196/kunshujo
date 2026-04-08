import { NextRequest, NextResponse } from 'next/server'
import { getDB } from '@/lib/d1'

/** Batch fetch items by IDs: /api/items?ids=id1,id2,id3 */
export async function GET(request: NextRequest) {
  const db = await getDB()
  const url = new URL(request.url)
  const idsParam = url.searchParams.get('ids') || ''
  const ids = idsParam.split(',').filter(Boolean).slice(0, 100) // max 100

  if (ids.length === 0) {
    return NextResponse.json([])
  }

  const placeholders = ids.map(() => '?').join(',')
  const result = await db.prepare(
    `SELECT objectID, label, thumbnail FROM items WHERE objectID IN (${placeholders})`
  ).bind(...ids).all()

  // Also fetch tag values for descriptions
  const tagResult = await db.prepare(
    `SELECT objectID, value FROM item_values WHERE field = 'tag' AND objectID IN (${placeholders})`
  ).bind(...ids).all()

  const tagMap: Record<string, string[]> = {}
  for (const row of (tagResult.results || []) as { objectID: string; value: string }[]) {
    if (!tagMap[row.objectID]) tagMap[row.objectID] = []
    tagMap[row.objectID].push(row.value)
  }

  const items = (result.results || []).map((item: Record<string, unknown>) => ({
    ...item,
    tag: tagMap[item.objectID as string] || [],
  }))

  return NextResponse.json(items)
}
