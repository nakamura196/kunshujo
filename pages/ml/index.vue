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
          <template v-if="item.href">
            <a :href="item.href" target="_blank">
            <h3>{{ item.label }}</h3>
          </a>
          </template>
          <template v-else>
          <nuxt-link :to="localePath(item.to)">
            <h3>{{ item.label }}</h3>
          </nuxt-link>
          </template>
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
  title: any = this.$t('machine_learning')

  baseUrl: any = process.env.BASE_URL

  items: any[] = [
    {
      label: this.$t('object_detection'),
      /*
      to: {
        name: 'ml-detection',
      },
      */
      href: "https://huggingface.co/spaces/nakamura196/yolov5-kunshujo",
      icon: 'mdi-api',
      description: '物体検出を試します。（Gradio版）',
    },
    
    {
      label: this.$t('similar_search'),
      href: "https://huggingface.co/spaces/nakamura196/ann-kunshujo",
      icon: 'mdi-api',
      description: '類似画像検索を試します。（Gradio版）',
      top: true,
    },
    {
      label: this.$t('similar_search'),
      
      to: {
        name: 'ml-sim',
      },
      /*
      href: "https://huggingface.co/spaces/nakamura196/yolov5-kunshujo",
      */
      icon: 'mdi-api',
      description: '類似画像検索を試します。',
      top: true,
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
