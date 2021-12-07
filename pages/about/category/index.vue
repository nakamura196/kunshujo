<template>
  <div>
    <v-sheet color="grey lighten-2">
      <v-container fluid class="py-4">
        <v-breadcrumbs class="py-0" :items="bh">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-sheet>
    <v-container class="my-5">
      <h2 class="mb-5">{{ title }}</h2>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th v-for="(header, key) in headers" :key="key" class="text-left">
                {{ header.text }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in items" :key="key">
              <td v-for="(header, key2) in headers" :key="key2">
                <template v-if="!['sum', 'name'].includes(header.value)">
                  <nuxt-link :to="localePath({ name: 'search' })">
                    {{ item[header.value] }}
                  </nuxt-link>
                </template>
                <template v-else>
                  {{ item[header.value] }}
                </template>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'

@Component({
  components: {},
})
export default class Item extends Vue {
  title: any = this.$t('地名分類')

  baseUrl: any = process.env.BASE_URL

  legend: any = process.env.legend

  items: any[] = []

  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return { item: payload }
    } else {
      const color: string[] = [
        '#df65b0',
        '#e7298a',
        '#ce1256',
        '#980043',
        '#67001f',
      ]

      /*
      let index = await axios.get(
        process.env.BASE_URL + '/' + process.env.index
      )
      index = index.data
      */
      const index = await import(`~/static/` + process.env.index)

      return { index }
    }
  }

  get bh() {
    return [
      {
        text: this.$t('index'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }

  get headers() {
    const headers = []
    headers.push({
      text: this.$t('絵図'),
      value: 'name',
    })
    for (let key in this.legend) {
      headers.push({
        text: key,
        value: key,
      })
    }

    headers.push({
      text: '合計',
      value: 'sum',
    })

    return headers
  }

  mounted() {
    const index = (this as any).index
    const legend = this.legend

    const res: any = {}

    for (const key in index) {
      const item = index[key]

      try {
        if (!item.objectID[0]) {
          continue
        }
      } catch (error) {
        continue
      }

      const category = item.category[0]
      const map = item['図'][0]

      if (!res[map]) {
        res[map] = {}
      }

      const tmp = res[map]

      if (legend[category]) {
        if (!tmp[category]) {
          tmp[category] = 0
        }
        tmp[category] += 1
      }
    }

    const items = []

    const sums: any = {
      sum: 0,
    }

    for (let name in res) {
      const obj = res[name]
      const item: any = {
        name,
      }
      items.push(item)

      let sum: number = 0

      for (let key in obj) {
        const freq = obj[key]
        item[key] = freq
        sum += freq

        if (!sums[key]) {
          sums[key] = 0
        }
        sums[key] += freq
      }

      item.sum = sum
      sums.sum += sum
    }

    const last: any = {
      name: '合計',
    }
    items.push(last)

    for (let key in sums) {
      last[key] = sums[key]
    }

    this.items = items
  }
}
</script>
