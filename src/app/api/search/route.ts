import { NextRequest, NextResponse } from 'next/server'
import { getDB } from '@/lib/d1'

const FACET_LIMIT = 10

type SearchType = 'default' | 'entity' | 'object'

const CONFIGS: Record<SearchType, {
  table: string
  valuesTable: string
  facetFields: string[]
  orderFields: Record<string, string>
}> = {
  default: {
    table: 'items',
    valuesTable: 'item_values',
    facetFields: ['agential', 'place', 'org', 'keyword', 'book', 'time', 'color', 'mtag'],
    orderFields: { index: 'idx', label: 'label', _updated: '_updated' },
  },
  entity: {
    table: 'entities',
    valuesTable: 'entity_values',
    facetFields: ['タイプ'],
    orderFields: { index: 'objectID', label: 'label', _updated: '_updated' },
  },
  object: {
    table: 'objects',
    valuesTable: 'object_values',
    facetFields: ['mtag', 'color', 'score'],
    orderFields: { index: 'objectID', label: 'label', _updated: '_updated' },
  },
}

// Itaiji (variant character) mapping: old-form -> new-form
const ITAIJI_MAP: Record<string, string> = {
  '亞': '亜', '惡': '悪', '壓': '圧', '圍': '囲', '醫': '医',
  '爲': '為', '壹': '壱', '隱': '隠', '榮': '栄',
  '營': '営', '圓': '円', '鹽': '塩', '奧': '奥', '應': '応',
  '歐': '欧', '毆': '殴', '穩': '穏', '假': '仮', '價': '価',
  '畫': '画', '會': '会', '壞': '壊', '懷': '懐', '繪': '絵',
  '擴': '拡', '學': '学', '覺': '覚', '樂': '楽', '罐': '缶',
  '卷': '巻', '關': '関', '歡': '歓', '觀': '観', '氣': '気',
  '歸': '帰', '龜': '亀', '舊': '旧', '據': '拠', '擧': '挙',
  '虛': '虚', '峽': '峡', '挾': '挟', '狹': '狭', '鄕': '郷',
  '曉': '暁', '區': '区', '驅': '駆', '勳': '勲',
  '經': '経', '輕': '軽', '藝': '芸', '缺': '欠',
  '權': '権', '獻': '献', '縣': '県', '儉': '倹', '劍': '剣',
  '險': '険', '圈': '圏', '檢': '検', '顯': '顕', '驗': '験',
  '嚴': '厳', '廣': '広', '效': '効', '鑛': '鉱', '號': '号',
  '國': '国', '濟': '済', '碎': '砕', '齋': '斎', '劑': '剤',
  '櫻': '桜', '册': '冊', '雜': '雑', '參': '参',
  '慘': '惨', '棧': '桟', '贊': '賛', '殘': '残', '絲': '糸',
  '齒': '歯', '兒': '児', '辭': '辞', '濕': '湿', '實': '実',
  '寫': '写', '釋': '釈', '壽': '寿', '收': '収', '從': '従',
  '澁': '渋', '獸': '獣', '處': '処', '稱': '称', '奬': '奨',
  '將': '将', '燒': '焼', '證': '証', '條': '条', '狀': '状',
  '淨': '浄', '剩': '剰', '疊': '畳', '讓': '譲', '釀': '醸',
  '觸': '触', '囑': '嘱', '愼': '慎', '眞': '真',
  '圖': '図', '粹': '粋', '醉': '酔', '隨': '随', '樞': '枢',
  '數': '数', '齊': '斉', '聲': '声', '靜': '静', '竊': '窃',
  '攝': '摂', '專': '専', '戰': '戦', '淺': '浅',
  '潛': '潜', '纖': '繊', '踐': '践', '錢': '銭', '禪': '禅',
  '雙': '双', '壯': '壮', '爭': '争', '莊': '荘', '搜': '捜',
  '插': '挿', '巢': '巣', '曾': '曽', '瘦': '痩', '裝': '装',
  '藏': '蔵', '臟': '臓', '屬': '属', '續': '続', '墮': '堕',
  '體': '体', '對': '対', '帶': '帯', '滯': '滞', '臺': '台',
  '瀧': '滝', '擇': '択', '澤': '沢', '擔': '担', '膽': '胆',
  '團': '団', '斷': '断', '癡': '痴', '遲': '遅', '晝': '昼',
  '蟲': '虫', '鑄': '鋳', '廳': '庁', '徵': '徴',
  '聽': '聴', '敕': '勅', '鎭': '鎮', '轉': '転',
  '傳': '伝', '嶋': '島', '燈': '灯', '當': '当',
  '黨': '党', '盜': '盗', '鬪': '闘', '德': '徳', '獨': '独',
  '讀': '読', '屆': '届', '繩': '縄', '貳': '弐', '腦': '脳',
  '霸': '覇', '廢': '廃', '拜': '拝', '賣': '売', '麥': '麦',
  '發': '発', '髮': '髪', '拔': '抜', '晚': '晩',
  '蠻': '蛮', '祕': '秘', '濱': '浜',
  '甁': '瓶', '佛': '仏',
  '拂': '払', '倂': '併', '竝': '並', '邊': '辺', '變': '変',
  '辯': '弁', '辨': '弁', '瓣': '弁', '舖': '舗', '步': '歩',
  '穗': '穂', '寶': '宝', '萬': '万', '滿': '満', '默': '黙',
  '彌': '弥', '譯': '訳', '藥': '薬', '與': '与', '豫': '予',
  '餘': '余', '譽': '誉', '搖': '揺', '樣': '様', '謠': '謡',
  '來': '来', '賴': '頼', '亂': '乱', '覽': '覧', '龍': '竜',
  '兩': '両', '獵': '猟', '綠': '緑', '壘': '塁', '淚': '涙',
  '禮': '礼', '靈': '霊', '齡': '齢', '歷': '歴',
  '戀': '恋', '鍊': '錬', '爐': '炉', '勞': '労',
  '樓': '楼', '錄': '録', '灣': '湾',
  // Common alternate forms found in historical texts
  '﨑': '崎', '髙': '高', '濵': '浜', '曻': '昇',
}

