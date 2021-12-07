<template>
  <div class="mt-5">
    <v-row>
      <v-col cols="6" md="3" v-for="(item, key) in items.hits" :key="key">
        <v-card flat no-body class="mb-4">
          <nuxt-link
            :to="
              localePath({
                name,
                params: { id: item._id },
              })
            "
          >
            <!-- query, -->
            <v-img
              contain
              max-height="150"
              style="height: 150px"
              width="100%"
              class="grey lighten-2"
              :src="item._source.thumbnail"
            />
          </nuxt-link>
          <div class="pa-4">
            <nuxt-link
              :to="
                localePath({
                  name,
                  params: { id: item._id },
                })
              "
            >
              <h4>{{ item._source.label }}</h4>
            </nuxt-link>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'nuxt-property-decorator'

@Component({})
export default class FullTextSearch extends Vue {
  @Prop({})
  items!: any[]

  get name() {
    const slug = this.$route.params.slug || 'default'
    const searches: any = process.env.searches
    return searches[slug].name
  }
}
</script>
