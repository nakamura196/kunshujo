<template>
  <div>
    <v-sheet color="grey lighten-2">
      <v-container fluid class="py-4">
        <v-breadcrumbs class="py-0" :items="bh">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-sheet>
    <v-container class="my-5">
      <h2 class="mb-5">{{ title }}</h2>

      <p>
        以下ではそれぞれの絵図がどの範囲をカバーしているかを、現代の地図上に示します。
      </p>

      <client-only>
        <MapMain
          :zoom="5"
          :center="center"
          height="600px"
          :geojson="geojson"
        ></MapMain>
      </client-only>

      <div class="mt-4">
        <p>
          領域の色は地名数に対応し、<span
            class="pa-1"
            style="color: white; background: #df65b0"
            >50件〜99件</span
          >
          <span class="pa-1" style="color: white; background: #e7298a"
            >100〜149件以上</span
          >
          <span class="pa-1" style="color: white; background: #ce1256"
            >150件〜199件</span
          >
          <span class="pa-1" style="color: white; background: #980043"
            >200件〜249件</span
          >
          <span class="pa-1" style="color: white; background: #67001f"
            >250件以上</span
          >
          とします。ただし地名数は<a href="#">分類表</a
          >に含まれる地名数であり、その他の地名は含まれない点にご注意下さい。
        </p>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
//import MapMain from '~/components/map/Main.vue'
import axios from 'axios'

import * as turf from '@turf/turf'

@Component({
  components: {
    //MapMain,
  },
})
export default class Item extends Vue {
  title: any = this.$t('領域')

  baseUrl: any = process.env.BASE_URL

  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return { item: payload }
    } else {
      const color: string[] = [
        '#df65b0',
        '#e7298a',
        '#ce1256',
        '#980043',
        '#67001f',
      ]

      /*
      let index = await axios.get(
        process.env.BASE_URL + '/' + process.env.index
      )
      index = index.data
      */
      let index = await import(`~/static/` + process.env.index)

      const res: any = {}

      let count: number = 0
      let cLat: number = 0
      let cLng: number = 0

      for (let key in index) {
        const item = index[key]

        try {
          if (!item.latitude[0]) {
            continue
          }
        } catch (error) {
          continue
        }

        let lat = Number(item.latitude[0])
        let lng = Number(item.longitude[0])

        let curation = item.curation
        let map = item['図'][0]
        let pId = curation.split('/curation/')[1].split('.')[0]

        if (!res[pId]) {
          res[pId] = {
            id: pId,
            label: map,
            list: [],
          }
        }
        res[pId].list.push({
          lat,
          lng,
        })

        cLat += lat
        cLng += lng
        count += 1
      }

      let features: any[] = []

      for (let map in res) {
        const obj = res[map]

        let coordinates: any[] = []
        for (const item of obj.list) {
          coordinates.push([item.lng, item.lat])
        }

        let feature: any = {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [coordinates],
          },
        }

        let index = parseInt(coordinates.length / 50 + '') - 1
        index = index < 0 ? 0 : index

        feature = turf.convex(feature)

        feature.properties = {
          color: 'orange',
          popupContent: `<p class="iw">
          <b>[${obj.id}] ${obj.label}</b>
          <br>
          地名数：${coordinates.length}件
          <!--
          <br>
          <a href="/edo-maps/owariya/05/">地名一覧</a>
          <br>
          <a href="http://codh.rois.ac.jp/edo-maps/iiif-curation-viewer/?curation=http://codh.rois.ac.jp/edo-maps/owariya/05/1850/ndl.json">全体地図</a>
          <br>
          <a href="/edo-maps/owariya/05/georef/">位置合わせ地図</a>
          -->
          </p>`,
          style: {
            color: color[index],
            weight: 4,
            opacity: 0.8,
          },
        }

        features.push(feature)
      }

      const center = [cLat / count, cLng / count]

      return {
        geojson: {
          type: 'FeatureCollection',
          features,
        },
        center,
      }
    }
  }

  created() {}

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
}
</script>
