<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5">
      <h2 class="mb-5">{{ title }}</h2>

      <p>{{ $t('map_description') }}</p>

      <client-only>
        <MapMain
          style="width: 100%; height: 600px"
          class="my-10"
          :zoom="2"
          :markers="markers"
          :center="center"
        ></MapMain>
      </client-only>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MapMain from '~/components/map/MapMain.vue'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'
import axios from 'axios'

@Component({
  components: {
    Breadcrumbs,
    MapMain,
  },
})
export default class Item extends Vue {
  title: any = this.$t("map")

  baseUrl: any = process.env.BASE_URL

  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return { item: payload }
    } else {
      let index: any = await import(`~/static/data/entity.json`)

      const markers = []

      const res: any = {}

      let count: number = 0
      let cLat: number = 0
      let cLng: number = 0

      for (let key in index) {
        const item = index[key]

        if (!item['geo']) {
          continue
        }

        let id = item.objectID
        let label = item.label

        let geo = item['geo']

        let latlng = geo.split(' ')

        let lat = Number(latlng[0])
        let lng = Number(latlng[1])

        if (!res[geo]) {
          res[geo] = {
            id,
            lat,
            lng,
            label,
          }
        }

        cLat += lat
        cLng += lng
        count += 1
      }

      for (let geo in res) {
        const obj = res[geo]

        let content = `
          <p class="iw">
            <a href="${process.env.BASE_URL + '/entity/' + obj.id}">${
          obj.label
        }</a>
          </p>
        `

        content = `
          <p class="iw">
            <a href="${process.env.BASE_URL + '/search?fc-place=' + obj.id}">${
          obj.label
        }</a>
          </p>
        `

        markers.push({
          latlng: [obj.lat, obj.lng],
          content,
        })
      }

      const center = [cLat / count, cLng / count]

      return {
        markers,
        center,
      }
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
}
</script>
