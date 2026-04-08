-- Item relations (series) from relation2.json
CREATE TABLE IF NOT EXISTS item_relations (
  objectID TEXT NOT NULL,
  relatedID TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_ir_objectID ON item_relations(objectID);

-- Entity relations from entity_relation.json
CREATE TABLE IF NOT EXISTS entity_relations (
  objectID TEXT NOT NULL,
  relatedLabel TEXT NOT NULL,
  coOccurrence INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_er_objectID ON entity_relations(objectID);

-- Similar items (text/image) from relations/*.json
CREATE TABLE IF NOT EXISTS item_similarities (
  objectID TEXT NOT NULL,
  relatedID TEXT NOT NULL,
  simType TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_is_objectID ON item_similarities(objectID);
