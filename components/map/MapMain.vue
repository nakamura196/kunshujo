<template>
  <client-only>
    <l-map :zoom="zoom" :center="center" style="z-index: 0">
      <l-control-layers position="topright"></l-control-layers>
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        layer-type="base"
      />

      <l-rectangle
        v-for="(rectangle, key) in rectangles"
        :bounds="rectangle.bounds"
        :l-style="rectangle.style"
        :key="key"
      ></l-rectangle>

      <l-geo-json
        v-if="geojson && Object.keys(geojson).length > 0"
        :geojson="geojson"
        :options="options"
      />

      <l-marker-cluster>
        <l-marker
          v-for="(marker, index) in markers"
          :key="index"
          :lat-lng="marker.latlng"
        >
          <l-popup v-if="marker.content">
            <div v-html="marker.content"></div>
            <!--
            <nuxt-link :to="localePath(marker.path)">{{
              marker.content
            }}</nuxt-link>
            <template v-if="marker.image">
              <v-img
                class="ma-2"
                max-height="150px"
                min-height="90px"
                :src="marker.image"
                contain
              />
            </template>
            -->
          </l-popup>
        </l-marker>
      </l-marker-cluster>
    </l-map>
  </client-only>
</template>

<script lang="ts">
import { Vue, Prop, Watch, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import * as turf from '@turf/turf'

// const Vue2LeafletMarkerCluster = require('vue2-leaflet-markercluster')

let Vue2LeafletMarkerCluster = {}
if (process.client)
  Vue2LeafletMarkerCluster = require('vue2-leaflet-markercluster')

@Component({
  components: {
    'l-marker-cluster': Vue2LeafletMarkerCluster,
  },
})
export default class Map extends Vue {
  @Prop()
  markers!: any[]

  @Prop({ default: 7 })
  zoom!: number

  @Prop({
    default: () => [33, 130],
  })
  center!: number[]

  @Prop({
    default: () => {
      return []
    },
  })
  rectangles!: any[]

  @Prop({
    default: () => {
      return null
    },
  })
  geojson: any

  tileProviders: any[] = [
    {
      name: '地理院タイル',
      visible: true,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    },
  ]
}
</script>
<style>
@import 'leaflet.markercluster/dist/MarkerCluster.css';
@import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
</style>