/**
 * Normalize a string by replacing itaiji (variant kanji) with standard forms.
 */
export function normalizeItaiji(text: string): string {
  let result = text
  for (const [oldChar, newChar] of Object.entries(ITAIJI_MAP)) {
    if (result.includes(oldChar)) {
      result = result.split(oldChar).join(newChar)
    }
  }
  return result
}

/**
 * Split query into terms by half-width and full-width spaces.
 * Terms starting with `-` are negation terms.
 */
function parseQueryTerms(q: string): { include: string[]; exclude: string[] } {
  const raw = q.split(/[\s\u3000]+/).filter(Boolean)
  const include: string[] = []
  const exclude: string[] = []
  for (const term of raw) {
    if (term.startsWith('-') && term.length > 1) {
      exclude.push(normalizeItaiji(term.slice(1)))
    } else {
      include.push(normalizeItaiji(term))
    }
  }
  return { include, exclude }
}

export { CONFIGS, type SearchType }

export async function GET(request: NextRequest) {
  const db = await getDB()
  const url = new URL(request.url)

  const type = (url.searchParams.get('type') || 'default') as SearchType
  const config = CONFIGS[type] || CONFIGS.default
  const q = url.searchParams.get('q')?.trim().toLowerCase() || ''
  const sort = url.searchParams.get('sort') || 'index:asc'
  const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10))
  const size = Math.max(1, Math.min(512, parseInt(url.searchParams.get('size') || '24', 10)))

  // Parse query into include/exclude terms
  const terms = parseQueryTerms(q)

  // Parse facet filters (supports negation with `-` prefix on value)
  const facetsInclude: Record<string, string[]> = {}
  const facetsExclude: Record<string, string[]> = {}
  for (const [key, value] of url.searchParams.entries()) {
    if (key.startsWith('fc-')) {
      const field = key.slice(3)
      if (value.startsWith('-') && value.length > 1) {
        if (!facetsExclude[field]) facetsExclude[field] = []
        facetsExclude[field].push(value.slice(1))
      } else {
        if (!facetsInclude[field]) facetsInclude[field] = []
        facetsInclude[field].push(value)
      }
    }
  }

  // Build WHERE clause
  const conditions: string[] = []
  const params: unknown[] = []

  // Multi-term AND search with negation and itaiji normalization
  for (const term of terms.include) {
    conditions.push(`t.search_text LIKE ?`)
    params.push(`%${term}%`)
  }
  for (const term of terms.exclude) {
    conditions.push(`t.search_text NOT LIKE ?`)
    params.push(`%${term}%`)
  }

  // Facet inclusion filters: AND across fields, OR within field
  for (const [field, values] of Object.entries(facetsInclude)) {
    const placeholders = values.map(() => '?').join(',')
    conditions.push(
      `EXISTS (SELECT 1 FROM ${config.valuesTable} v WHERE v.objectID = t.objectID AND v.field = ? AND v.value IN (${placeholders}))`
    )
    params.push(field, ...values)
  }

  // Facet exclusion filters: exclude items that have any of the negated values
  for (const [field, values] of Object.entries(facetsExclude)) {
    const placeholders = values.map(() => '?').join(',')
    conditions.push(
      `NOT EXISTS (SELECT 1 FROM ${config.valuesTable} v WHERE v.objectID = t.objectID AND v.field = ? AND v.value IN (${placeholders}))`
    )
    params.push(field, ...values)
  }

  // Field-specific text search: q-{field}=value
  for (const [key, value] of url.searchParams.entries()) {
    if (key.startsWith('q-') && value.trim()) {
      const field = key.slice(2)
      const normalizedValue = normalizeItaiji(value.trim().toLowerCase())
      conditions.push(
        `EXISTS (SELECT 1 FROM ${config.valuesTable} v WHERE v.objectID = t.objectID AND v.field = ? AND LOWER(v.value) LIKE ?)`
      )
      params.push(field, `%${normalizedValue}%`)
    }
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ''

  // Sort
  const [sortField, sortDir] = sort.split(':')
  const direction = sortDir === 'desc' ? 'DESC' : 'ASC'
  const useScoreSort = sortField === '_score' && terms.include.length > 0

  // Build score expression for relevance sorting
  // Approximates relevance by counting occurrences of each term in search_text
  let scoreExpression = ''
  const scoreParams: unknown[] = []
  if (useScoreSort) {
    const scoreParts = terms.include.map(() => {
      return `(LENGTH(t.search_text) - LENGTH(REPLACE(LOWER(t.search_text), ?, ''))) / MAX(LENGTH(?), 1)`
    })
    scoreExpression = scoreParts.join(' + ')
    for (const term of terms.include) {
      scoreParams.push(term, term)
    }
  }

  const dbCol = useScoreSort ? null : (config.orderFields[sortField] || 'objectID')

  // Count
  const countResult = await db.prepare(
    `SELECT COUNT(*) as total FROM ${config.table} t ${whereClause}`
  ).bind(...params).first<{ total: number }>()
  const total = countResult?.total || 0

  // Items
  const offset = (page - 1) * size
  let itemsQuery: string
  let itemsParams: unknown[]

  if (useScoreSort) {
    itemsQuery = `SELECT t.*, (${scoreExpression}) as _score FROM ${config.table} t ${whereClause} ORDER BY _score ${direction} LIMIT ? OFFSET ?`
    itemsParams = [...scoreParams, ...params, size, offset]
  } else {
    itemsQuery = `SELECT t.* FROM ${config.table} t ${whereClause} ORDER BY t.${dbCol} ${direction} LIMIT ? OFFSET ?`
    itemsParams = [...params, size, offset]
  }

  const itemsResult = await db.prepare(itemsQuery).bind(...itemsParams).all()

  // Reconstruct array fields from values table
  const items = itemsResult.results || []
  const objectIDs = items.map((item: Record<string, unknown>) => item.objectID as string)

  let valuesMap: Record<string, Record<string, string[]>> = {}
  if (objectIDs.length > 0) {
    const placeholders = objectIDs.map(() => '?').join(',')
    const valuesResult = await db.prepare(
      `SELECT objectID, field, value FROM ${config.valuesTable} WHERE objectID IN (${placeholders})`
    ).bind(...objectIDs).all()

    for (const row of (valuesResult.results || []) as { objectID: string; field: string; value: string }[]) {
      if (!valuesMap[row.objectID]) valuesMap[row.objectID] = {}
      if (!valuesMap[row.objectID][row.field]) valuesMap[row.objectID][row.field] = []
      valuesMap[row.objectID][row.field].push(row.value)
    }
  }

  // Merge values into items
  const enrichedItems = items.map((item: Record<string, unknown>) => {
    const id = item.objectID as string
    const values = valuesMap[id] || {}
    const result: Record<string, unknown> = { ...item }
    // Parse description from JSON string
    if (typeof result.description === 'string') {
      try { result.description = JSON.parse(result.description as string) } catch { /* keep as string */ }
    }
    // Map idx back to index
    if (result.idx !== undefined) {
      result.index = result.idx ? [result.idx] : []
      delete result.idx
    }
    // Remove internal fields from response
    delete result.search_text
    delete result._score
    // Add array fields
    for (const [field, vals] of Object.entries(values)) {
      result[field] = vals
    }
    return result
  })

  // Facet counts — compute from the filtered result set
  const facetCounts: Record<string, Record<string, number>> = {}

  for (const field of config.facetFields) {
    const facetResult = await db.prepare(
      `SELECT v.value, COUNT(DISTINCT v.objectID) as cnt
       FROM ${config.valuesTable} v
       INNER JOIN ${config.table} t ON t.objectID = v.objectID
       ${whereClause ? whereClause.replace(/\bt\./g, 't.') : ''}
       AND v.field = ?
       GROUP BY v.value
       ORDER BY cnt DESC
       LIMIT ?`
    ).bind(...params, field, FACET_LIMIT).all()

    facetCounts[field] = {}
    for (const row of (facetResult.results || []) as { value: string; cnt: number }[]) {
      facetCounts[field][row.value] = row.cnt
    }
  }

  return NextResponse.json({
    items: enrichedItems,
    total,
    facets: facetCounts,
  })
}
