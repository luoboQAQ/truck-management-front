<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="oName"
        name="oName"
        label="客户名称"
        placeholder="请输入客户名称"
        :rules="[{ required: true, message: '请填写客户名称' }]"
      />
      <van-field
        v-model="aTransdate"
        name="aTransdate"
        label="发货日期"
        placeholder="请输入发货日期"
        :rules="[{ required: true, message: '请填写发货日期' }]"
      />
      <van-field
        v-model="aReccom"
        name="aReccom"
        label="收货单位"
        placeholder="收货单位"
        :rules="[{ required: true, message: '请填写收货单位' }]"
      />
      <van-field
        v-model="aStart"
        name="aStart"
        label="出发地"
        placeholder="出发地"
        :rules="[{ required: true, message: '请填写出发地' }]"
      />
      <van-field
        v-model="aEnd"
        name="aEnd"
        label="目的地"
        placeholder="目的地"
        :rules="[{ required: true, message: '请填写目的地' }]"
      />
      <van-field
        v-model="aDistance"
        name="aDistance"
        label="运输距离"
        placeholder="运输距离"
        :rules="[{ required: true, message: '请填写运输距离' }]"
      />
      <van-field
        v-model="cLicense"
        name="cLicense"
        label="车号"
        placeholder="车号"
        :rules="[{ required: true, message: '请填写车号' }]"
      />
      <van-field
        v-model="gName"
        name="gName"
        label="货物名称"
        placeholder="货物名称"
        :rules="[{ required: true, message: '请填写货物名称' }]"
      />
      <van-field
        v-model="sNum"
        name="sNum"
        label="货物数量"
        placeholder="货物数量"
        :rules="[{ required: true, message: '请填写货物数量' }]"
      />
      <van-field
        v-model="sCost"
        name="sCost"
        label="承运运费"
        placeholder="承运运费"
        :rules="[{ required: true, message: '请填写承运运费' }]"
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
    <van-dialog v-model="showDialog" title="评分" show-cancel-button>
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
export default {
  name: 'EntryReportView',
  data () {
    return {
      oName: '',
      aTransdate: '',
      aReccom: '',
      aStart: '',
      aEnd: '',
      aDistance: '',
      cLicense: '',
      gName: '',
      sNum: '',
      sCost: '',
      showDialog: false,
      rate: 5
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style scoped>

</style>
