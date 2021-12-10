<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5 mb-10">
      <h2 class="mb-5">{{ title }}</h2>

      <h3 class="mt-10 mb-5">画像をアップロードする</h3>

      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        href="http://app.ldas.jp:5003"
        >登録画面</v-btn
      >

      <h3 class="mt-10 mb-5">URLを使う</h3>

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

      <!--
      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        :href="q ? `http://app.ldas.jp:5003/?image=${q}` : null"
        >画像取得</v-btn
      >

      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        :href="q ? `http://app.ldas.jp:5003/v1/predict?image=${q}` : null"
        >API利用</v-btn
      >
      -->

      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        :href="q ? `http://app.ldas.jp:5003/?image=${q}&viewer=1` : null"
        >ビューアでみる</v-btn
      >

      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        :href="q ? `http://app.ldas.jp:5003/?image=${q}` : null"
        >API利用</v-btn
      >

      <v-btn
        class="ma-1"
        color="success"
        rounded
        depressed
        @click="
          q =
            'https://www.dl.ndl.go.jp/api/iiif/2586696/R0000009/full/600,/0/default.jpg'
        "
        >Sample 1: 国立国会図書館
      </v-btn>

      <v-btn
        class="ma-1"
        color="success"
        rounded
        depressed
        @click="
          q =
            'https://archive.wul.waseda.ac.jp/kosho/ne01/ne01_00834//ne01_00834_p0005.jpg'
        "
        >Sample 2: 早稲田大学
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
  title: any = this.$t('物体検出')

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
