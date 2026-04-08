#!/usr/bin/env node
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const BATCH = 200

function esc(val) {
  if (val == null) return 'NULL'
  return "'" + String(val).replace(/'/g, "''") + "'"
}

// --- relation2.json ---
console.log('-- Item relations')
const relation2 = JSON.parse(readFileSync(join(ROOT, 'public/data/relation2.json'), 'utf8'))
let rows = []
for (const [objectID, relatedIDs] of Object.entries(relation2)) {
  for (const relatedID of relatedIDs) {
    rows.push(`(${esc(objectID)},${esc(relatedID)})`)
    if (rows.length >= BATCH) {
      console.log(`INSERT INTO item_relations (objectID,relatedID) VALUES\n${rows.join(',\n')};`)
      rows = []
    }
  }
}
if (rows.length > 0) {
  console.log(`INSERT INTO item_relations (objectID,relatedID) VALUES\n${rows.join(',\n')};`)
}

// --- entity_relation.json ---
console.log('-- Entity relations')
const entityRelation = JSON.parse(readFileSync(join(ROOT, 'public/data/entity_relation.json'), 'utf8'))
rows = []
for (const [objectID, relations] of Object.entries(entityRelation)) {
  for (const rel of relations) {
    rows.push(`(${esc(objectID)},${esc(rel.label)},${rel.value})`)
    if (rows.length >= BATCH) {
      console.log(`INSERT INTO entity_relations (objectID,relatedLabel,coOccurrence) VALUES\n${rows.join(',\n')};`)
      rows = []
    }
  }
}
if (rows.length > 0) {
  console.log(`INSERT INTO entity_relations (objectID,relatedLabel,coOccurrence) VALUES\n${rows.join(',\n')};`)
}

// --- relations/*.json ---
console.log('-- Item similarities')
const relDir = join(ROOT, 'public/data/relations')
const files = readdirSync(relDir).filter(f => f.endsWith('.json'))
rows = []
for (const file of files) {
  const data = JSON.parse(readFileSync(join(relDir, file), 'utf8'))
  for (const [objectID, entry] of Object.entries(data)) {
    if (entry.texts) {
      for (const rid of entry.texts) {
        rows.push(`(${esc(objectID)},${esc(rid)},'text')`)
        if (rows.length >= BATCH) {
          console.log(`INSERT INTO item_similarities (objectID,relatedID,simType) VALUES\n${rows.join(',\n')};`)
          rows = []
        }
      }
    }
    if (entry.images) {
      for (const rid of entry.images) {
        rows.push(`(${esc(objectID)},${esc(rid)},'image')`)
        if (rows.length >= BATCH) {
          console.log(`INSERT INTO item_similarities (objectID,relatedID,simType) VALUES\n${rows.join(',\n')};`)
          rows = []
        }
      }
    }
  }
}
if (rows.length > 0) {
  console.log(`INSERT INTO item_similarities (objectID,relatedID,simType) VALUES\n${rows.join(',\n')};`)
}

console.error('Relation seed complete')
