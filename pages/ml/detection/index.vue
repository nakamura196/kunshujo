<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5 mb-10">
      <h2 class="mb-5">{{ title }}</h2>

      <h3 class="mt-10 mb-5">{{$t("upload")}}</h3>

      <div class="mb-5">
        <input
          @change="selectedFile"
          type="file"
          name="file"
          truncate-length="15"
        />
      </div>

      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        @click="upload"
        >{{$t("upload")}}</v-btn
      >

      <div v-show="uploadedBase64">
        <v-img :src="uploadedBase64" contain width="200" height="200" />
      </div>

      <template v-if="loading">
        
        <div class="text-center pa-10">
        <v-progress-circular
          indeterminate
          color="primary"
        />
        </div>
      </template>
      <template v-else>
        <v-img class="my-5" :src="previewBase64" />
      </template>

      <h3 class="mt-10 mb-5">URL</h3>

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

      <!--
      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        :href="q ? `http://app.ldas.jp:5003/?image=${q}` : null"
        >画像取得</v-btn
      >

      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        :href="q ? `http://app.ldas.jp:5003/v1/predict?image=${q}` : null"
        >API利用</v-btn
      >
      -->

      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        :href="
          q
            ? `https://da.dl.itc.u-tokyo.ac.jp/mirador/?manifest=https://d3hfvu5xqm867i.cloudfront.net/yolo/kunshujo/?url=${q}&annotationState=1`
            : null
        "
        >{{$t("viewer")}}</v-btn
      >

      <v-btn
        class="ma-1"
        color="primary darken-2"
        rounded
        depressed
        :href="
          q
            ? `https://d3hfvu5xqm867i.cloudfront.net/yolo/kunshujo/?url=${q}`
            : null
        "
        >{{this.$t("api")}}</v-btn
      >

      <v-btn
        class="ma-1"
        color="success"
        rounded
        depressed
        @click="
          q =
            'https://www.dl.ndl.go.jp/api/iiif/2586696/R0000009/full/600,/0/default.jpg'
        "
        >Sample 1: 国立国会図書館
      </v-btn>

      <v-btn
        class="ma-1"
        color="success"
        rounded
        depressed
        @click="
          q =
            'https://archive.wul.waseda.ac.jp/kosho/ne01/ne01_00834//ne01_00834_p0005.jpg'
        "
        >Sample 2: 早稲田大学
      </v-btn>

      <v-btn
        class="ma-1"
        color="success"
        rounded
        depressed
        @click="
          q =
            'https://www.kansai-u.ac.jp/Museum/osaka-toshi/img/documents/kakudai/osaka_kashi.jpg'
        "
        >Sample 3: 関西大学
      </v-btn>

      <div>
        <v-img :src="q" contain width="200" height="200" />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import { mdiMagnify, mdiClose } from '@mdi/js'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class Item extends Vue {
  title: any = this.$t('object_detection')

  q: any = ''

  mdiMagnify: string = mdiMagnify
  mdiClose: string = mdiClose

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
    return {
      title: this.title,
    }
  }

  uploadFile: any = null
  uploadedBase64: any = ""
  previewBase64: any = ''
  loading: boolean = false

  async selectedFile(e: any) {
    // 選択された File の情報を保存しておく
    e.preventDefault()
    let files = e.target.files
    //this.uploadFile = files[0]
    let res: any = await toBase64(files[0])
    this.uploadedBase64 = res
  }

  async upload() {
    this.loading = true
    /*
    let formData = new FormData();
    formData.append('data', this.uploadFile);
    let config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                };
    const {data} = await axios.post('https://d3hfvu5xqm867i.cloudfront.net/yolo/kunshujo/', formData, config)
    console.log({data})
    */
    
    let res: any = this.uploadedBase64
    const prefix = res.split(',')[0]
    res = res.replace(`${prefix},`, '')

    console.log({ res })

    /*
    let config = {
      headers: {
        'content-type': 'text/plain',
      },
    }

    const { data } = await axios.post(
      'https://d3hfvu5xqm867i.cloudfront.net/overall/detect',
      { data: res },
      config
    )
    */
    //console.log({ data })
    

    
    var config: any = {
      method: 'post',
      url: 'https://d3hfvu5xqm867i.cloudfront.net/overall/detect',
      headers: {
        'Content-Type': 'text/plain',
      },
      data: res,
    }

    const {data} = await axios(config)
    /*
      .then(function (response) {
        console.log(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })
    */
    /*
    */

    console.log({data})

    this.previewBase64 = `data:image/jpeg;base64,${data.content}`

    this.loading = false
  }
}

const toBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
</script>
