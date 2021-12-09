<template>
  <div>
    <Breadcrumbs :items="bh" />
    <template v-if="iframeUrl">
      <div style="background-color: #f5f5f5">
        <v-container class="py-0" style="height: 450px">
          <iframe
            :src="iframeUrl"
            width="100%"
            height="450"
            allowfullscreen
            frameborder="0"
          ></iframe>
        </v-container>
      </div>
    </template>

    <v-container class="mt-5">
      <h1 class="mb-5">
        {{ title }}
      </h1>

      <p class="text-center">
        <v-btn v-if="false" icon class="ma-1" target="_blank" :href="rdfUrl"
          ><img :src="baseUrl + '/img/icons/rdf-logo.svg'" width="24px"
        /></v-btn>

        <v-btn
          v-if="viewerUrl"
          icon
          class="ma-1"
          target="_blank"
          :href="viewerUrl"
          ><img :src="baseUrl + '/img/icons/icp-logo.svg'" width="24px"
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

      <v-simple-table class="pt-5">
        <template #default>
          <tbody>
            <tr v-if="item.description && item.description[0]">
              <td class="py-4">
                <v-row>
                  <v-col cols="12" sm="3">{{ $t('description') }}</v-col>
                  <v-col
                    cols="12"
                    sm="9"
                    v-html="$utils.formatArrayValue(item.description, '<br />')"
                  ></v-col>
                </v-row>
              </td>
            </tr>
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
                                  slug: 'object',
                                },
                                query: getQuery(agg.value, value),
                              })
                            "
                            >{{ formatLabel(value) }}</nuxt-link
                          >
                          <template v-if="value.includes(':')">
                            <v-btn
                              class="ma-1"
                              small
                              color="primary darken-2"
                              rounded
                              depressed
                              :to="
                                localePath({
                                  name: 'entity-id',
                                  params: {
                                    id: value,
                                  },
                                })
                              "
                            >
                              詳細をみる
                            </v-btn>
                          </template>
                        </template>
                        <!-- <br v-if="key2 !== item[agg.value].length - 1" /> -->
                        <span
                          class="mr-5"
                          v-if="key2 !== item[agg.value].length - 1"
                        />
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

    <v-container fluid class="mb-10">
      <div class="mt-10">
        <MoreLikeThis ref="mlt" :item="item" />
      </div>

      <div class="mt-10">
        <SimilarImages ref="mlt2" :item="item" />
      </div>
    </v-container>

    <v-sheet class="text-center pa-10 mt-10" color="grey lighten-4">
      <small>
        <h3 class="mb-5">{{ $t('license') }}</h3>

        <template v-if="$i18n.locale == 'ja'">
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
            ><img
              alt="クリエイティブ・コモンズ・ライセンス"
              style="border-width: 0"
              src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a
          ><br />この作品は<a
            rel="license"
            href="http://creativecommons.org/licenses/by/4.0/"
            >クリエイティブ・コモンズ 表示 4.0 国際 ライセンス</a
          >の下に提供されています。
        </template>
        <template v-else>
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
            ><img
              alt="Creative Commons License"
              style="border-width: 0"
              src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a
          ><br />This work is licensed under a
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
            >Creative Commons Attribution 4.0 International License</a
          >.
        </template>
      </small>
    </v-sheet>

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
  },
})
export default class Item extends Vue {
  item: any = {}

  hide: any = process.env.hide || {}

  async asyncData({ payload, app, $axios, params }: any) {
    if (payload) {
      return { item: payload }
    } else {
      const id = app.context.params.id

      //const index = await import(`~/static/data/index.json`)

      const { data } = await axios.get(process.env.BASE_URL + `/data/gcv.json`)

      const index = data

      let item = {}

      for (const obj of index) {
        if (obj.objectID === id) {
          item = obj
          break
        }
      }

      //const item = await import(`~/static/data/item/${params.id}.json`)

      const markers: any[] = []
      let center: Number[] = [33, 130]

      return { item, center, markers }
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
    const searches: any = process.env.searches
    const aggs = searches.default.detail
    return aggs
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
        text: this.$t('オブジェクト検索'),
        disabled: false,
        to: this.localePath({
          name: 'search-slug',
          params: { slug: 'object' },
        }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }

  get viewerUrl() {
    const item = (this as any).item
    const manifest = item.manifest
    const memberId = item.member
    const spl = memberId.split('#xywh=')
    return (
      'http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/' +
      //'?curation=' +
      //item.curation +
      '?manifest=' +
      item.manifest +
      '&canvas=' +
      spl[0] +
      '&xywh=' +
      spl[1] +
      '&xywh_highlight=border'
    )
  }

  get iframeUrl() {
    const manifest = (this as any).item.manifest

    const memberId = (this as any).item.member
    return (
      this.baseUrl +
      '/curation/?manifest=' +
      manifest.replace(
        'https://iiif.dl.itc.u-tokyo.ac.jp/repo',
        this.baseUrl + '/data'
      ) +
      '.json' +
      '&canvas=' +
      encodeURIComponent(memberId)
    )
  }

  get rdfUrl() {
    return (
      process.env.DATA_URL +
      '/snorql/?describe=http%3A%2F%2Fexample.org%2Fdata%2F' +
      this.$route.params.id
    )
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

  formatLabel(value: string) {
    if (value.includes(':')) {
      value = value.split(':')[1]
    }
    return value
  }
}
</script>
