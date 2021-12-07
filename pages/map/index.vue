<template>
  <div>
    <Breadcrumbs :items="bh" />

    <v-container class="py-5" fluid>
      <h2 class="mb-5">{{ $t(title) }}</h2>

      <p>
        正保の琉球国絵図３舗を現代地図の上に重ね合わせて表示できます。絵図は島と島との距離を縮めて描いており、そのまま重ねると歪んでしまうため、おもな島ごとに切り出しています。
      </p>

      <!--
      <div id="map-wrap" style="height: 80vh" class="my-2">
        <mapc :markers="markers" :zoom="2" :center="[35.689556, 139.691722]" />
      </div>
      -->
      <iframe
        allowfullscreen
        frameborder="0"
        style="height: 80vh; width: 100%"
        :src="baseUrl + '/leaflet/?isMobile=' + isMobile"
      />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class PageMap extends Vue {
  baseUrl: any = process.env.BASE_URL
  map: any = {}
  markers: any[] = []

  /*
  async asyncData({ payload }: any) {
    if (payload) {
      return { item: payload }
    } else {
      const results = await axios.get(
        process.env.BASE_URL + '/data/spatial.json'
      )
      const markers = []

      for (const label in results.data) {
        const obj = results.data[label]

        const param: any = {}
        const fcField = 'fc-spatial'
        param[fcField] = label

        const marker: any = {
          latlng: [obj.lat, obj.long],
          content: label,
          path: {
            name: 'entity-entity-id',
            params: {
              entity: 'spatial',
              id: label,
            },
          },
        }

        markers.push(marker)
      }

      return {
        markers,
      }
    }
  }
  */

  get title() {
    return this.$t('現代地図')
  }

  get isMobile() {
    if (['xs', 'sm'].includes((this as any).$vuetify.breakpoint.name)) {
      return true
    } else {
      return false
    }
  }

  head() {
    const title = this.title
    return {
      title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
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
        text: this.title,
      },
    ]
  }
}
</script>
