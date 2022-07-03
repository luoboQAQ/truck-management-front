<template>
  <van-cell>
    <van-row>
      <van-col span="10" class="strong">{{ data.aStart }} → {{ data.aEnd }}</van-col>
      <van-col span="6">（待运输 {{ data.aRemnum }} 吨）</van-col>
    </van-row>
    <van-row type="flex" align="bottom">
      <van-col span="12" class="time">{{ data.aTransdate | moment('LLL') }}</van-col>
      <van-col span="4" offset="6">
        <van-button
          block
          type="primary"
          :to="{name:'receiveorder',params: {aId:data.aId,aRemnum:data.aRemnum}}">
          接单
        </van-button>
      </van-col>
    </van-row>
  </van-cell>
</template>

<script>
export default {
  name: 'GoodCell',
  props: {
    data: {
      type: Object,
      required: true,
      default: function () {
        return {
          aStart: '常州 天宇',
          aEnd: '宿迁 泗洪',
          aTransdate: '2022-06-30T11:45:19+08:00',
          aId: 1,
          aRemnum: 10
        }
      }
    }
  }
}
</script>

<style scoped>
.time {
  font-family: '微软雅黑', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #AEAEAE;
}

.strong {
  font-family: '微软雅黑', serif;
  font-weight: bold;
  font-style: normal;
  font-size: 18px;
}
</style>
