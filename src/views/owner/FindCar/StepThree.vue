<template>
  <div>
  <div>
    <van-row type="flex" justify="center">
      <van-icon name="success" size="200" text-align: center margin auto/>
    </van-row>
    </div>
  <div>
  <van-button type="primary" @click="go" size="large">确定</van-button>
  </div>
  </div>
    </template>
<script>
export default {
  name: 'StepThree',
  data () {
    return {
    }
  },
  methods: {
    go () {
      this.$router.push('findcar')
    }
  }
}
</script>
