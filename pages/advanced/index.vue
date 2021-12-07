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
    <v-container class="pa-10">
    <SearchAdvanced></SearchAdvanced>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  components: {},
  data() {
    return {

      aggs: process.env.aggs,

      bh: [
        {
          text: this.$t('top'),
          disabled: false,
          to: this.localePath({ name: 'index' }),
          exact: true,
        },
        {
          text: this.$t('detail'),
        },
      ]
    }
  },

  

  
  head() {
    return {
      title: this.$t('detail'),
    }
  },
}
</script>
