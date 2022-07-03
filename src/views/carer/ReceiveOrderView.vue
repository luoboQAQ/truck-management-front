<template>
  <div>
    <van-notice-bar mode="closeable">已录入过司机信息？可以直接在下面进行选择😎</van-notice-bar>
    <van-form @submit="onSubmit">
      <van-cell title="点我选择系统中已有的司机" is-link @click="showPicker = true" />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          title="司机姓名"
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm" />
      </van-popup>
      <van-field
        v-model="car.cName"
        :readonly="readonly"
        clearable
        @clear="clean"
        clear-trigger="always"
        name="cName"
        label="司机姓名"
        placeholder="司机姓名"
        :rules="[{ required: true, message: '请填写司机姓名' }]"
      />
      <van-field
        v-model="car.cCom"
        :readonly="readonly"
        name="cCom"
        label="所属公司"
        placeholder="所属公司"
        :rules="[{ required: true, message: '请填写所属公司' }]"
      />
      <van-field
        v-model="car.cMax"
        :readonly="readonly"
        name="cMax"
        type="digit"
        label="货车最大承重"
        placeholder="货车最大承重"
        :rules="[{ required: true, message: '请填写货车最大承重' }]"
      >
        <template #right-icon>
          吨
        </template>
      </van-field>
      <van-field
        v-model="car.cLicense"
        :readonly="readonly"
        name="cLicense"
        label="货车车牌"
        placeholder="货车车牌"
        :rules="[{ required: true, message: '请填写货车车牌' }]"
      />
      <van-field
        v-model="car.cParameter"
        :readonly="readonly"
        name="cParameter"
        label="货车参数"
        placeholder="货车参数"
        :rules="[{ required: true, message: '请填写参数' }]"
      />
      <van-field
        v-model="slip.sCost"
        name="sCost"
        label="运费"
        type="digit"
        placeholder="请输入运费"
        :rules="[
          { required: true, message: '请填写运费' },
          { message: '请输入正整数',validator: (value) => { return parseInt(value)>0; } }
        ]"
      >
        <template #right-icon>
          元
        </template>
      </van-field>
      <van-field
        v-model="slip.sNum"
        name="sNum"
        label="运输数量"
        type="digit"
        placeholder="本次运输的货物重量"
        :rules="[
          { required: true, message: '请填写运输数量' },
          { message: '运输重量超过最大车重',validator: (value) => { return parseInt(value)<=parseInt(this.car.cMax) } },
          { message: '运输重量超过剩余货物量',validator: (value) => { return parseInt(value)<=parseInt(this.aRemnum) } }
          ]"
      >
        <template #right-icon>
          吨
        </template>
      </van-field>
      <van-row style="margin-top: 16px">
        <van-col span="8" offset="2">
          <van-button round block type="primary" native-type="button" @click="clean">清空</van-button>
        </van-col>
        <van-col span="8" offset="3">
          <van-button round block type="primary" native-type="submit">提交</van-button>
        </van-col>
      </van-row>
    </van-form>
  </div>
</template>

<script>
import { insertCar, selectAll } from '@/api/car'
import { insertSlips } from '@/api/slips'

export default {
  name: 'ReceiveOrderView',
  props: {
    aId: {
      type: Number,
      required: true,
      default: -1
    },
    aRemnum: {
      type: Number
    }
  },
  data () {
    return {
      showPicker: false,
      columns: [],
      data: {},
      readonly: false,
      car: {
        cId: '',
        cName: '',
        cCom: '',
        cMax: '',
        cLicense: '',
        cParameter: ''
      },
      slip: {
        aId: '',
        cId: '',
        sCost: '',
        sNum: ''
      }
    }
  },
  methods: {
    onConfirm (value, index) {
      this.showPicker = false
      this.readonly = true
      this.slip.cId = this.data[index].cId
      Object.keys(this.car).forEach(i => { this.car[i] = this.data[index][i] || this.car[i] })
    },
    getData () {
      selectAll().then(res => {
        if (res.code === 200) {
          this.data = res.data
          for (let i = 0; i < this.data.length; i++) {
            this.columns.push(this.data[i].cName)
          }
        }
      })
    },
    clean () {
      this.car.cId = ''
      this.car.cName = ''
      this.car.cMax = ''
      this.car.cParameter = ''
      this.car.cCom = ''
      this.car.cLicense = ''
      this.readonly = false
    },
    onSubmit () {
      if (this.car.cId === '') {
        insertCar(this.car).then(res => {
          if (res.code === 200) {
            this.slip.cId = res.data
            insertSlips(this.slip).then(res => {
              if (res.code === 200) {
                this.$toast.success('成功接单')
                this.$router.go('findgood')
              } else {
                console.error(res.message)
                this.$toast.fail('数据提交失败')
              }
            })
          } else {
            console.error(res.message)
            this.$toast.fail('数据提交失败')
          }
        })
      } else {
        insertSlips(this.slip).then(res => {
          if (res.code === 200) {
            this.$toast.success('成功接单')
            this.$router.go('findgood')
          } else {
            console.error(res.message)
            this.$toast.fail('数据提交失败')
          }
        })
      }
    }
  },
  mounted () {
    if (this.aId === -1) { this.$router.back() }
    this.slip.aId = this.aId
    this.getData()
  }
}
</script>

<style scoped>

</style>
