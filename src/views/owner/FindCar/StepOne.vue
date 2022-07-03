<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
          v-model="username"
          name="姓名"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
          v-model="goodsname"
          name="货物名称"
          label="货物名称"
          placeholder="货物名称"
          :rules="[{ required: true, message: '请填写货物名称' }]"
      />
      <van-field
          v-model="goodsnum"
          name="货物数量"
          label="货物数量"
          placeholder="货物数量"
          :rules="[{ required: true, message: '请填写货物数量' }]"
      />
      <van-field
          v-model="goodsunit"
          name="货物单位"
          label="货物单位"
          placeholder="货物单位"
          :rules="[{ required: true, message: '请填写货物单位' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { insertgoods, insertOwner } from '@/api/findcar'
import { Toast } from 'vant'

export default {
  name: 'StepOne',
  data () {
    return {
      username: '',
      goodsname: '',
      goodsnum: '',
      goodsunit: ''
    }
  },
  methods: {
    onSubmit () {
      insertOwner(this.username).then(res => {
        if (res.code === 200) {
          insertgoods(this.goodsname, this.goodsnum, this.goodsunit, this.username).then(res => {
            if (res.code === 200) {
              localStorage.setItem('username', JSON.stringify(this.username))
              localStorage.setItem('goodsnum', JSON.stringify(this.goodsnum))
              // eslint-disable-next-line no-lone-blocks
              { this.$emit('nextStep') }
            }
          })
        } else {
          Toast('插入失败')
        }
      })
    }
  }
}
</script>
