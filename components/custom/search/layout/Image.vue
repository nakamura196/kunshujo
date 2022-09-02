<template>
  <v-row v-if="items">
    <v-col cols="6" :md="1" v-for="(item, key) in items.hits" :key="key">
      <nuxt-link
      
        :to="
            localePath({
              name,
              params: { id: item._id },
              query: $route.query,
            })
          "
    >
    <!-- :to2="
        localePath({
          name: 'item-id',
          params: { id: item.id },
        })" -->
      <v-img
        contain
        style="height: 150px"
        width="100%"
        class="grey lighten-2"
        
        :src="baseUrl + '/data/images/' + item._id + '.jpg'"
      />
      <!-- :src2="$utils.fixImageUrl(item.image[0])" -->
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'nuxt-property-decorator'

@Component({
  components: {
  },
})
export default class FullTextSearch extends Vue {
  @Prop({})
  items!: any

  baseUrl: any = process.env.BASE_URL

  @Prop({})
  col!: number

  get lang() {
    return this.$i18n.locale
  }

  convItem(item: any) {
    const source = item
    const lang = this.lang
    return {
      id: item.id,
      thumbnail: source.image[0],
    }
  }

  get name() {
    const slug = this.$route.params.slug || 'default'
    const searches: any = process.env.searches
    return searches[slug].name
  }
}
</script>
