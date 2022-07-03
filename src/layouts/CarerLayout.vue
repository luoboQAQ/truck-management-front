<template>
  <nav>
    <van-grid :column-num="3" :clickable="true">
      <van-grid-item text="寻找货源" to="findgood"/>
      <van-grid-item text="成交订单" />
      <van-grid-item text="运输合同" />
      <van-grid-item text="最新收款" />
      <van-grid-item text="未结运费" />
      <van-grid-item text="月结对账" />
    </van-grid>
    <router-view />
  </nav>
</template>

<script>
export default {
  name: 'CarerLayout'
}
</script>

<style scoped lang="less">
/deep/ .van-grid-item__content {
  background-color: rgb(49, 139, 74);
}

/deep/ .van-grid-item__text {
  color: white;
  font-size: 14px;
}

/deep/ .van-grid-item__content--clickable:active {
  background-color: green;
}

/deep/ .choose {
  div {
    border-style: solid;
    border-color: #8cf062;
    border-width: 0 0 2px;

    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
