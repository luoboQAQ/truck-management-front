<template>
  <div>
    <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="地区"
        placeholder="请选择所在地区"
        @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
          v-model="cascaderValue"
          title="请选择所在地区"
          :options="options"
          :field-names="fieldNames"
          @close="show = false"
          @finish="onFinish"
      />
    </van-popup>

    <van-field
        v-model="fieldValue1"
        is-link
        readonly
        label="地区"
        placeholder="请选择目的地区"
        @click="show1 = true"
    />
    <van-popup v-model="show1" round position="bottom">
      <van-cascader
          v-model="cascaderValue1"
          title="请选择目的地区"
          :options="options1"
          :field-names="fieldNames1"
          @close="show1 = false"
          @finish="onFinish1"
      />
    </van-popup>
    <van-cell title="选择所需日期" :value="date" @click="show2 = true"/>
    <van-calendar v-model="show2" @confirm="onConfirm"/>
    <van-form @submit="add">
      <van-field
          v-model="reccom"
          name="具体收货地"
          label="具体收货地"
          placeholder="具体收货地"
          :rules="[{ required: true, message: '请填写具体收货地址' }]"
      />
      <div style="margin: 16px;">
        <van-button  type="primary" size="large" native-type="submit">提交</van-button>
      </div>
      <div style="margin: 16px;">
        <van-button type="primary" size="large"  @click="prevStep">
          上一步
        </van-button>
      </div>
    </van-form>
    <div>

    </div>
  </div>
</template>

<script>
import { insertaggrement } from '@/api/findcar'
import moment from 'moment'

export default {
  name: 'StepTwo',
  data () {
    let s
    return {
      date: '',
      show2: false,
      string: s,
      list: [],
      loading: false,
      finished: false,
      reccom: '',
      fieldValue: '',
      cascaderValue: '',
      fieldValue1: '',
      cascaderValue1: '',
      show: false,
      show1: false,
      fieldNames: {
        text: 'name',
        value: 'code',
        children: 'items'
      },
      options: [
        {
          name: '浙江',
          code: '330000',
          items: [{ name: '杭州', code: '330100' }, { name: '温州', code: '330101' }]
        },
        {
          name: '江苏',
          code: '320000',
          items: [{ name: '南京', code: '320100' }, { name: '扬州', code: '320101' }]
        },
        {
          name: '安徽',
          code: '310000',
          items: [{ name: '滁州', code: '310100' }, { name: '合肥', code: '310101' }]
        }
      ],
      fieldNames1: {
        text: 'name',
        value: 'code',
        children: 'items'
      },
      options1: [
        {
          name: '浙江',
          code: '330000',
          items: [{ name: '杭州', code: '330100' }, { name: '温州', code: '330101' }]
        },
        {
          name: '江苏',
          code: '320000',
          items: [{ name: '南京', code: '320100' }, { name: '扬州', code: '320101' }]
        },
        {
          name: '安徽',
          code: '310000',
          items: [{ name: '滁州', code: '310100' }, { name: '合肥', code: '310101' }]
        }
      ]
    }
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish ({ selectedOptions }) {
      this.show = false
      this.fieldValue = selectedOptions.map((option) => option.name).join('/')
    },
    onFinish1 ({ selectedOptions }) {
      this.show1 = false
      this.fieldValue1 = selectedOptions.map((option) => option.name).join('/')
    },
    add () {
      this.username = localStorage.username
      this.goodsnum = localStorage.goodsnum
      insertaggrement(this.username, this.fieldValue, this.fieldValue1, this.date, this.goodsnum, this.reccom).then(res => {
        if (res.code === 200) {
          this.$emit('nextStep')
        }
      })
    },
    prevStep () {
      this.$emit('prevStep')
    },
    formatDate (date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm (date) {
      this.show2 = false
      this.date = moment(date).format('YYYY-MM-DD')
    }

  }
}
</script>

<style scoped>

</style>
