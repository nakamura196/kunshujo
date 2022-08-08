<template>
  <div>
    <Breadcrumbs :items="bh" />
    <template v-if="thumbnail">
      <div style="background-color: #f5f5f5">
        <v-container class="py-0" :style="`height: ${height}px`">
          <v-img
            mx-auto
            contain
            :src="thumbnail"
            :style="`height: ${height}px`"
          ></v-img>
        </v-container>
      </div>
    </template>

    <v-container class="mt-5">
      <h1 class="mb-5">
        {{ title }}
      </h1>

      <p
        v-if="item.description && item.description[0]"
        v-html="$utils.formatArrayValue(item.description, '<br />')"
      ></p>

      <p class="text-center">
        <v-btn v-if="false" icon class="ma-1" target="_blank" :href="rdfUrl"
          ><img :src="baseUrl + '/img/icons/rdf-logo.svg'" width="24px"
        /></v-btn>

        <v-btn
          v-if="false"
          icon
          class="ma-1"
          target="_blank"
          :href="baseUrl + '/data/item/' + $route.params.id + '.json'"
          ><img :src="baseUrl + '/img/icons/json-logo.svg'" width="24px"
        /></v-btn>

        <span class="mx-2"></span>

        <v-menu offset-y :close-on-content-click="false">
          <template v-slot:activator="{ on }">
            <v-btn class="ma-1" color="primary" depressed icon v-on="on">
              <v-icon>mdi-comment-quote-outline</v-icon>
            </v-btn>
          </template>
          <v-card flat width="400px">
            <div class="pt-4 px-4">
              <h4 class="mb-2">{{ $t('citation') }}</h4>
              <p>{{ myText }}</p>
            </div>
            <v-card-actions>
              <v-spacer />
              <v-btn rounded color="primary" @click="writeToClipboard()">
                {{ $t('citation_copy') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>

        <ResultOption
          class="ma-1"
          :item="{
            label: title,
            url: url,
          }"
        />
      </p>

      <v-row>
        <v-col cols="12" md="4"></v-col>
        <v-col cols="12" md="4">
          <v-btn
            class="my-10"
            large
            rounded
            block
            color="primary darken-2"
            depressed
            :to="localePath(to)"
          >
            <template v-if="$i18n.locale === 'ja'">
              {{ Number(item.count) }} 件のアイテムを検索
            </template>
            <template v-else> Search {{ Number(item.count) }} items </template>
            <v-icon class="ml-1">mdi-magnify</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" md="4"></v-col>
      </v-row>

      <v-simple-table class="pt-5">
        <template #default>
          <tbody>
            <template v-for="(agg, key) in aggs">
              <tr
                v-if="
                  !hide[agg.value] &&
                  item[agg.value] &&
                  item[agg.value].length > 0 &&
                  item[agg.value][0]
                "
                :key="key"
              >
                <td class="py-4">
                  <v-row>
                    <v-col cols="12" sm="3">{{ $t(agg.label) }}</v-col>
                    <v-col cols="12" sm="9">
                      <span
                        v-for="(value, key2) in item[agg.value]"
                        :key="key2"
                      >
                        <template v-if="agg.type === 'text'">
                          <template v-if="agg.value === 'jk'">
                            <v-btn
                              class="ma-1"
                              rounded
                              color="primary darken-2"
                              depressed
                              target="_blank"
                              :href="`https://japanknowledge.com/psnl/display/?lid=${value}`"
                              >Personal
                              <v-icon class="ml-2"
                                >mdi-exit-to-app</v-icon
                              ></v-btn
                            >

                            <v-btn
                              class="ma-1"
                              rounded
                              color="primary darken-2"
                              depressed
                              target="_blank"
                              :href="`https://japanknowledge.com/lib/display/?lid=${value}`"
                              >Lib
                              <v-icon class="ml-2"
                                >mdi-exit-to-app</v-icon
                              ></v-btn
                            >

                            <v-btn
                              class="ma-1"
                              rounded
                              color="primary darken-2"
                              depressed
                              target="_blank"
                              :href="`https://japanknowledge-com.utokyo.idm.oclc.org/lib/display/?lid=${value}`"
                              >東京大学限定; EZproxy
                              <v-icon class="ml-2"
                                >mdi-exit-to-app</v-icon
                              ></v-btn
                            >
                          </template>
                          <template v-else>
                            {{ value }}
                          </template>
                        </template>
                        <template v-else-if="agg.type === 'link'">
                          <a :href="value" target="_blank"
                            >{{ value }}
                            <v-icon class="ml-1" color="primary"
                              >mdi-exit-to-app</v-icon
                            ></a
                          >
                        </template>
                        <template v-else>
                          <nuxt-link
                            :to="
                              localePath({
                                name: 'search-slug',
                                params: {
                                  slug: 'entity',
                                },
                                query: getQuery(agg.value, value),
                              })
                            "
                            >{{ value }}</nuxt-link
                          >
                        </template>
                        <br v-if="key2 !== item[agg.value].length - 1" />
                      </span>
                    </v-col>
                  </v-row>
                </td>
              </tr>
            </template>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>

    <v-container class="mt-10 pa-10" v-if="markers.length > 0">
      <MapMain
        :markers="markers"
        :center="center"
        style="width: 100%; height: 300px"
      ></MapMain>
    </v-container>

    <v-sheet
      class="text-center pa-10 mt-10"
      color="grey lighten-4"
      v-if="item.license"
    >
      <small>
        <h3 class="mb-5">{{ $t('license') }}</h3>

        <License :uri="item.license" />
      </small>
    </v-sheet>

    <v-container>
      <div class="mt-10">
        <RelatedEntities ref="ri" :item="item" :index="index" />
      </div>
    </v-container>

    <License></License>

    <v-sheet class="text-center pa-10 my-10">
      <small>
        <h3 class="mb-5">{{ $t('last_updated') }}</h3>

        {{ item._updated }}
      </small>
    </v-sheet>

    <v-snackbar v-model="snackbar" color="primary" :timeout="2000">
      <div class="pa-2 text-center">
        {{ $t('copied') }}
      </div>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ResultOption from '~/components/display/ResultOption.vue'
import MoreLikeThis from '~/components/item/MoreLikeThis.vue'
import SimilarImages from '~/components/item/SimilarImages.vue'
import RelatedEntities from '~/components/item/RelatedEntities.vue'
import License from '~/components/item/License.vue'
import axios from 'axios'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'
import MapMain from '~/components/map/MapMain.vue'

@Component({
  components: {
    ResultOption,
    MoreLikeThis,
    SimilarImages,
    License,
    Breadcrumbs,
    MapMain,
    RelatedEntities,
  },
})
export default class Item extends Vue {
  item: any = {}

  height: number = 300

  hide: any = process.env.hide || {}

  searches: any = process.env.searches

  async asyncData({ payload, app, $axios, params }: any) {
    if (payload) {
      return { item: payload }
    } else {
      const id = app.context.params.id
      /*
      const item = await import(
        `~/static/data/entity/${params.id.replace(':', '-')}.json`
      )
      */
      const index: any = await import(`~/static/data/entity.json`)
      const index2: any = {}

      let item: any = {}
      for (let key in index) {
        const obj: any = index[key]
        const objectID = obj.objectID
        if (objectID === id) {
          item = obj
          //break
        }
        if (objectID) {
          index2[objectID] = obj
        }
      }

      return { item, markers: [], center: null, index: index2 }
    }
  }

  baseUrl: any = process.env.BASE_URL

  snackbar: boolean = false

  // 算出 getter 関数
  get url() {
    // `this` は vm インスタンスを指します
    return this.baseUrl + this.$route.fullPath
  }

  get id() {
    return (this as any).item.objectID
  }

  get title() {
    return (this as any).item.label
  }

  get thumbnail() {
    return (this as any).item.thumbnail
  }

  get myText() {
    const siteName: any = process.env.siteName
    const footer: any = process.env.footer
    if (this.$i18n.locale === 'en') {
      const attribution = this.$t(siteName) + ' - ' + this.$t(footer)
      //const attribution = provided by${(this as any).item.attribution}
      return `"${this.title}" ${attribution} (${this.url})`
    } else {
      const attribution = siteName + ' - ' + footer
      //const attribution = 「${(this as any).item.attribution}」収録
      return `『${this.title}』${attribution} (${this.url})`
    }
  }

  get aggs() {
    return this.searches.entity.detail
  }

  get bh() {
    return [
      {
        text: this.$t('index'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.$t('エンティティ検索'),
        disabled: false,
        to: this.localePath({
          name: 'search-slug',
          params: { slug: 'entity' },
          query: this.$route.query,
        }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }

  getField(prefix: string) {
    switch (prefix) {
      case 'chname':
        return 'agential'
        break
      case 'place':
        return 'place'
        break
      case 'time':
        return 'time'
        break
      case 'org':
        return 'org'
        break
      case 'keyword':
        return 'keyword'
        break
    }
  }

  get to() {
    const id = this.$route.params.id
    const prefix = id.split(':')[0]
    const field = this.getField(prefix)
    const query: any = {}
    query['fc-' + field] = id
    return {
      name: 'search-slug',
      query,
    }
  }

  getQuery(key: string, value: string) {
    const map: any = {}
    map[`fc-${key}`] = value
    return map
  }

  writeToClipboard() {
    navigator.clipboard.writeText(this.myText).catch((e) => {
      console.error(e)
    })
    this.snackbar = true
  }

  head() {
    const title = this.title
    const siteName: any = process.env.siteName
    const footer: any = process.env.footer
    return {
      title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            '『' + title + '』' + this.$t(siteName) + ' - ' + this.$t(footer),
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: (this as any).thumbnail,
        },
      ],
    }
  }
}
</script>
