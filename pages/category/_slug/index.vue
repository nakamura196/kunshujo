<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5">
      <h2 class="mb-5">{{ title }}</h2>

      <v-simple-table class="mb-10">
        <template v-slot:default>
          <thead>
            <tr>
              <th>{{ $t('name') }}</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(agg, key) in aggs">
              <tr :key="key" v-if="!agg.hide">
                <td>
                  <nuxt-link
                    :to="
                      localePath({
                        name: 'category-slug-field',
                        params: { slug, field: key },
                      })
                    "
                  >
                    {{ $t(agg.label) }}
                  </nuxt-link>
                </td>
              </tr>
            </template>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Prop, Vue, Component, Watch } from 'nuxt-property-decorator'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class FullTextSearch extends Vue {
  get slug(): any {
    return this.$route.params.slug || 'item'
  }
  get aggs(): any {
    const slug = this.slug
    const slug2 = slug === 'item' ? 'default' : slug
    const searches: any = process.env.searches
    return searches[slug2].aggs
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

  get title() {
    return this.$t('stats') + ' - ' + this.$t(this.$route.params.slug)
  }

  head() {
    return {
      title: this.title,
    }
  }
}
</script>
