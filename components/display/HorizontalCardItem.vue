<template>
  <v-card
    no-body
    :class="horizontal ? '' : 'mb-4'"
    :style="horizontal ? 'width: ' + width + 'px;' : ''"
    flat
    outlined
  >
    <nuxt-link :to="localePath(item.to)">
      <v-img
        :src="item.thumbnail || baseUrl + '/img/icons/no-image.webp'"
        contain
        style="height: 150px"
        width="100%"
        class="grey lighten-2"
      ></v-img>
    </nuxt-link>
    <div
      class="pa-4"
      :style="
        horizontal
          ? 'width: ' +
            width +
            'px; height: ' +
            height +
            'px; overflow-y: auto;'
          : ''
      "
    >
      <nuxt-link :to="localePath(item.to)">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h4 v-html="item.label"></h4>
      </nuxt-link>

      <!-- eslint-disable-next-line vue/no-v-html -->
      <p
        v-if="item.description"
        v-html="item.description"
        class="mt-2 mb-0"
      ></p>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'
import ResultOption from '~/components/display/ResultOption.vue'

@Component({
  components: {
    ResultOption,
  },
})
export default class CardItem extends Vue {
  baseUrl: any = process.env.BASE_URL

  @Prop({ required: true })
  item!: any

  @Prop({
    default: 300,
  })
  width!: number

  @Prop({
    default: 300,
  })
  height!: number

  @Prop({
    default: false,
  })
  horizontal!: boolean
}
</script>
