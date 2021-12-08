import axios from 'axios'
const _ = require('lodash')

export class localEs {
  async search(routeQuery: any, slug: any): Promise<any> {
    if (!slug) {
      slug = 'default'
    }

    const searches: any = process.env.searches

    let index: any = await axios.get(
      process.env.BASE_URL + '/' + searches[slug].index
    )

    index = index.data

    //IDをキーとしたマップ
    const docs: any = {}

    //全文検索用のインデックス
    const indexMap: any = {}

    //ファセット項目毎のインデックス
    const facets: any = {}

    const aggs: any = searches[slug].aggs || {}
    // 翻訳
    for (const aggField in aggs) {
      facets[aggField] = {}
    }

    const advancedOptions: any = searches[slug].advanced || []
    // 今後改善予定
    for (const option of advancedOptions) {
      facets[option.key] = {}
    }

    const sortOptions: any = searches[slug].sort || []
    // 今後改善予定
    for (const sort of sortOptions) {
      if (sort.value != '_score') {
        facets[sort.value] = {}
      }
    }

    for (const item of index) {
      const id = item.objectID
      docs[id] = item

      const title = item.fulltext
      if (!indexMap[title]) {
        indexMap[title] = []
      }
      indexMap[title].push(id)

      const fields = Object.keys(facets)

      for (const field of fields) {
        const map = facets[field]
        let value = item[field]

        if (typeof value !== 'object') {
          value = [value]
        }

        for (const v of value) {
          if (!map[v]) {
            map[v] = []
          }
          map[v].push(id)
        }
      }
    }

    const ids = filter(docs, indexMap, facets, routeQuery, advancedOptions)

    const hits = getHits(docs, ids, routeQuery)

    // ----------

    const data: any = {
      hits: {
        total: {
          value: ids.length,
          relation: 'gte',
        },
        hits: hits,
      },
    }

    // ----------

    if (routeQuery.aggs || true) {
      data.aggregations = getAggs(docs, ids, routeQuery, aggs)
    }

    // ----------

    return {
      data,
    }
  }
}

export default (_: any, inject: any) => {
  inject('localEs', new localEs())
}

function filter(
  docs: any,
  index: any,
  facets: any,
  routeQuery: any,
  advanced: any
): string[] {
  const query = routeQuery

  let ids: string[] = []
  const freq: any = {}

  let q: any = routeQuery.keyword || ''

  if (typeof q === 'object') {
    q = q.join(' ')
  }

  const sort: any = routeQuery.sort || '_score:desc'

  const spl = sort.split(':')
  const sortValue = spl[0]
  const sortOrder = spl[1]

  // 全文
  if (q === '') {
    ids = Object.keys(docs)
  } else {
    // 異体字対応
    const itaiji: any = process.env.itaiji
    if (itaiji) {
      const spl = q.split('')
      q = ''
      for (const e of spl) {
        q += itaiji[e] || e
      }
    }

    const terms = q.split('　').join(' ').split(' ')

    for (const key in index) {
      let flg = true
      let count = 0
      for (const term of terms) {
        //除外キーワード
        if (term.startsWith('-')) {
          const c = (key.match(new RegExp(term.substring(1), 'g')) || []).length
          if (c > 0) {
            flg = false
            break
          }
        } else {
          const c = (key.match(new RegExp(term, 'g')) || []).length
          if (c === 0) {
            flg = false
            break
          } else {
            count += c
          }
        }
      }

      if (flg) {
        const ids_ = index[key]

        if (sortValue === '_score') {
          for (const id of ids_) {
            if (!freq[id]) {
              freq[id] = 0
            }
            freq[id] += count
          }
        }

        ids = ids.concat(ids_)
      }
    }
  }

  // ファセット
  ids = advancedFilter(ids, facets, query, advanced, 'fc')
  ids = advancedFilter(ids, facets, query, advanced, 'q')

  // ヒット数でソート
  if (sortValue === '_score' && q !== '' && Object.keys(freq).length > 0) {
    const arr = Object.keys(freq).map((e) => ({ key: e, value: freq[e] }))

    let x = 1
    let y = -1

    if (sortOrder === 'asc') {
      x = -1
      y = 1
    }

    arr.sort(function (a, b) {
      if (a.value < b.value) return x
      if (a.value > b.value) return y
      return 0
    })

    const ids_ = []
    for (const obj of arr) {
      if (ids.includes(obj.key)) {
        ids_.push(obj.key)
      }
    }

    ids = ids_ // ids.sort()
  } else if (facets[sortValue]) {
    // 項目でソート
    const sortObj = facets[sortValue]
    const keys = Object.keys(sortObj)

    // 速度の問題で、キーの数が多すぎる場合には、idsでソートする
    if (keys.length === 0) {
      // keys.length > 100 && false
      ids = ids.sort()
    } else {
      if (sortOrder === 'desc') {
        keys.reverse()
      } else {
        keys.sort()
      }

      let sortIds: string[] = []
      for (const key of keys) {
        const ids_ = sortObj[key]
        sortIds = sortIds.concat(ids_)
      }

      ids = _.intersection(sortIds, ids)
    }
  } else {
    ids = ids.sort()
  }

  return ids
}

