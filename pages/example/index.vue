<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5 mb-10">
      <h2 class="mb-5">{{ title }}</h2>

      <v-row class="mt-5">
        <v-col cols="6" md="3" v-for="(item, key) in items" :key="key">
          <nuxt-link :to="localePath(item.to)">
            <v-img
              max-height="150"
              contain
              :src="item.img"
              style="height: 150px"
              width="100%"
              class="grey lighten-2"
            />
          </nuxt-link>
          <a :to="localePath(item.to)">
            <h3 class="mt-2">{{ item.label }}</h3>
          </a>
          <div class="mt-2">
            {{ item.description }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class about extends Vue {
  title: any = this.$t('検索例')

  baseUrl: any = process.env.BASE_URL

  items: any[] = [
    {
      label: '渋沢栄一とのやりとり',
      to: {
        name: 'search-slug',
        query: {
          'fc-agential': 'chname:渋沢栄一',
        },
      },
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Eiichi_Shibusawa.jpg/200px-Eiichi_Shibusawa.jpg',
      description: 'hogehoge',
    },
    {
      label: '建物の検索',
      to: {
        name: 'search-slug',
        params: {
          slug: 'object',
        },
        query: {
          'fc-mtag': 'Building',
        },
      },
      img: 'https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/038/038_0069.tif/5545,3670,904,1064/200,/0/default.jpg',
      description: 'hogehoge',
    },

    /*
    {
      label: '可視化例 2',
      href: 'https://utda.github.io/kunshujo-a/item/pp/',
      img: this.baseUrl + '/img/etc/pixplot.webp',
      description:
        'Yale大学が公開する手法「PixPlot」を用いた可視化を行います。',
    },
    {
      label: '可視化例 3',

      href: 'https://utda.github.io/kunshujo-a/object/pd/',
      img: this.baseUrl + '/img/etc/pd_banner_magnified.webp',
      description: 'NYPLが公開する手法を用いた可視化を行います。',
    },
    {
      label: '可視化例 4',
      href: 'https://utda.github.io/kunshujo-a/object/pp/',
      img: this.baseUrl + '/img/etc/pixplot.webp',
      description:
        'Yale大学が公開する手法「PixPlot」を用いた可視化を行います。',
    },
    */
  ]

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
    const title = this.title
    return {
      title,
    }
  }
}
</script>
