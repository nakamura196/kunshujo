<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5 mb-10">
      <h2 class="mb-5">{{ title }}</h2>
      <p>
        正保の琉球国絵図３舗につき、絵図の画像データの閲覧と、書き込まれた文字の検索ができます。
      </p>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">{{ $t('name') }}</th>
              <th class="text-center">
                {{ /*$t('name')*/ '検索結果一覧を表示' }}
              </th>
              <th class="text-center">
                {{ /*$t('name')*/ '検索結果一覧（絵図表示）' }}
              </th>
              <!-- <th class="text-left">{{ $t('地図') }}</th> -->
              <th class="text-center">
                {{ /*$t('map')*/ '絵図をそのまま見る' }}
              </th>

              <!--
              <th class="text-left">{{ $t('name') }}</th>
              
              <th class="text-left">{{ $t('map') }}</th>
              <th class="text-left">{{ "現代地図" }}</th>
              -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in objList" :key="item.id">
              <td class="text-center">
                {{ item.label }}
              </td>
              <td class="text-center">
                <nuxt-link
                  :to="
                    localePath({
                      name: 'search',
                      query: {
                        'fc-図': item.label,
                        layout: 'table',
                      },
                    })
                  "
                  ><v-icon class="mr-2" color="primary"
                    >mdi-table</v-icon
                  ></nuxt-link
                >
              </td>
              <!--
              <td>
                <a
                  :href="`http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=https://static.toyobunko-lab.jp/suikeichuzu_data/curation/${item.id}.json&mode=annotation&lang=ja`"
                  >IIIF Curation Viewer</a
                >
              </td>
              -->
              <td class="text-center">
                <nuxt-link
                  :to="
                    localePath({
                      name: 'search',
                      query: {
                        'fc-図': item.label,
                        layout: 'map',
                      },
                    })
                  "
                  ><v-icon class="mr-2" color="primary"
                    >mdi-map</v-icon
                  ></nuxt-link
                >
              </td>
              <td class="text-center">
                <a
                  target="_blank"
                  :href="`${m}?manifest=${p}${item.id}/manifest.json`"
                  ><v-icon class="mr-2" color="primary">mdi-image</v-icon></a
                >
              </td>
              <!--
              <td>
                <a
                    :href="`https://nakamura196.github.io/i3/map/?curation=${curationPrefix}/${item.id}.json`"
                    >IIIF Curation Content Search Viewer</a
                  >
              </td>
              <td>
                <nuxt-link :to="localePath({name : 'map-id', params : {id : item.id}})">閲覧</nuxt-link>
              </td>
              -->
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'
@Component({
  components: {
    Breadcrumbs,
  },
})
export default class Item extends Vue {
  curationPrefix: any = process.env.DATA_URL + '/curation'
  iiifPrefix: any = process.env.DATA_URL + '/iiif'
  baseUrl: any = process.env.BASE_URL
  title: any = this.$t('list_')
  siteDesc: any = process.env.siteDesc
  top: any = process.env.top

  m: string = 'https://clioapi.hi.u-tokyo.ac.jp/mirador/'
  p: string =
    'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/iiif/'

  viewerUrl = process.env.viewerUrl

  get objList() {
    const objList = []
    const settings: any = process.env.settings
    for (const id in settings) {
      const obj = settings[id]
      obj.id = id
      objList.push(obj)
    }
    return objList
  }

  get bh() {
    return [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: (this as any).title,
      },
    ]
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
