<template>
  <div>
    <v-navigation-drawer v-model="drawer" app :temporary="true">
      <v-list>
        <v-list-item :to="localePath({ name: 'index' })">
          <v-list-item-content>
            <span>{{ $t('top') }} </span>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, key) in menu"
          :key="key"
          :to="localePath(item.to)"
          :href="item.href"
          :target="item.target || null"
          link
          exact
        >
          <v-list-item-content>
            <span
              >{{ $t(item.label) }}
              <template v-if="item.target">
                <v-icon class="ml-1">mdi-exit-to-app</v-icon>
              </template></span
            >
          </v-list-item-content>
        </v-list-item>

        <v-subheader
          ><small>{{ $t('language') }}</small></v-subheader
        >
        <v-list-item :to="switchLocalePath('ja')">
          <v-list-item-title>日本語</v-list-item-title>
        </v-list-item>
        <v-list-item :to="switchLocalePath('en')">
          <v-list-item-title>English</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-dialog v-model="dialog2" :transition="false" fullscreen hide-overlay>
      <v-card>
        <v-toolbar flat dark>
          <FullTextSearch :history="false" :head="true" />
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog2 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <History />
        <v-divider />
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary" text :to="localePath({ name: 'history' })">
            {{ $t('history') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-app-bar dark app flat id="bar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!--  v-if="!isMobile" -->
      <v-toolbar-title>
        <nuxt-link
          :to="
            localePath({
              name: 'index',
            })
          "
          style="color: inherit; text-decoration: inherit"
        >
          {{ title }}
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <FullTextSearch v-if="!isMobile" :head="true" />

      <v-spacer></v-spacer>

      <v-btn icon v-if="isMobile" @click="dialog2 = true">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu offset-y v-if="!isMobile">
        <template #activator="{ on }">
          <v-btn depressed btn v-on="on">
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item :to="switchLocalePath('ja')">
            <v-list-item-title>日本語</v-list-item-title>
          </v-list-item>
          <v-list-item :to="switchLocalePath('en')">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- dialog -->
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          <span class="text-h5">{{ $t('detail') }}</span>
        </v-card-title>
        <v-card-text class="py-5">
          <SearchAdvanced
            @close="dialog = $event"
            :showCloseBtn="true"
          ></SearchAdvanced>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Watch } from 'nuxt-property-decorator'
import FullTextSearch from '~/components/search/FullTextSearch.vue'
import History from '~/components/search/History.vue'
import { mdiTranslate } from '@mdi/js'

@Component({
  components: {
    FullTextSearch,
    History,
  },
})
export default class License extends Vue {
  drawer: boolean = false
  baseUrl: string = process.env.BASE_URL || ''

  mdiTranslate: string = mdiTranslate

  dialog: boolean = false

  dialog2: boolean = false

  get title(): any {
    return this.$t(process.env.siteName as any)
  }

  menu: any = process.env.menu

  get isMobile() {
    if (['xs', 'sm'].includes((this as any).$vuetify.breakpoint.name)) {
      return true
    } else {
      return false
    }
  }

  id: any = process.env.BASE_URL + '-' + process.env.siteName

  @Watch('$route')
  watchRoute() {
    this.dialog2 = false
  }
}
</script>
