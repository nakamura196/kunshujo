<template>
  <div>
    <section class="mb-5">
      <v-parallax :src="top" height="300">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-center">
            <b>{{ siteName }}</b>
          </h1>
          <v-btn
            large
            class="mt-5"
            :to="localePath({ name: 'search' })"
            color="primary"
            >{{ $t('try_out') }}</v-btn
          >
        </v-layout>
      </v-parallax>
    </section>

    <v-container class="mt-10">
      <div class="mb-5 pb-5 text-center">
        <!-- <h1>{{ $t(siteName) }}</h1> -->
        <p class="py-5" v-html="siteDesc"></p>
      </div>

      <div v-if="menu.length > 0">
        <v-row>
          <template v-for="(obj, key) in menu">
            <v-col cols="6" :md="3" :key="key" v-if="obj.top">
              <v-card flat no-body class="mb-2">
                <component
                  :is="obj.to ? 'nuxt-link' : 'a'"
                  :href="obj.href || null"
                  :target="obj.blank ? '_blank' : null"
                  :to="obj.to ? localePath(obj.to) : null"
                >
                  <template v-if="obj.img">
                    <div
                      class="text-center grey lighten-2"
                      style="height: 150px"
                    >
                      <v-img contain style="height: 150px" :src="obj.img" />
                    </div>
                  </template>
                  <template v-else>
                    <div
                      class="text-center grey lighten-2 pa-10"
                      style="height: 150px"
                    >
                      <v-icon size="75">{{ obj.icon }}</v-icon>
                    </div>
                  </template>
                </component>

                <div class="pa-2 pt-4">
                  <h3>
                    <component
                      :is="obj.to ? 'nuxt-link' : 'a'"
                      :href="obj.href || null"
                      :target="obj.blank ? '_blank' : null"
                      :to="obj.to ? localePath(obj.to) : null"
                    >
                      {{ $t(obj.label) }}
                    </component>
                  </h3>
                  <div class="mt-2" v-if="obj.description">
                    {{ obj.description }}
                    <div class="mt-2" v-if="obj.to2 || obj.href2">
                      <v-btn
                        :to="localePath(obj.to2 || null)"
                        :href="obj.href2 || null"
                        :target="obj.target2 || null"
                        rounded
                        color="primary darken-2"
                        depressed
                        >{{ $t(obj.label2) }}
                        <v-icon class="ml-1" v-if="obj.target2"
                          >mdi-exit-to-app</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </div>

      <v-card flat class="my-5" v-if="false">
        <v-card-title>
          <h2>{{ $t('updates') }}</h2>
        </v-card-title>
        <v-card-text>
          <ul class="text--primary">
            <li>2021年XX月XX日: プロトタイプシステムを公開しました。</li>
          </ul>
        </v-card-text>
      </v-card>

      <br />
    </v-container>

    <v-sheet color="grey lighten-3" class="">
      <v-container class="mt-5 py-10">
        <v-card-title>
          <h2>{{ $t('updates') }}</h2>
        </v-card-title>
        <v-card-text>
          <ul class="text--primary">
            <li>2021年12月3日: システムを公開しました。</li>
          </ul>
        </v-card-text>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class about extends Vue {
  baseUrl: any = process.env.BASE_URL
  siteName: any = (this as any).$t(process.env.siteName)
  siteDesc: any = process.env.siteDesc
  top: any = process.env.top
  visualization: any = process.env.visualization

  items: any = []

  menu: any = process.env.menu

  head() {
    const title = this.siteName
    return {
      titleTemplate: null,
      title,
    }
  }
}
</script>
