<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5 mb-10">
      <h2 class="mb-5">{{ title }}</h2>

      <p>
        正保の琉球国絵図３舗と、ほぼ同じ様式で製作された元禄の琉球国絵図（1702年）と天保の琉球国絵図（1838年）とを並列して表示できます。いずれも江戸幕府の命により製作された国絵図の一部で、現在は国立公文書館の所蔵となっています。
        <ul class="mt-2">
          <li>「元禄国絵図琉球国大島」</li>
          <li>「元禄国絵図琉球国沖縄島」</li>
          <li>「元禄国絵図琉球国八重山島」</li>
          <li>「天保国絵図琉球国大島」</li>
          <li>「天保国絵図琉球国沖縄島」</li>
          <li>「天保国絵図琉球国八重山島」</li>
        </ul>
      </p>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>{{ $t('name') }}</th>
              <!-- <th></th> -->
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, key) in items">
              <tr :key="key">
                <td>
                  <a :href="item.value">
                    {{ item.label }}
                  </a>
                </td>

                <!--
                    <td>
                      {{100}} {{$t("results")}}
                    </td>
                    -->
              </tr>
            </template>
          </tbody>
        </template>
      </v-simple-table>

      <h3 class="mt-10">ビューアの使い方</h3>

      <p class="mt-5">以下のボタンを使用することで、画像を回転させることができます。</p>

      <v-img height="150px" contain :src="baseUrl + '/img/etc/mirador3.png'"/>

    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class about extends Vue {

  baseUrl: any = process.env.BASE_URL

  title: any = this.$t('比較')

  map: any = {
    "大島" : [
      "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/iiif/0001/manifest.json",
      "https://www.digital.archives.go.jp/api/iiif/764029/manifest.json",
      "https://www.digital.archives.go.jp/api/iiif/764193/manifest.json"
    ],
    "沖縄島" : [
      "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/iiif/0002/manifest.json",
      "https://www.digital.archives.go.jp/api/iiif/764060/manifest.json",
      "https://www.digital.archives.go.jp/api/iiif/764137/manifest.json"
    ],
    "八重山島" : [
      "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/iiif/0003/manifest.json",
      "https://www.digital.archives.go.jp/api/iiif/764028/manifest.json",
      "https://www.digital.archives.go.jp/api/iiif/764031/manifest.json"
    ]
  }

  get items(): any[] {
    const items = []
    const map = this.map
    for(let key in map){
      let values = map[key]
      let value = `https://ldas-jp.github.io/viewer/mirador?q=[{"manifest":"${values[0]}"},{"manifest":"${values[1]}"},{"manifest":"${values[2]}"}]`
      const item = {
        "label" : key,
        value
      }
      items.push(item)
    }

    /*
    return [
      {
        label: '大島',
        value:
          'https://ldas-jp.github.io/viewer/mirador/?q=%5B%7B%22manifest%22%3A%22https://hi-ut.github.io/ryukyu_data2/iiif/0001/manifest.json%22%7D,%7B%22manifest%22%3A%22https%3A%2F%2Fwww.digital.archives.go.jp%2Fapi%2Fiiif%2F001891947%2Fmanifest.json%22%7D,%7B%22manifest%22%3A%22https%3A%2F%2Fwww.digital.archives.go.jp%2Fapi%2Fiiif%2F001892031%2Fmanifest.json%22%7D%5D',
      },
      {
        label: '沖縄島',
        value:
          'https://ldas-jp.github.io/viewer/mirador?q=%5B%7B%22manifest%22%3A%22https://hi-ut.github.io/ryukyu_data2/iiif/0002/manifest.json%22%7D,%7B%22manifest%22%3A%22https%3A%2F%2Fwww.digital.archives.go.jp%2Fapi%2Fiiif%2F001891946%2Fmanifest.json%22%7D,%7B%22manifest%22%3A%22https%3A%2F%2Fwww.digital.archives.go.jp%2Fapi%2Fiiif%2F001892030%2Fmanifest.json%22%7D%5D',
      },
      {
        label: '八重山島',
        value:
          'https://ldas-jp.github.io/viewer/mirador?q=%5B%7B%22manifest%22%3A%22https://hi-ut.github.io/ryukyu_data2/iiif/0003/manifest.json%22%7D,%7B%22manifest%22%3A%22https%3A%2F%2Fwww.digital.archives.go.jp%2Fapi%2Fiiif%2F001891948%2Fmanifest.json%22%7D,%7B%22manifest%22%3A%22https%3A%2F%2Fwww.digital.archives.go.jp%2Fapi%2Fiiif%2F001892032%2Fmanifest.json%22%7D%5D',
      },
    ]
    */
    return items
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
  
  head() {
    return {
      title: this.title,
    }
  }
}
</script>