function getHits(
  docs: any,
  ids: string[],
  routeQuery: any,
  allFlag: boolean = false
): any[] {
  const page = Number(routeQuery.page) || 1
  let hitsPerPage = Number(routeQuery.size) || 20 // 要検討
  if (hitsPerPage < 0) {
    allFlag = true
  }
  const ids_ = allFlag
    ? ids
    : ids.slice((page - 1) * hitsPerPage, page * hitsPerPage)

  const items = []
  for (const id of ids_) {
    const doc = docs[id]
    const _source: any = doc
    const hit: any = {
      _id: doc.objectID,
      _source,
    }
    items.push(hit)
  }
  return items
}

function getAggs(docs: any, ids: string[], routeQuery: any, aggs: any): any {
  const conf: any = process.env.searches

  // 最大、検索結果数のループ
  for (const id of ids) {
    const item = docs[id]

    for (const aggField in aggs) {
      if (aggField === 'sort') {
        continue
      }

      const aggMap = aggs[aggField].value

      let values = item[aggField]

      if (typeof values === 'string') {
        values = [values]
      } else if (typeof values === 'number') {
        values = [values]
      }

      if (!values) {
        continue
      }

      for (const value of values) {
        if (!aggMap[value]) {
          aggMap[value] = 0
        }
        aggMap[value] += 1
      }
    }
  }
  const aggregations: any = {}

  const max = Number(routeQuery.max) || 10

  for (const aggField in aggs) {
    const aggMap = aggs[aggField]

    let pairs = Object.entries(aggMap.value)

    if (aggMap.sort !== 'name:asc') {
      pairs.sort(function (p1, p2) {
        const p1Val: any = p1[1]
        const p2Val: any = p2[1]
        return -(p1Val - p2Val)
      })
    }

    let pairs_ = pairs
    if (max != -1) {
      pairs_ = pairs.slice(0, max)
    }

    const buckets: any[] = []
    for (const pair of pairs_) {
      buckets.push({
        key: pair[0],
        doc_count: pair[1],
      })
    }

    aggregations[aggField] = {
      buckets,
      total: pairs.length,
    }
  }

  return aggregations
}

function advancedFilter(
  ids: string[],
  facets: any,
  query: any,
  advanced: any,
  type: string
) {
  // クエリ毎に整理
  const advancedMap: any = {}
  for (const queryField in query) {
    if (queryField.includes(`${type}-`)) {
      const facetField = queryField.replace(`${type}-`, '')

      if (!advancedMap[facetField]) {
        advancedMap[facetField] = {
          '+': [],
          '-': [],
        }
      }

      let values = query[queryField]
      if (typeof values === 'string') {
        values = [values]
      }

      for (const v of values) {
        let key = '+'
        let value = v
        if (v.startsWith('-')) {
          key = '-'
          value = v.substring(1)
        }

        if (!advancedMap[facetField][key].includes(value)) {
          advancedMap[facetField][key].push(value)
        }
      }
    }
  }
  // advanced options
  const options: any = {}

  const advancedOptions: any = advanced

  for (const option of advancedOptions) {
    options[option.key] = option
  }

  for (const facetField in advancedMap) {
    const obj = advancedMap[facetField]

    const plusValues = obj['+']
    const minusValues = obj['-']

    const matchFacets = facets[facetField]

    // プラス分
    if (plusValues.length > 0) {
      let plusMatchedIds: any[] = []
      for (const pValue of plusValues) {
        //完全一致
        if (
          type === 'fc' ||
          (options[facetField] && options[facetField].type === 'select')
        ) {
          plusMatchedIds = plusMatchedIds.concat(matchFacets[pValue])
        } else {
          // 部分一致
          for (const key in matchFacets) {
            if (key.includes(pValue)) {
              plusMatchedIds = plusMatchedIds.concat(matchFacets[key])
            }
          }
        }
      }
      ids = _.intersection(ids, plusMatchedIds)
    }

    // マイナス分
    if (minusValues.length > 0) {
      // 各値
      for (const mValue of minusValues) {
        let eachMinusMatchedIds: any[] = []
        for (const facetValue in matchFacets) {
          if (facetValue !== mValue) {
            eachMinusMatchedIds = eachMinusMatchedIds.concat(
              matchFacets[facetValue]
            )
          }
        }
        ids = _.intersection(ids, eachMinusMatchedIds)
      }
    }
  }

  return ids
}
