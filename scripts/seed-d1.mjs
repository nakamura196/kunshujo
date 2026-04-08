#!/usr/bin/env node
/**
 * Generate SQL INSERT statements from JSON data files for D1.
 * Usage: node scripts/seed-d1.mjs > scripts/seed.sql
 */
import { readFileSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()

function esc(val) {
  if (val == null) return 'NULL'
  return "'" + String(val).replace(/'/g, "''") + "'"
}

function buildSearchText(item, fields) {
  const parts = [item.label || '', item.fulltext || '']
  for (const f of fields) {
    const vals = item[f]
    if (Array.isArray(vals)) parts.push(...vals)
  }
  return parts.filter(Boolean).join(' ').toLowerCase()
}

// --- Items ---
console.log('-- Items')
const items = JSON.parse(readFileSync(join(ROOT, 'public/data/index.json'), 'utf8'))
const itemArrayFields = ['agential', 'book', 'color', 'keyword', 'mtag', 'org', 'place', 'tag', 'time']

const BATCH = 50
for (let i = 0; i < items.length; i += BATCH) {
  const batch = items.slice(i, i + BATCH)
  const rows = batch.map(item => {
    const searchText = buildSearchText(item, itemArrayFields)
    const desc = item.description ? JSON.stringify(item.description) : null
    const idx = Array.isArray(item.index) ? item.index[0] : (item.index || null)
    return `(${esc(item.objectID)},${esc(item.label)},${esc(item.thumbnail)},${esc(item.manifest)},${esc(item.member)},${esc(item.license)},${esc(item._updated)},${esc(idx)},${esc(desc)},${esc(searchText)})`
  })
  console.log(`INSERT OR IGNORE INTO items (objectID,label,thumbnail,manifest,member,license,_updated,idx,description,search_text) VALUES`)
  console.log(rows.join(',\n') + ';')
}

// Item values
console.log('-- Item values')
for (let i = 0; i < items.length; i += BATCH) {
  const batch = items.slice(i, i + BATCH)
  const rows = []
  for (const item of batch) {
    for (const field of itemArrayFields) {
      const vals = item[field]
      if (!Array.isArray(vals)) continue
      for (const val of vals) {
        if (!val) continue
        rows.push(`(${esc(item.objectID)},${esc(field)},${esc(val)})`)
      }
    }
  }
  if (rows.length > 0) {
    console.log(`INSERT INTO item_values (objectID,field,value) VALUES`)
    console.log(rows.join(',\n') + ';')
  }
}

// --- Entities ---
console.log('-- Entities')
const entities = JSON.parse(readFileSync(join(ROOT, 'public/data/entity.json'), 'utf8'))
const entityArrayFields = ['タイプ']

for (let i = 0; i < entities.length; i += BATCH) {
  const batch = entities.slice(i, i + BATCH)
  const rows = batch.map(item => {
    const searchText = buildSearchText(item, entityArrayFields)
    const desc = item.description ? JSON.stringify(item.description) : null
    return `(${esc(item.objectID)},${esc(item.label)},${esc(item.thumbnail)},${esc(desc)},${esc(item.count)},${esc(item.geo)},${esc(item._updated)},${esc(searchText)})`
  })
  console.log(`INSERT OR IGNORE INTO entities (objectID,label,thumbnail,description,count,geo,_updated,search_text) VALUES`)
  console.log(rows.join(',\n') + ';')
}

// Entity values
console.log('-- Entity values')
for (let i = 0; i < entities.length; i += BATCH) {
  const batch = entities.slice(i, i + BATCH)
  const rows = []
  for (const item of batch) {
    for (const field of entityArrayFields) {
      const vals = item[field]
      if (!Array.isArray(vals)) continue
      for (const val of vals) {
        if (!val) continue
        rows.push(`(${esc(item.objectID)},${esc(field)},${esc(val)})`)
      }
    }
    // Also store jk field
    if (Array.isArray(item.jk)) {
      for (const val of item.jk) {
        if (!val) continue
        rows.push(`(${esc(item.objectID)},${esc('jk')},${esc(val)})`)
      }
    }
  }
  if (rows.length > 0) {
    console.log(`INSERT INTO entity_values (objectID,field,value) VALUES`)
    console.log(rows.join(',\n') + ';')
  }
}

// --- Objects (GCV) ---
console.log('-- Objects')
const objects = JSON.parse(readFileSync(join(ROOT, 'public/data/gcv.json'), 'utf8'))
const objectArrayFields = ['mtag', 'color', 'score']

for (let i = 0; i < objects.length; i += BATCH) {
  const batch = objects.slice(i, i + BATCH)
  const rows = batch.map(item => {
    const searchText = buildSearchText(item, objectArrayFields)
    const desc = item.description ? JSON.stringify(item.description) : null
    return `(${esc(item.objectID)},${esc(item.label)},${esc(item.thumbnail)},${esc(item.manifest)},${esc(item.member)},${esc(item.within)},${esc(desc)},${esc(item._updated)},${esc(searchText)})`
  })
  console.log(`INSERT OR IGNORE INTO objects (objectID,label,thumbnail,manifest,member,within,description,_updated,search_text) VALUES`)
  console.log(rows.join(',\n') + ';')
}

// Object values
console.log('-- Object values')
for (let i = 0; i < objects.length; i += BATCH) {
  const batch = objects.slice(i, i + BATCH)
  const rows = []
  for (const item of batch) {
    for (const field of objectArrayFields) {
      const vals = item[field]
      if (!Array.isArray(vals)) continue
      for (const val of vals) {
        if (!val) continue
        rows.push(`(${esc(item.objectID)},${esc(field)},${esc(val)})`)
      }
    }
  }
  if (rows.length > 0) {
    console.log(`INSERT INTO object_values (objectID,field,value) VALUES`)
    console.log(rows.join(',\n') + ';')
  }
}

console.error(`Seed complete: ${items.length} items, ${entities.length} entities, ${objects.length} objects`)
