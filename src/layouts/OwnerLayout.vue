<template>
  <div>
    <van-grid :column-num="3" :clickable="true">
      <van-grid-item text="寻找车辆" to="findcar" />
      <van-grid-item text="成交订单" to="soldorders" />
      <van-grid-item text="申请资金" to="fundapp"/>
      <van-grid-item text="支付资金" />
      <van-grid-item text="签收回单" to="signback"/>
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

<style scoped lang="less">
/deep/ .van-grid-item__content {
  background-color: rgb(49, 139, 74);
}

/deep/ .van-grid-item__text {
  color: white;
}

/deep/ .van-grid-item__content--clickable:active{
  background-color: green;
}

</style>
