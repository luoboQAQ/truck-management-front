<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
          v-model="price"
          name="金额"
          label="金额"
          placeholder="请填写金额"
          :rules="[{ required: true, message: '请填写金额' }]"
      >
        <template v-slot:right-icon>
          元
        </template>
      </van-field>
      <van-field
          v-model="id"
          name="编号"
          label="编号"
          placeholder="请填写编号"
          :rules="[{ required: true, message: '请填写编号' }]"
      >
      </van-field>
      <div style="margin: 16px;">
        <van-button @click="onSubmit" round block type="info" native-type="submit" color="green"
                    style="position:fixed; bottom:0;">提交申请
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { fundApp } from '@/api/sign'

export default {
  name: 'FundApplication',
  data () {
    return {
      price: null,
      id: null
    }
  },
  methods: {
    onSubmit () {
      fundApp(this.price, this.id).then(res => {
        if (res.code === 200) {
          this.$toast('成功')
        } else { this.$toast('错误') }
      })
    }
  }
}
</script>

<style scoped>

</style>
