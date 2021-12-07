<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5">
      <h2 class="mb-5">{{ title }}</h2>

      <p class="mb-5">
        正保琉球国絵図デジタルアーカイブの地名をまとめて利用するためのデータセットを公開しています。
      </p>

      <v-data-table :headers="headers" :items="items" :items-per-page="-1">
        <template v-slot:item.dwn="{ item }">
          <v-btn icon :href="item['@id']" color="primary">
            <v-icon>mdi-file-download</v-icon>
          </v-btn>
        </template>

        <template v-slot:item.url="{ item }">
          <v-btn
            v-if="item.url"
            color="primary darken-2"
            rounded
            depressed
            class="my-2"
            :href="item.url"
            target="_blank"
            small
          >
            {{ $t('view') }}
            <v-icon class="ml-2">mdi-exit-to-app</v-icon>
          </v-btn>
        </template>
      </v-data-table>

      <v-btn
        class="my-10"
        rounded
        depressed
        color="primary darken-2"
        :to="localePath({ name: 'dictionary' })"
      >
        地名辞書
      </v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'
@Component({
  components: { Breadcrumbs },
})
export default class Item extends Vue {
  title: any = this.$t('dataset')

  get headers(): any[] {
    return [
      {
        text: this.$t('name'),
        value: 'label',
      },
      {
        text: this.$t('format'),
        value: 'type',
      },
      {
        text: this.$t('download'),
        value: 'dwn',
      },
      {
        text: this.$t('viewer'),
        value: 'url',
      },
    ]
  }

  get items(): any[] {
    const items: any[] = []

    const confs: any[] = [
      {
        id: '0001',
        label: '正保琉球国絵図写',
      },
      {
        id: '0002',
        label: '正保琉球国悪鬼納島絵図写',
      },
      {
        id: '0003',
        label: '正保琉球国八山島絵図',
      },
      {
        id: 'top',
        label: '正保琉球国絵図（3絵図）',
      },
    ]

    const baseUrl = process.env.BASE_URL

    for (const conf of confs) {
      const id = conf.id
      items.push({
        '@id': `${baseUrl}/data/curation/${id}.json`,
        label: this.$t(conf.label) + ' ' + this.$t('iiif_curation'),
        type: this.$t('json'),
        url: `https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/icv/?curation=${baseUrl}/data/curation/${id}.json`,
      })

      items.push({
        '@id': `${baseUrl}/data/metadata/${id}.xlsx`,
        label: this.$t(conf.label) + ' ' + this.$t('metadata'),
        type: this.$t('xlsx'),
        url: `https://view.officeapps.live.com/op/view.aspx?src=${baseUrl}/data/metadata/${id}.xlsx`,
      })

      items.push({
        '@id': `${baseUrl}/data/metadata/${id}.csv`,
        label: this.$t(conf.label) + ' ' + this.$t('metadata'),
        type: this.$t('csv'),
      })
    }

    /*
    return [
      {
        '@id':
          'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/curation/0001.json',
        label: this.$t('正保琉球国絵図写'),
        type: this.$t('iiif_curation'),
        url:
          'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/icv/?curation=https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/curation/0001.json',
      },
      {
        '@id':
          'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/curation/0002.json',
        label: this.$t('正保琉球国悪鬼納島絵図写'),
        type: this.$t('iiif_curation'),
        url:
          'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/icv/?curation=https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/curation/0002.json',
      },
      {
        '@id':
          'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/curation/0003.json',
        label: this.$t('正保琉球国八山島絵図'),
        type: this.$t('iiif_curation'),
        url:
          'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/icv/?curation=https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/curation/0003.json',
      },
    ]
    */

    return items
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
