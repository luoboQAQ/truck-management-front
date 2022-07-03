<template>
  <nav>
    <van-grid :column-num="3" :clickable="true">
      <van-grid-item text="寻找车辆" to="findcar" :class="{choose: activePage === 1}" />
      <van-grid-item text="成交订单" to="soldorders" :class="{choose: activePage === 2}"/>
      <van-grid-item text="申请资金" to="fundapp"  :class="{choose: activePage === 3}"/>
      <van-grid-item text="回到首页" to="/"/>
      <van-grid-item text="签收回单" to="signback"  :class="{choose: activePage === 4}"/>
      <van-grid-item text="合同冲账" />
    </van-grid>
    <router-view />
  </nav>
</template>

<script>
export default {
  name: 'OwnerLayout',
  computed: {
    activePage () {
      const name = this.$route.name
      let page = 0
      switch (name) {
        case 'findcar':
          page = 1
          break
        case 'soldorders':
        case 'entryreport':
          page = 2
          break
        case 'fundapp':
          page = 3
          break
        case 'signback':
          page = 4
          break
      }
      return page
    }
  }
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
