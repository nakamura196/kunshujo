<template>
  <div v-if="moreLikeThisData.length > 0">
    <div class="text-center">
      <h3 class="my-5">{{ $t('related_entities') }}</h3>
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
    required: true,
  })
  index: any

  mounted() {
    this.moreLikeThis()
  }

  @Watch('itemId')
  watchId(): void {
    this.moreLikeThis()
  }

  async moreLikeThis() {
    const { data } = await axios.get(
      process.env.BASE_URL + '/data/entity_relation.json'
    )

    const related = []

    const id = this.item.objectID
    if (data[id]) {
      const items = data[id]
      for (const item of items) {
        const itemId = item['label']
        const metadata = this.index[itemId]
        if (!metadata) {
          continue
        }
        related.push({
          objectID: metadata.objectID,
          thumbnail: metadata.thumbnail,
          label: metadata.label,
          to: {
            name: 'entity-id',
            params: {
              id: metadata.objectID,
            },
          },
          description: `${this.$t('type')}: ${this.$t(
            metadata['タイプ'].join(', ')
          )} / ${this.$t('co_occurrence')}: ${item.value}`,
        })
      }
    }

    this.moreLikeThisData = related
  }
}
</script>
