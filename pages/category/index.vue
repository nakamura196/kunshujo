<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5">
      <h2 class="mb-5">{{ $t('category') }}</h2>

      <p>
        正保の琉球国絵図３舗に書き込まれた文字などの情報（全895件）につき、島や村などの分類によって検索できます。
      </p>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>{{ $t('name') }}</th>
              <!-- <th></th> -->
            </tr>
          </thead>
          <tbody>
            <template v-for="(agg, key) in aggs">
              <tr :key="key" v-if="!agg.hide">
                <td>
                  <nuxt-link
                    :to="
                      localePath({
                        name: 'category-slug',
                        params: { slug: key },
                      })
                    "
                  >
                    {{ agg.label }}
                  </nuxt-link>
                </td>

                <!--
                    <td>
                      {{100}} {{$t("results")}}
                    </td>
                    -->
              </tr>
            </template>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

export default {
  components: {
    Breadcrumbs,
  },
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
          text: this.$t('category'),
        },
      ],
    }
  },

  head() {
    return {
      title: this.$t('category'),
    }
  },
}
</script>
