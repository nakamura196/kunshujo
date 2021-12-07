<template>
  <div>
    <v-sheet color="grey lighten-2">
      <v-container fluid class="py-4">
        <v-breadcrumbs class="py-0" :items="bh">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-sheet>
    <v-container class="my-5">
      <h2 class="mb-5">{{ title }}</h2>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left"></th>
              <th class="text-left">分類</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in items" :key="key">
              <td><v-img width="25" :src="prefix + '/' + item + '.png'" /></td>
              <td>{{ item }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
//import MapMain from '~/components/map/Main.vue'

@Component({
  components: {
    //MapMain,
  },
})
export default class Item extends Vue {
  title: any = this.$t('地名分類表')

  prefix: string =
    'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/files/legend/'

  items: string[] = [
    '崎',
    'その他',
    '村',
    '島',
    '干瀬',
    '港湾',
    '航路',
    '間切',
    '渡河点',
    '陸路',
    '方位',
    '山',
    '図示',
    '川',
    '寺社',
    '畾紙',
    '付箋',
    '池',
    '都市',
    '嶋',
  ]

  created() {}

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
