<template>
  <div>
    <div>
      <van-button type="primary" @click="go" size="large">信息录入</van-button>
    </div>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        @load="onLoad"
    >
      <OrderCell v-for="(item,index) in list" :key="index" :data="item" />
    </van-list>
  </div>
</template>

<script>
import OrderCell from '@/components/fc'
import { selectByaState0 } from '@/api/findcar'

export default {
  name: 'FindCarView',
  components: { OrderCell },
  data () {
    return {
      list: [

      ],
      loading: false,
      finished: false,
      error: false,
      page: 1
    }
  },
  methods: {
    onLoad () {
      selectByaState0(this.page, 5).then(res => {
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
    },
    go () {
      this.$router.push('overall')
    }
  }
}
</script>

<style scoped>

</style>
