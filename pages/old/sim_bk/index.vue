<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5 mb-10">
      <h2 class="mb-5">{{ title }}</h2>

      <v-text-field
        class="mb-5"
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
        :placeholder="'http://...'"
      ></v-text-field>

      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        :href="q ? `http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=${encodeURIComponent(`https://d3hfvu5xqm867i.cloudfront.net/ann/kunshujo/?url=${q}`)}&tn=1` : null"
        >{{$t("viewer")}}</v-btn
      >

      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        :href="q ? `https://d3hfvu5xqm867i.cloudfront.net/ann/kunshujo/?url=${q}` : null"
        >{{$t("api")}}</v-btn
      >

      <v-btn
        class="ma-1"
        color="success"
        rounded
        depressed
        @click="
          q =
            'https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/025/025_0085.tif/1034,426,2040,1533/200,/0/default.jpg'
        "
        >Sample 1: からしづけ
      </v-btn>

      <v-btn
        class="ma-1"
        color="success"
        rounded
        depressed
        @click="
          q =
            'https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/046/046_0051.tif/4147,826,2101,2082/200,/0/default.jpg'
        "
        >Sample 2: 鯛味噌
      </v-btn>

      <div class="mt-5">
        <v-img :src="q" contain width="200" height="200" />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import { mdiMagnify, mdiClose } from '@mdi/js'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class Item extends Vue {
  title: any = this.$t('similar_search')

  q: any = ''

  mdiMagnify: string = mdiMagnify
  mdiClose: string = mdiClose

  bh: any[] = [
    {
      text: this.$t('top'),
      disabled: false,
      to: this.localePath({ name: 'index' }),
      exact: true,
    },
    {
      text: this.$t('machine_learning'),
      disabled: false,
      to: this.localePath({ name: 'ml' }),
      exact: true,
    },
    {
      text: this.title,
    },
  ]

  head() {
    return {
      title: this.title,
    }
  }
}
</script>
