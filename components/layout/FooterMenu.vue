<template>
  <div>
    <v-footer :dark="true" class="py-5">
      <v-container>
        <v-row>
          <v-col cols="12" :md="3" v-for="(item, key) in menu" :key="key">
            <nuxt-link
              style="color: white; font-size: smaller"
              depressed
              :to="localePath(item.to)"
              :href="item.href"
              :target="item.target || null"
              exact
              >{{ $t(item.label) }}
              <template v-if="item.target">
                <v-icon class="ml-1">mdi-exit-to-app</v-icon>
              </template></nuxt-link
            >
          </v-col>
          <v-col cols="12" :md="3">
            <template v-if="$i18n.locale !== 'en'">
              <nuxt-link
                style="color: white; font-size: smaller"
                :to="switchLocalePath('en')"
              >
                English
              </nuxt-link>
            </template>
            <template v-else>
              <nuxt-link
                style="color: white; font-size: smaller"
                :to="switchLocalePath('ja')"
              >
                日本語
              </nuxt-link>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>

    <v-footer :dark="true" style="background-color: black">
      <v-container>
        <p class="text-center my-5">
          {{ $t(footer) }}
        </p>
      </v-container>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class License extends Vue {
  footer: any = process.env.footer

  menu: any = process.env.menu
}
</script>
