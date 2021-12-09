<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5 pb-10">
      <v-tabs v-model="tabValue" class="mb-10">
        <template v-for="(aggList, aggField) in aggs">
          <v-tab
            v-if="!aggList.hide"
            :key="aggField"
            class="ma-1"
            depressed
            color="primary"
            :to="
              localePath({
                name: 'category-slug-field',
                params: { slug, field: aggField },
              })
            "
            >{{ $t(aggList.label) }}</v-tab
          >
        </template>
      </v-tabs>

      <v-row>
        <v-col cols="12" md="8">
          <h2>{{ $t(label) }}</h2>
        </v-col>
        <v-col cols="12" md="4">
          <v-tabs v-model="tabs" right>
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#mobile-tabs-5-1" class="primary--text">
              <v-icon>mdi-table</v-icon>
            </v-tab>

            <v-tab href="#mobile-tabs-5-2" class="primary--text">
              <v-icon>mdi-chart-bar</v-icon>
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>

      <template v-if="loading">
        <div class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
            class="my-10"
          ></v-progress-circular>

          <p>
            初回はインデックスファイルのダウンロードに時間を要します。2回目以降はキャッシュにより待ち時間が改善します。
          </p>
        </div>
      </template>

      <template v-else>
        <v-tabs-items v-model="tabs" class="mt-5">
          <v-tab-item :value="'mobile-tabs-5-1'">
            <v-card flat>
              <v-card-title>
                <v-text-field
                  class="mb-5"
                  filled
                  rounded
                  v-model="search"
                  append-icon="mdi-magnify"
                  dense
                  single-line
                  hide-details
                  background-color="#E0E0E0"
                  :placeholder="$t('inputSearchKeyword')"
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :items-per-page="20"
                :footer-props="{
                  'items-per-page-options': [20, 50, 100, -1],
                }"
                :headers="headers"
                :items="items"
                :search="search"
              >
                <template v-slot:item.label="{ item }">
                  <nuxt-link
                    :to="
                      localePath({
                        name: 'search-slug',
                        params: {
                          slug: fixSearchSlug(slug),
                        },
                        query: getQuery(item.key),
                      })
                    "
                  >
                    {{ item.label }}
                  </nuxt-link>
                </template>
              </v-data-table>
            </v-card>
          </v-tab-item>

          <v-tab-item :value="'mobile-tabs-5-2'">
            <BarChart
              class="mt-10"
              :labels="labels"
              :datasets="datasets"
            ></BarChart>
          </v-tab-item>
        </v-tabs-items>
      </template>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'nuxt-property-decorator'

import axios from 'axios'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class categoryTypeSlug extends Vue {
  tabs: any = null

  headers: any[] = [
    {
      text: this.$t('name'),
      value: 'label',
    },
    {
      text: this.$t('results'),
      value: 'value',
    },
  ]

  search: string = ''

  tabValue: any = null

  items: any[] = []

  labels: string[] = []
  datasets: any[] = []

  loading: boolean = true

  get aggs(): any {
    const slug = this.slug
    const slug2 = this.fixSlug(slug)
    const searches: any = process.env.searches
    return searches[slug2].aggs
  }

  get slug() {
    return this.$route.params.slug
  }

  fixSlug(slug: string) {
    return slug === 'item' ? 'default' : slug
  }

  fixSearchSlug(slug: string) {
    return slug === 'item' ? null : slug
  }

  get bh() {
    const searches: any = process.env.searches

    const slug = this.fixSlug(this.slug)

    return [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.$t('category') + ' - ' + this.$t(searches[slug].label),
        disabled: false,
        to: this.localePath({
          name: 'category-slug',
          params: {
            slug: this.slug,
          },
        }),
        exact: true,
      },
      {
        text: this.$t(this.label),
      },
    ]
  }

  async mounted() {
    const routeQuery: any = this.$route.query
    routeQuery.size = -1
    routeQuery.sort = '_score:desc'

    const { data } = await this.$localEs.search(
      routeQuery,
      this.fixSlug(this.slug)
    )

    const field = this.$route.params.field

    const buckets = data.aggregations[field].buckets

    const items = []

    //グラフ用
    const data2 = []
    const labels = []

    for (const item of buckets) {
      items.push({
        label: this.fix(item.key),
        value: item.doc_count,
        key: item.key,
      })

      data2.push(item.doc_count)
      labels.push(this.fix(item.key))
    }

    this.items = items

    // -----

    this.labels = labels
    this.datasets = [{ data: data2, label: this.$t('item') }]

    this.loading = false
  }

  getQuery(value: string) {
    const obj: any = {}
    obj['fc-' + this.$route.params.field] = value
    return obj
  }

  fix(value: string) {
    if (value.includes(':')) {
      value = value.split(':')[1]
    }
    return value
  }

  get label() {
    const field: any = this.$route.params.field
    const aggs: any = this.aggs
    return aggs[field].label
  }

  head() {
    return {
      title:
        this.$t('category') + ' - ' + this.$t(this.slug) + ' : ' + this.label,
    }
  }
}
</script>
<style>
mark {
  background-color: #ffc168;
}
</style>
