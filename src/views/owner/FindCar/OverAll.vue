<template>
  <div>
<van-steps :active="active">
<van-step>货主信息</van-step>
<van-step>地点日期</van-step>
<van-step>已发请求</van-step>
</van-steps>
  <div class="content">
    <step-one v-if="active === 0" @nextStep="nextStep" @toCheck="toCheck" />
    <step-two
        v-if="active === 1"
        @nextStep="nextStep"
        @toStep3="toStep3"
        @prevStep="prevStep"
        :adjustId="adjustId"
        :remark="remark"/>
    <step-three v-if="active === 2" @prevStep="prevStep" :status="status"/>
  </div>
  </div>
</template>
<script>
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
// import StepThree from '@/views/owner/FindCar/StepThree'
export default {
  name: 'OverAll',
  components: {
    StepOne,
    StepTwo,
    StepThree
  },
  data () {
    return {
      active: 0,
      adjustId: null,
      remark: null,
      status: null
    }
  },
  methods: {
    // handler
    nextStep () {
      if (this.active < 2) {
        this.active += 1
      }
    },
    toStep3 (status) {
      this.status = status
      this.active = 2
    },
    toCheck (adjustId, remark) {
      if (this.active < 2) {
        this.adjustId = adjustId
        this.remark = remark
        this.active += 1
      }
    },
    prevStep () {
      if (this.active > 0) {
        this.active -= 1
      }
    }
  }
}
</script>
