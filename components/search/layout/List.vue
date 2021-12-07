<template>
  <div class="mt-5">
    <v-row v-for="(item, key) in items.hits" :key="key">
      <v-col cols="12" sm="3">
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
          /> </nuxt-link
      ></v-col>
      <v-col cols="12" sm="9">
        <h3>
          <nuxt-link
            :to="
              localePath({
                name,
                params: { id: item._id },
              })
            "
            v-html="$utils.highlightRelation(item._source.label, q)"
          ></nuxt-link>
        </h3>

        <div class="my-2">
          <template v-for="(metadataValue, key) in metadataList">
            <span
              :key="key"
              v-if="
                item._source[metadataValue.value] &&
                item._source[metadataValue.value].length > 0
              "
              ><b>{{ metadataValue.label }}: </b
              >{{ $utils.formatArrayValue(item._source[metadataValue.value]) }}

              <span class="mr-2" v-if="key != metadataList.length - 1"></span>
            </span>
          </template>
          <!--
          <p v-if="false && item._source.description">
            <template v-for="(value, key) in item._source.description">
              <small v-if="value.length < 50" :key="key">
                <span v-html="$utils.highlightRelation(value, q)" />

                <span v-if="key !== item._source.description.length"> / </span>
              </small>
            </template>
          </p>
          <p v-if="false">
            <v-icon>mdi-database</v-icon> {{ item._source.attribution }}
          </p>
          -->
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class FullTextSearch extends Vue {
  @Prop({})
  items!: any[]

  @Prop({})
  q!: any

  get metadataList(): any {
    const searches: any = process.env.searches
    const slug = this.$route.params.slug || 'default'
    return searches[slug].list
  }

  get name() {
    const slug = this.$route.params.slug || 'default'
    const searches: any = process.env.searches
    return searches[slug].name
  }
}
</script>
