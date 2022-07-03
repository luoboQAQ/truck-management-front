<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      @load="loadData"
    >
      <GoodCell v-for="(item,index) in list" :key="index" :data="item" />
    </van-list>
  </div>
</template>

<script>
import GoodCell from '@/components/GoodCell'
import { selectByaState } from '@/api/aggrement'

export default {
  name: 'FindGoodView',
  components: { GoodCell },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      error: false,
      page: 1
    }
  },
  methods: {
    loadData () {
      selectByaState(this.page, 5, '匹配中').then(res => {
        if (res.code === 200) {
          this.list.push(...res.data)
          this.finished = !res.hasNextPage
          this.page += 1
          this.error = false
        } else {
          this.$toast.fail('加载数据错误')
          console.error(res.message)
          this.finished = true
          this.error = true
        }
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>

</style>
