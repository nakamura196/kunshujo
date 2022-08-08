<template>
  <v-sheet class="text-center pa-10 mt-10" color="grey lighten-4">
      <small>
        <h3 class="mb-5">{{ $t('license') }}</h3>

        <nuxt-link :to="localePath({
          name: 'page-slug',
          params: {
            slug: 'reuse',
          },
        })">{{baseUrl + '/page/reuse'}}</nuxt-link>
      </small>
    </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
  },
})
export default class License extends Vue {
  baseUrl: any = process.env.BASE_URL
}
</script>
