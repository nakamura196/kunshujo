<template>
  <v-list>
    <v-subheader
      ><small>{{ $t('recentSearches') }}</small></v-subheader
    >
    <template v-for="(item, key) in filteredItems">
      <v-list-item :key="key" exact @click="select(item)">
        <v-list-item-title v-html="getText(item.q)"> </v-list-item-title>
      </v-list-item>

      <v-divider
        v-if="key < filteredItems.length - 1"
        :key="'d-' + key"
      ></v-divider>
    </template>
  </v-list>
</template>

<!-- <div>
  </div> -->

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'nuxt-property-decorator'
import { mdiMagnify, mdiClose } from '@mdi/js'

let key: any = process.env.BASE_URL

@Component({})
export default class FullTextSearch extends Vue {
  items: any = []

  //key: any = process.env.BASE_URL

  @Watch('$route')
  watchRoute() {
    this.init()
  }

  @Prop({ default: -1 })
  size!: number

  get filteredItems() {
    let items: any[] = this.items
    const size = this.size

    if (size !== -1) {
      items = items.slice(0, size)
    }

    return items
  }

  init() {
    //const key = this.key
    if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
      let items = JSON.parse((localStorage as any).getItem(key))
      this.items = items
    } else {
      this.items = []
    }
  }

  mounted() {
    this.init()
  }

  getText(query: any) {
    let text = ''
    if (query.keyword) {
      let keyword = query.keyword
      if (typeof keyword === 'string') {
        keyword = [keyword]
      }
      text += keyword.join(' ')
    }
    for (let key in query) {
      if (key.includes('fc-') || key.includes('q-')) {
        let values = query[key]
        if (typeof values === 'string') {
          values = [values]
        }
        text +=
          ' ' +
          `<span style="color: #4caf50">${key
            .replace('fc-', this.$t('facet') + '-')
            .replace('q-', this.$t('detail') + '-')}</span>` +
          ': ' +
          values.join(', ')
      }
    }
    text = text.trim()

    if (!text) {
      text += `<span style="color: #4caf50">${this.$t('全件表示')}</span>`
    }
    return text
  }

  select(item: any) {
    // ---- 0 ----

    let keywordStr = item.label
    let query = item.q

    // ---- 1 ----

    //過去のクエリのリスト
    const items = this.items

    //過去
    const queries = []
    for (const item of items) {
      const text = this.getText(item.q)
      queries.push(text)
    }

    // ---- 2 ----

    // keywordStr が含まれていれば削除

    if (queries.includes(keywordStr)) {
      items.splice(queries.indexOf(keywordStr), 1)
    }

    // ---- 3 ----

    // 先頭に追加

    items.unshift(item)

    // ---- 4 ----

    // 追加と検索

    localStorage.setItem(key, JSON.stringify(items.slice(0, 20)))

    this.$router.push(
      this.localePath({
        name: 'search',
        query,
      }),
      () => {},
      () => {}
    )
  }
}
</script>
