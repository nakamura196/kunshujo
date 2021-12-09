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
        v-bind="attrs"
        :placeholder="'http://...'"
      ></v-text-field>

      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        :href="q ? `http://app.ldas.jp:5002/search?image=${q}&viewer=1` : null"
        >ビューアでみる</v-btn
      >

      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        :href="q ? `http://app.ldas.jp:5002/search?image=${q}` : null"
        >API利用</v-btn
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

      <div>
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
  title: any = this.$t('類似画像検索')

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
