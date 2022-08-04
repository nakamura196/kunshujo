<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5 mb-10">
      <h2 class="mb-5">{{ title }}</h2>

      <v-row class="mt-5">
        <v-col cols="12" md="4" v-for="(item, key) in items" :key="key">
          <!--
          <v-card
            flat
            outlined
            class="pa-5 text-center"
            :to="localePath(item.to)"
          >
            {{ item.label }}
          </v-card>
          -->
          <nuxt-link :to="localePath(item.to)">
            <h3>{{ item.label }}</h3>
          </nuxt-link>
          <div class="mt-2">
            {{ item.description }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class about extends Vue {
  title: any = this.$t('stats')

  items: any[] = [
    {
      label: '貼り込み資料別',
      to: {
        name: 'category-slug',
        params: {
          slug: 'item',
        },
      },
      description: '貼り込み資料別の集計結果を表示します。',
    },
    {
      label: '固有表現別',
      to: {
        name: 'category-slug',
        params: {
          slug: 'entity',
        },
      },
      description: '固有表現別の集計結果を表示します。',
    },
    {
      label: '機械タグ別',
      to: {
        name: 'category-slug',
        params: {
          slug: 'object',
        },
      },
      description:
        '機械タグ（Google Cloud Visionを用いて検出した物体）別の集計結果を表示します。',
    },
  ]

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

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
