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
  title: any = this.$t('その他の検索')

  items: any[] = [
    {
      label: this.$t('entity'),
      to: {
        name: 'search-slug',
        params: {
          slug: 'entity',
        },
      },
      description: '固有表現（人物、場所、キーワードなど）を検索します。',
    },
    {
      label: this.$t('mtag'),
      to: {
        name: 'search-slug',
        params: {
          slug: 'object',
        },
      },
      description: '機械タグ（Google Cloud Visionを用いて検出した物体）を検索します。',
    },
    {
      label: this.$t('category'),
      to: {
        name: 'category-list',
      },
      description: 'データ数から検索します。',
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
