<template>
  <div v-if="aggs">
    <template v-for="(conf, key) of confMap">
      <Facet
        v-if="
          isExist(conf.key) &&
          !conf.hide &&
          !conf.key.includes('car-') &&
          aggs[conf.key]
        "
        :agg="aggs[conf.key]"
        :label="conf.label"
        :value="key"
        :isOpen="conf.open || query['fc-' + conf.key] ? 0 : 1"
        :total="aggs['car-' + key] ? aggs['car-' + key].value : -1"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'nuxt-property-decorator'
import Facet from '~/components/search/Facet.vue'

@Component({
  components: {
    Facet,
  },
})
export default class FullTextSearch extends Vue {
  @Prop({})
  aggs!: any

  get query() {
    const query = this.$route.query
    return query
  }

  isExist(key: string): boolean {
    const aggs: any = this.aggs
    const query: any = this.query
    return (aggs[key] && aggs[key].total > 0) || query['fc-' + key]
  }

  get confMap() {
    const slug = this.$route.params.slug || 'default'
    const searches: any = process.env.searches
    return searches[slug].aggs
  }
}
</script>
