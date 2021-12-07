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
      <h2 class="mb-10">{{ title }}</h2>

      <grid :items="conv(items.manifests)" />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import Grid from '~/components/image/Grid.vue'

@Component({
  components: {
    Grid,
  },
})
export default class Item extends Vue {
  title: any = this.$t('画像を一覧する')

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

  async asyncData({ payload, app }: any) {
    if (payload) {
      return payload
    } else {
      const result = await axios.get(
        'https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/top.json'
      )
      const items = result.data
      return {
        items,
      }
    }
  }

  head() {
    return {
      title: this.$t('冊子画像'),
    }
  }

  conv(manifests: any[]) {
    const items: any[] = []
    for (const manifest of manifests) {
      items.push({
        href:
          'https://static.toyobunko-lab.jp/suikeichuzu_data/mirador/?manifest=' +
          manifest['@id'],
        label: manifest.label,
        image: manifest.thumbnail,
      })
    }
    return items
  }
}
</script>
