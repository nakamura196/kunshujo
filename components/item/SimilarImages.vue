<template>
  <div v-if="moreLikeThisData.length > 0">
    <div class="text-center">
      <h3 class="my-5">{{ $t('画像が似ているアイテム') }}</h3>
    </div>
    <HorizontalItems :data="moreLikeThisData" :height="150" />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Watch, Vue } from 'nuxt-property-decorator'
import HorizontalItems from '../display/HorizontalItems.vue'
import axios from 'axios'

@Component({
  components: {
    HorizontalItems,
  },
})
export default class morelikethis extends Vue {
  moreLikeThisData: any[] = []
  baseUrl: any = process.env.BASE_URL

  @Prop({
    required: true,
  })
  item: any

  @Prop({
    default: 'index',
  })
  index: any

  @Prop({
    default: 'relation',
  })
  relation: any

  @Prop({
    default: 'item-id',
  })
  name: any

  mounted() {
    this.moreLikeThis()
  }

  @Watch('itemId')
  watchId(): void {
    this.moreLikeThis()
  }

  async moreLikeThis() {
    let index: any = await axios.get(this.baseUrl + `/data/${this.index}.json`)
    index = index.data

    const indexMap: any = {}
    for (const item of index) {
      indexMap[item.objectID] = item
    }

    const item = this.item

    const manifest = item.manifest
    const spl = manifest.split("/")
    const mid = spl[spl.length - 2]

    let relation: any = await axios.get(this.baseUrl + `/data/relations/${mid}.json`)
    relation = relation.data

    const id = this.item.objectID

    const moreLikeThisData = []

    if (relation[id] && relation[id].images) {
      const items = relation[id].images
      for (const id2 of items) {
        const item = indexMap[id2]

        if (!indexMap[id2]) {
          continue
        }

        moreLikeThisData.push({
          id: id2,
          label: item.label,
          thumbnail: item.thumbnail,
          description: item.tag ? item.tag.join(', ') : null,
          to: {
            name: this.name,
            params: {
              id: id2,
            },
          },
        })
      }
    }

    this.moreLikeThisData = moreLikeThisData
  }
}
</script>
