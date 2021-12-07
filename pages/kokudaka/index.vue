<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5" fluid>
      <h2 class="mb-5">{{ title }}</h2>

      <p>
        正保の琉球国絵図３舗に書き込まれた村や島・間切（琉球の広域行政単位）ごとの石高を一覧にしています。石未満は切り捨てとし、「石高（数字）」により昇順・降順の並べ替えが可能なほか、「詳細」をクリックすると該当する絵図の画像が表示されます。
      </p>

      <v-row class="mt-5">
        <v-col md="6" cols="12">
          <v-data-table
            :headers="headers"
            :items="items"
            :sort-by="['valueNumber']"
            :sort-desc="[true]"
          >
            <template v-slot:item.map="{ item }">
              <!--
              <v-btn @click="selectMap(item.manifestId)">
                {{ item.map }}
              </v-btn>
              -->
              <a @click="selectMap(item.manifestId)">
                {{ item.map }}
              </a>
            </template>

            <template v-slot:item.label="{ item }">
              <a @click="selectMap(item.manifestId, item.canvas, item.xywh)">
                {{ item.label }}
              </a>
            </template>

            <template v-slot:item.valueNumber="{ item }">
              <v-chip :color="item.color" dark>
                {{ item.valueNumber }}
              </v-chip>
            </template>

            <template v-slot:item.id="{ item }">
              <nuxt-link
                :to="
                  localePath({
                    name: 'item-id',
                    params: {
                      id: item.id,
                    },
                  })
                "
              >
                {{ '詳細' }}
              </nuxt-link>
            </template>
          </v-data-table>
        </v-col>
        <v-col md="6" cols="12">
          <!-- <a :href="curationUri" target="_blank">{{curationUri}}</a> -->

          <iframe
            allowfullscreen
            frameborder="0"
            :src="curationUri"
            width="100%"
            height="600px"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class Item extends Vue {
  title: any = this.$t('石高')

  baseUrl: any = process.env.BASE_URL

  viewerUrl: string =
    this.baseUrl === ''
      ? this.baseUrl + '/icv/'
      : 'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/icv/'

  curationUri: string =
    this.viewerUrl +
    '?curation=' +
    this.baseUrl +
    '/data/curation/test.json&mode=annotation&full=1'

  headers: any[] = [
    { text: '名前', value: 'label' },
    { text: '絵図', value: 'map' },
    { text: '石高', value: 'valueString' },
    { text: '石高（数字）', value: 'valueNumber' },
    { text: '', value: 'id' },
  ]

  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return { item: payload }
    } else {
      const response = await $axios.$get(
        process.env.BASE_URL + '/data/curation/test.json'
      )
      const items = response

      const items2 = []

      for (const selection of items.selections) {
        const manifest = selection.within['@id']
        const manifestId = manifest.split('/iiif/')[1].split('/')[0] //要注意
        for (const member of selection.members) {
          const metadata = member.metadata

          const resource = metadata[0].value[0].resource
          const chars = resource.chars

          const value = chars.split('<br/>')[1]
          const spl = value.replace('）', '（').split('（')
          const valueString = spl[0]
          const valueNumber = Number(spl[1])

          const color =
            '#' + resource.marker['@id'].split('/img/')[1].split('.')[0]

          const spl2 = member['@id'].split('#xywh=')

          const item = {
            id: metadata[0].value[0]['@id'].split('/item/')[1],
            label: member.label,
            map: metadata[1].value,
            valueString,
            valueNumber,
            color,
            manifestId,
            canvas: spl2[0],
            xywh: spl2[1],
          }
          items2.push(item)
        }
      }

      return { items: items2 /*, docs*/ }
    }
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
        text: this.title,
      },
    ]
  }

  selectMap(id: string, canvas: any, xywh: any) {
    let curationUri = this.viewerUrl + '?'

    const config: any = {
      curation: this.baseUrl + '/data/curation/kokudaka/' + id + '.json',
    }

    if (canvas) {
      config.canvas = canvas
      config.xywh = xywh
    }

    for (let key in config) {
      curationUri += key + '=' + config[key] + '&'
    }

    curationUri += 'full=1'

    this.curationUri = curationUri
  }
}
</script>
