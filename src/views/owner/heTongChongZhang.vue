<template>
 <div class="scroll-box">
  <div>
<van-search v-model="valueSearch" placeholder="请输入合同号、车号" />
<van-cell is-link @click="showPopup" >选择日期{{currentDate}}</van-cell>
<van-popup v-model="show" position="top">
  <van-datetime-picker
  v-model="currentDate"
  type="date"
  title="选择年月日"
/>

</van-popup>
<van-button type="primary" @click="Search1">搜索</van-button>
  </div>
<div>
</div>
<van-cell-group>
      <table class="tableFixHead">
        <thead style="width: auto">
        <tr class="ligth">
          <th scope="col">车号/日期</th>
          <th scope="col">出发地</th>
          <th scope="col">目的地</th>
          <th scope="col">合同号</th>
          <th scope="col">承运运费</th>
          <th scope="col">扣款</th>
          <th scope="col">已付运费</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="col">{{ heTong.cheHao }}/{{ heTong.date }}</th>
          <th scope="col">{{ heTong.beginLoc }}</th>
          <th scope="col">{{ heTong.endLoc }}</th>
          <th scope="col">{{ heTong.heTongHao }}</th>
          <th scope="col">{{ heTong.chengYunYunFei }}</th>
          <th scope="col">{{ heTong.kouKuan }}</th>
          <th scope="col">{{ heTong.yiFuYunFei }}</th>
        </tr>
        </tbody>
      </table>

</van-cell-group>

      <van-cell-group>
  <van-field v-model="sumMoney" label="累计金额" placeholder="元" />
  <van-field v-model="sumNum" label="累计数量" placeholder="份" />
  <van-button type="primary" @click="handle1">提交</van-button>
</van-cell-group>
    </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'heTongChongZhang',
  data () {
    return {
      heTong: {
        cheHao: '京A-00001',
        date: '1926-08-17',
        beginLoc: '上海',
        endLoc: '理塘',
        heTongHao: 114,
        chengYunYunFei: 514,
        kouKuan: 1919,
        yiFuYunFei: 810
      },
      valueSearch: '',
      show: false,
      currentDate: new Date(2021, 0, 17),
      valueInput: '',
      sumMoney: 0,
      sumNum: 0
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    Search1 () {
      Toast.success('搜索成功')
    },
    handle1 () {
      Toast.success('提交成功')
    }
  }
}

</script>

<style scoped>

</style>
