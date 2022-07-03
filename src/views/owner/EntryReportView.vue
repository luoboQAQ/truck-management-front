<template>
  <div>
    <van-form readonly>
      <van-field
        v-model="data.oName"
        name="oName"
        label="客户名称"
      />
      <van-field
        v-model="data.aTransdate"
        name="aTransdate"
        label="发货日期"
      />
      <van-field
        v-model="data.aReccom"
        name="aReccom"
        label="收货单位"
      />
      <van-field
        v-model="data.aStart"
        name="aStart"
        label="出发地"
      />
      <van-field
        v-model="data.aEnd"
        name="aEnd"
        label="目的地"
      />
      <van-field
        v-model="data.aDistance"
        name="aDistance"
        label="运输距离"
      />
      <van-field
        v-model="data.sState"
        name="sState"
        label="运输状态"
      />
      <van-field
        v-model="data.cName"
        label="司机名称"
      />
      <van-field
        v-model="data.cCom"
        label="司机所在公司"
      />
      <van-field
        v-model="data.cLicense"
        name="cLicense"
        label="车号"
      />
      <van-field
        v-model="data.gName"
        name="gName"
        label="货物名称"
      />
      <van-field
        v-model="data.sNum"
        name="sNum"
        label="此次运输数量"
      />
      <van-field
        v-model="data.gNum"
        name="gNum"
        label="货物总数量"
      />
      <van-field
        v-model="data.gUnit"
        name="gUnit"
        label="货物单位"
      />
      <van-field
        v-model="data.sCost"
        name="sCost"
        label="承运运费"
      />
      <van-row style="margin-top: 18px;">
        <van-col span="8" offset="2">
          <van-button round block color="#318b4a" native-type="button" to="soldorders">返回</van-button>
        </van-col>
        <van-col span="8" offset="4">
          <van-button round block color="#318b4a" native-type="button" @click="showDialog = true">评价</van-button>
        </van-col>
      </van-row>
    </van-form>
    <van-dialog v-model="showDialog" title="评分" show-cancel-button @confirm="setFeedBack">
      <p style="text-align:center">喜欢这位司机？不妨为他送上好评哦🥰</p>
      <van-field name="rate" label="评价">
        <template #input>
          <van-rate v-model="rate" />
        </template>
      </van-field>
    </van-dialog>
  </div>
</template>

<script>
import { selectBySid } from '@/api/full'
import { addFeedBack } from '@/api/car'

export default {
  name: 'EntryReportView',
  props: {
    sId: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      data: {
        oName: '',
        aTransdate: '',
        aReccom: '',
        aStart: '',
        aEnd: '',
        aDistance: '',
        cLicense: '',
        cCom: '',
        gName: '',
        sNum: '',
        sCost: ''
      },
      showDialog: false,
      rate: 5
    }
  },
  methods: {
    setFeedBack () {
      let isGood = false
      if (this.rate > 3) {
        isGood = true
      } else if (this.rate === 3) {
        this.$toast.success('操作成功')
        return
      }
      addFeedBack(this.data.cId, isGood).then(res => {
        if (res.code === 200) {
          this.$toast.success('操作成功')
        } else {
          this.$toast.fail('操作失败')
        }
      })
    }
  },
  mounted () {
    selectBySid(this.sId).then(res => {
      if (res.code === 200) {
        this.data = res.data
      } else {
        this.$toast.fail('数据读入错误')
      }
    })
  }
}
</script>

<style scoped>

</style>
