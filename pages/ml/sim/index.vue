<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5 mb-10">
      <h2 class="mb-5">{{ title }}</h2>

      <v-text-field
        class="mb-5"
        autocomplete="off"
        v-model="q"
        light
        single-line
        filled
        rounded
        dense
        hide-details
        :clearable="true"
        :clear-icon="mdiClose"
        :placeholder="'http://...'"
      ></v-text-field>

      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        :to="localePath({
          name: 'ml-sim',
          query: {
            url: q,
          },
        })"
        >{{"実行"}}</v-btn
      >

      <v-btn
        class="ma-1"
        color="success"
        rounded
        depressed
        @click="
          q =
            'https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/025/025_0085.tif/1034,426,2040,1533/200,/0/default.jpg'
        "
        >Sample 1: からしづけ
      </v-btn>

      <v-btn
        class="ma-1"
        color="success"
        rounded
        depressed
        @click="
          q =
            'https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/046/046_0051.tif/4147,826,2101,2082/200,/0/default.jpg'
        "
        >Sample 2: 鯛味噌
      </v-btn>

      <div v-if="res" v-html="res.data[0]" class="mt-10"></div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

function toBase64Url(url: string, callback: any) {
  var xhr = new XMLHttpRequest()
  xhr.onload = function () {
    var reader = new FileReader()
    reader.onloadend = function () {
      callback(reader.result)
    }
    reader.readAsDataURL(xhr.response)
  }
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.send()
}

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class about extends Vue {
  title: any = this.$t('similar_search')

  q: any = ''

  res: any = null

  @Watch('$route', { immediate: true })
  watchTmp(newValue: any, oldValue: any) {
    //console.log(newValue)
    const query = newValue.query
    const self = this
    if (query.url) {
      const url = query.url
      //console.log({url})
      toBase64Url(url, function (base64Url: string) {
        //console.log('base64Url : ', base64Url);
        fetch('https://hf.space/embed/nakamura196/ann-kunshujo/+/api/predict', {
          method: 'POST',
          body: JSON.stringify({ data: [base64Url, 10] }),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(function (response) {
            return response.json()
          })
          .then(function (json_response) {
            //console.log(json_response)
            self.res = json_response
          })
      })
    }
  }

  bh: any[] = [
    {
      text: this.$t('top'),
      disabled: false,
      to: this.localePath({ name: 'index' }),
      exact: true,
    },
    {
      text: this.$t('machine_learning'),
      disabled: false,
      to: this.localePath({ name: 'ml' }),
      exact: true,
    },
    {
      text: this.title,
    },
  ]

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
