<template>
<div>
  <van-grid :column-num="3">
    <van-grid-item text="寻找车辆" />
    <van-grid-item text="成交订单" />
    <van-grid-item text="申请资金" />
  </van-grid>
  <van-grid :column-num="3">
    <van-grid-item text="支付资金" />
    <van-grid-item text="签收回单" />
    <van-grid-item text="合同冲账" />
  </van-grid>
  <router-view />
</div>
</template>

<script>
export default {
  name: 'OwnerLayout'
}
</script>

<style scoped>

</style>
