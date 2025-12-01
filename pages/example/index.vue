<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5 mb-10">
      <h2 class="mb-5">{{ title }}</h2>

      <p>
        {{ $t('example_intro') }}
      </p>

      <div class="mt-5 mt-10" v-for="(item2, key) in items2" :key="key">
        <h3 class="mb-5">{{ item2.label }}</h3>
        <p class="mb-5" v-html="item2.description"></p>
        <v-row>
          <v-col
            cols="6"
            md="3"
            v-for="(item, key2) in item2.value"
            :key="key2"
          >
            <nuxt-link :to="localePath(item.value)">
              <v-img
                max-height="150"
                contain
                :src="item.image || baseUrl + '/img/icons/no-image.webp'"
                style="height: 150px"
                width="100%"
                class="grey lighten-2"
              />
            </nuxt-link>
            <nuxt-link :to="localePath(item.value)">
              <h3 class="mt-2">{{ fix(item.label) }}</h3>
            </nuxt-link>
          </v-col>
        </v-row>
      </div>

      <!--
      <div class="mt-10">
        <h3 class="mb-5">その他</h3>

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
            <nuxt-link :to="localePath(item.to)">
              <h3 class="mt-2">{{ item.label }}</h3>
            </nuxt-link>
          </v-col>
        </v-row>
      </div>
      -->
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
  title: any = this.$t('example')

  baseUrl: any = process.env.BASE_URL

  items2: any = process.env.example

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
          'fc-mtag': '建物',
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

  fix(str: string) {
    if (str.includes(':')) {
      return str.split(':')[1]
    } else {
      return str
    }
  }

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
