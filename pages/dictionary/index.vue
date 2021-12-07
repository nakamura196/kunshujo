<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="mt-5 mb-10">
      <h2 class="mb-10">{{ title }}</h2>

      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <th>{{ '辞書識別子' }}</th>
              <td>{{ e.identifier[0] }}</td>
            </tr>
            <tr>
              <th>{{ '辞書名' }}</th>
              <td>{{ e.name }}</td>
            </tr>
            <tr>
              <th>{{ '説明' }}</th>
              <td>{{ e.description }}</td>
            </tr>
            <tr>
              <th>{{ '件数' }}</th>
              <td>{{ e.size }}</td>
            </tr>
            <tr>
              <th>{{ '作成者' }}</th>
              <td>
                <a :href="e.creator[0].sameAs">{{ e.creator[0].name }}</a>
              </td>
            </tr>
            <tr>
              <th>{{ 'ライセンス' }}</th>
              <td>
                <a :href="e.license">{{ e.license }}</a>
              </td>
            </tr>
            <tr>
              <th>{{ '出典' }}</th>
              <td>
                <a :href="e.isBasedOn.url">{{ e.isBasedOn.name }}</a>
              </td>
            </tr>
            <tr>
              <th>{{ '辞書CSVファイル' }}</th>
              <td>
                <a :href="e.distribution[0].contentUrl">{{
                  'CSVダウンロード'
                }}</a>
              </td>
            </tr>
            <tr>
              <th>{{ '時間範囲' }}</th>
              <td>
                {{ e.temporalCoverage }}
              </td>
            </tr>
            <tr>
              <th>{{ '空間範囲' }}</th>
              <td class="pa-5">
                <MapMain
                  style="width: 100%; height: 400px"
                  :center="center"
                  :rectangles="rectangles"
                  :zoom="5"
                ></MapMain>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MapMain from '~/components/map/MapMain.vue'
import axios from 'axios'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    MapMain,
    Breadcrumbs,
  },
})
export default class Item extends Vue {
  e: any = {
    '@context': 'https://schema.org/',
    '@type': 'Dataset',
    alternateName: '',
    creator: [
      {
        '@type': 'Organization',
        name: '東京大学史料編纂所',
        sameAs: 'https://www.hi.u-tokyo.ac.jp/',
      },
    ],
    dateModified: '2021-12-02 15:54:06.960970',
    description:
      '東京大学史料編纂所の正保琉球国絵図デジタルアーカイブの地名をまとめて利用するためのデータセットを公開しています。',
    distribution: [
      {
        '@type': 'DataDownload',
        contentUrl:
          'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/metadata/top.csv',
        encodingFormat: 'text/csv',
      },
    ],
    identifier: ['geonlp:hi-ryukyu'],
    isBasedOn: {
      '@type': 'CreativeWork',
      name: '正保琉球国絵図デジタルアーカイブ',
      url: 'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/',
    },
    keywords: ['琉球', '地名辞書'],
    license: 'https://creativecommons.org/licenses/by/4.0/',
    name: '正保琉球国絵図・地名辞書',
    size: 895,
    spatialCoverage: {
      '@type': 'Place',
      geo: {
        '@type': 'GeoShape',
        box: '24.0499285 122.9342772 28.758597 130.019795',
      },
    },
    temporalCoverage: '../..',
    url:
      'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/dictionary/',
  }

  head() {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify(this.e),
          type: 'application/ld+json',
        },
      ],
    }
  }

  get rectangles() {
    const box = this.e.spatialCoverage.geo.box
    const spl = box.split(' ')

    const bounds = [
      [Number(spl[0]), Number(spl[1])],
      [Number(spl[2]), Number(spl[3])],
    ]

    return [
      {
        bounds,
      },
    ]
  }

  get center() {
    const box = this.rectangles[0].bounds
    const x = (box[0][0] + box[1][0]) / 2
    const y = (box[0][1] + box[1][1]) / 2
    return [x, y]
  }

  title: any = this.$t(this.e.name)

  baseUrl: any = process.env.BASE_URL

  get bh() {
    return [
      {
        text: this.$t('index'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.$t('dataset'),
        disabled: false,
        to: this.localePath({ name: 'dataset' }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }
}
</script>
