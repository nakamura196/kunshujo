<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5">
      <h2 class="mb-5">{{ title }}</h2>

      <p>東京大学史料編纂所の所蔵する琉球関係の絵図・海図を紹介します。</p>

      <div
        class="mt-10"
        v-for="(collection, key) in items.collections"
        :key="key"
      >
        <h3>{{ collection.label }}</h3>
        <v-row
          class="mt-5"
          v-for="(item, key2) in collection.manifests"
          :key="key2"
        >
          <v-col cols="12" sm="3">
            <a :href="getUrl(item)" target="blank">
              <!-- query, -->
              <v-img
                contain
                max-height="150"
                style="height: 150px"
                width="100%"
                class="grey lighten-2"
                :src="item.thumbnail"
              /> </a
          ></v-col>
          <v-col cols="12" sm="9">
            <h3>
              <a :href="getUrl(item)" target="blank" v-html="item.label"></a>

              <img
                class="ml-2"
                v-if="false && item['@type'] === 'sc:Manifest'"
                width="24px"
                :src="baseUrl + '/img/icons/iiif-logo.svg'"
              />
            </h3>
            <p class="mt-2" v-if="item.attribution">
              <v-chip>{{ item.attribution }}</v-chip>
            </p>
            <div class="mt-2">{{ item.description }}</div>
          </v-col>
        </v-row>
      </div>
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
  title: any = this.$t('関連資料')

  baseUrl: any = process.env.BASE_URL

  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return { item: payload }
    } else {
      const response = await $axios.$get(
        process.env.BASE_URL + '/data/iiif/collection/top.json'
      )
      const items = response

      return { items /*, docs*/ }
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

  getUrl(item: any) {
    if (item['@type'] === 'sc:Manifest') {
      return (
        'https://clioapi.hi.u-tokyo.ac.jp/mirador/' + '?manifest=' + item['@id']
      )
    } else {
      return item['@id']
    }
  }
}
</script>
