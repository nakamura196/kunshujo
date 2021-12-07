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

    <v-container class="py-5" fluid>
      <h2 class="mb-5">{{ $t('map') }}</h2>
      <iframe allowfullscreen frameborder="0" style="height: 80vh; width: 100%;" :src="mapUrl"/>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component({
  components: {
  },
})
export default class PageMap extends Vue {
  baseUrl: any = process.env.BASE_URL
  map: any = {}
  markers: any[] = []

  get mapUrl(){
    const id = this.$route.params.id
    let url = this.baseUrl + '/leaflet/'
    if(id){
      url += "?id=" + id
    }
    return url
  }

  get title() {
    return this.$t('map')
  }

  head() {
    const title = this.title
    return {
      title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  }

  get bh() {
    return [
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
  }
}
</script>
