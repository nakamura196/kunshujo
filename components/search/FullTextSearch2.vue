<template>
  <v-row>
    <v-col cols="12" md="8">
      <v-text-field
        autocomplete="off"
        v-model="q"
        light
        single-line
        filled
        rounded
        dense
        hide-details
        :clearable="true"
        :clear-icon="mdiClose"
        :append-icon="mdiMagnify"
        background-color="#E0E0E0"
        @click:append="search"
        @keydown.enter="trigger"
        :placeholder="$t('inputSearchKeyword')"
      ></v-text-field>
    </v-col>
    <v-col cols="12" md="4" v-if="false">
      <v-btn rounded color="primary" depressed>
        <v-icon class="mr-1">mdi-menu</v-icon>
        詳細検索
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'nuxt-property-decorator'
import { mdiMagnify, mdiClose } from '@mdi/js'

let key: any = process.env.BASE_URL

@Component({
  components: {},
})
export default class FullTextSearch extends Vue {
  q: any = ''

  mdiMagnify: string = mdiMagnify
  mdiClose: string = mdiClose

  advanced: boolean = false

  @Watch('$route')
  watchRoute() {
    const query = this.$route.query
    if (query.keyword) {
      let q = query.keyword
      if (typeof q !== 'string') {
        q = q.join(' ')
      }
      this.q = q
    } else {
      this.q = ''
    }
  }

  trigger(event: any) {
    // 日本語入力中のEnterキー操作は無効にする
    if (event.keyCode !== 13) return
    this.search()
  }

  created() {
    const query = this.$route.query

    if (query.keyword) {
      let q = query.keyword
      if (typeof q !== 'string') {
        q = q.join(' ')
      }
      this.q = q
    } else {
      this.q = ''
    }
  }

  search() {
    let keywordStr = this.q

    if (!keywordStr) {
      keywordStr = ''
    } else {
      keywordStr = keywordStr.trim()
    }

    const keywords = this.$utils.splitKeyword(keywordStr)

    // push 処理
    const query: any = Object.assign({}, this.$route.query)
    const values: string[] = []
    for (let i = 0; i < keywords.length; i++) {
      const keyword: any = keywords[i]
      if (keyword.label === 'keyword') {
        values.push(keyword.value)
      }
    }

    if (keywordStr) {
      query.keyword = values //keywordStr
    } else {
      delete query.keyword
    }

    query.page = 1

    const slug = this.$route.params.slug

    console.log({ slug })

    this.$router.push(
      this.localePath({
        name: 'search-slug',
        params: {
          slug,
        },
        query,
      }),
      () => {},
      () => {}
    )
  }
}
</script>
