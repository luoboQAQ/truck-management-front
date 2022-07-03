<template>
  <div>
<van-steps :active="active">
<van-step>货主信息</van-step>
<van-step>地点日期</van-step>
<van-step>已发请求</van-step>
</van-steps>
  <div class="content">
    <step-one v-if="active === 0" @nextStep="nextStep"  />
    <step-two
        v-if="active === 1"
        @nextStep="nextStep"
        @prevStep="prevStep"/>
    <step-three v-if="active === 2" @prevStep="prevStep" />
  </div>
  </div>
</template>
<script>
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
export default {
  name: 'OverAll',
  components: {
    StepOne,
    StepTwo,
    StepThree
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    nextStep () {
      if (this.active < 2) {
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
