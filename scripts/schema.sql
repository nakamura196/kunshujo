-- Items (from index.json)
CREATE TABLE IF NOT EXISTS items (
  objectID TEXT PRIMARY KEY,
  label TEXT,
  thumbnail TEXT,
  manifest TEXT,
  member TEXT,
  license TEXT,
  _updated TEXT,
  idx TEXT,
  description TEXT,
  search_text TEXT
);

CREATE INDEX IF NOT EXISTS idx_items_label ON items(label);
CREATE INDEX IF NOT EXISTS idx_items_updated ON items(_updated);
CREATE INDEX IF NOT EXISTS idx_items_idx ON items(idx);

-- Item facet values
CREATE TABLE IF NOT EXISTS item_values (
  objectID TEXT NOT NULL,
  field TEXT NOT NULL,
  value TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_iv_field_value ON item_values(field, value);
CREATE INDEX IF NOT EXISTS idx_iv_objectID ON item_values(objectID);

-- Entities (from entity.json)
CREATE TABLE IF NOT EXISTS entities (
  objectID TEXT PRIMARY KEY,
  label TEXT,
  thumbnail TEXT,
  description TEXT,
  count TEXT,
  geo TEXT,
  _updated TEXT,
  search_text TEXT
);

CREATE INDEX IF NOT EXISTS idx_entities_label ON entities(label);

-- Entity facet values
CREATE TABLE IF NOT EXISTS entity_values (
  objectID TEXT NOT NULL,
  field TEXT NOT NULL,
  value TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_ev_field_value ON entity_values(field, value);
CREATE INDEX IF NOT EXISTS idx_ev_objectID ON entity_values(objectID);

-- Objects (from gcv.json)
CREATE TABLE IF NOT EXISTS objects (
  objectID TEXT PRIMARY KEY,
  label TEXT,
  thumbnail TEXT,
  manifest TEXT,
  member TEXT,
  within TEXT,
  description TEXT,
  _updated TEXT,
  search_text TEXT
);

CREATE INDEX IF NOT EXISTS idx_objects_within ON objects(within);

-- Object facet values
CREATE TABLE IF NOT EXISTS object_values (
  objectID TEXT NOT NULL,
  field TEXT NOT NULL,
  value TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_ov_field_value ON object_values(field, value);
CREATE INDEX IF NOT EXISTS idx_ov_objectID ON object_values(objectID);
