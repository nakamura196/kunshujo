import { NextResponse } from 'next/server'
import { getDB } from '@/lib/d1'

export async function GET() {
  const db = await getDB()

  const result = await db.prepare(
    "SELECT objectID, label, geo, count FROM entities WHERE geo IS NOT NULL AND geo != '' AND CAST(count AS INTEGER) > 0"
  ).all()

  return NextResponse.json(result.results || [])
}
