<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <OrderCell v-for="(item,index) in list" :key="index" :data="item" />
    </van-list>
  </div>
</template>

<script>
import OrderCell from '@/components/OrderCell'

export default {
  name: 'SoldOrdersView',
  components: { OrderCell },
  data () {
    return {
      list: [
        {
          aStart: '常州 天宇',
          aEnd: '宿迁 泗洪',
          aDistance: 396,
          aTransdate: '2022-06-30T11:45:19+08:00',
          aCreatdate: '2022-06-29T11:45:19+08:00',
          cLicense: '苏LUS837',
          cParameter: '17.5/13.7米 | 高低板',
          cGoodNum: 5,
          cBadNum: 4,
          cMax: 20,
          cName: '丁超'
        },
        {
          aStart: '江苏 南京',
          aEnd: '江苏 扬州',
          aDistance: 388,
          aTransdate: '2022-06-30T11:45:19+08:00',
          aCreatdate: '2022-06-10T11:45:19+08:00',
          cLicense: '苏AUS837',
          cParameter: '17.5/13.7米 | 高低板',
          cGoodNum: 2,
          cBadNum: 1,
          cMax: 20,
          cName: '王二'
        }
      ],
      loading: false,
      finished: true
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
