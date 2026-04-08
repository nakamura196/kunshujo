export type DetailField = {
  label: string
  value: string
  type?: 'text' | 'link'
}

export type AggField = {
  key: string
  label: string
  hide?: boolean
}

export type ListField = {
  value: string
  max?: number
}

export type SearchConfig = {
  label: string
  index: string
  aggs: Record<string, AggField>
  detail: DetailField[]
  list?: ListField[]
}

export const SEARCHES: Record<string, SearchConfig> = {
  default: {
    label: 'item',
    index: '/data/index.json',
    aggs: {
      agential: {key: 'agential', label: 'people'},
      place: {key: 'place', label: 'places'},
      org: {key: 'org', label: 'organizations'},
      keyword: {key: 'keyword', label: 'keywords'},
      book: {key: 'book', label: 'book'},
      time: {key: 'time', label: 'time'},
      color: {key: 'color', label: 'colors'},
      mtag: {key: 'mtag', label: 'objects'},
    },
    detail: [
      {label: 'book', value: 'book'},
      {label: 'tags', value: 'tag', type: 'text'},
      {label: 'people', value: 'agential'},
      {label: 'organizations', value: 'org'},
      {label: 'places', value: 'place'},
      {label: 'keywords', value: 'keyword'},
      {label: 'time', value: 'time'},
      {label: 'colors', value: 'color'},
      {label: 'objects', value: 'mtag'},
    ],
    list: [
      {value: 'tag', max: 4},
      {value: 'book', max: 1},
      {value: 'place', max: 2},
    ],
  },
  entity: {
    label: 'entity',
    index: '/data/entity.json',
    aggs: {
      '\u30BF\u30A4\u30D7': {key: '\u30BF\u30A4\u30D7', label: 'type'},
    },
    detail: [
      {label: 'type', value: '\u30BF\u30A4\u30D7'},
      {label: 'jk', value: 'jk'},
    ],
    list: [
      {value: 'タイプ', max: 2},
    ],
  },
  object: {
    label: 'object',
    index: '/data/gcv.json',
    aggs: {
      mtag: {key: 'mtag', label: 'objects'},
      color: {key: 'color', label: 'colors'},
      score: {key: 'score', label: 'score'},
    },
    detail: [
      {label: 'objects', value: 'mtag'},
      {label: 'colors', value: 'color'},
      {label: 'score', value: 'score', type: 'text'},
    ],
    list: [
      {value: 'mtag', max: 3},
      {value: 'color', max: 2},
    ],
  },
}
