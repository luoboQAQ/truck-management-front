<template>
  <van-cell>
    <van-row>
      <van-col span="12" class="strong">{{ data.aStart }} → {{ data.aEnd }}</van-col>
      <van-col span="6">（约{{ data.aDistance }}km）</van-col>
      <van-col span="5" style="text-align:right;" class="time">{{ data.aCreatdate | momentNow }}</van-col>
    </van-row>
    <van-row>
      <van-col span="18">
        <van-row>
          <van-col span="7">{{ data.cLicense }}</van-col>
          <van-col class="time">{{ data.aTransdate | moment('YYYY-MM-DD') }}全天</van-col>
        </van-row>
        <van-row>
          <van-col>{{ data.cParameter }} | {{ data.cMax }} 吨</van-col>
        </van-row>
      </van-col>
      <van-col span="5" style="text-align:right">
        <van-icon name="phone" size="40" />
      </van-col>
    </van-row>
    <van-row>
      <van-col span="18">
        <van-row>
          <van-col>
            <van-image
              width="50"
              height="50"
              :src="require('../assets/person.png')"
            />
          </van-col>
          <van-col style="margin-left: 5px;color: #736E68;font-size: 12px;">
            {{ data.cName }}
          </van-col>
          <br />
          <van-col style="margin-left: 5px;">
            <van-tag plain type="primary">好评{{ data.cGoodnum }}次</van-tag>
          </van-col>
          <van-col style="margin-left: 5px;">
            <van-tag plain type="primary">差评{{ data.cBadnum }}次</van-tag>
          </van-col>
        </van-row>
      </van-col>
      <van-col span="5" style="text-align:right;">
        <van-icon name="photograph" size="40" @click="show = (nextState!=null)" />
      </van-col>
    </van-row>
    <van-dialog v-model="show" title="更新状态" show-cancel-button @confirm="updateSlip">
      <div style="margin: 15px">
        <p>当前状态为: {{ data.sState }}</p>
        <p>是否要更新为：{{ nextState }}</p>
      </div>
    </van-dialog>
  </van-cell>
</template>

<script>
import { updateSlips } from '@/api/slips'

export default {
  name: 'CarOrderCell',
  props: {
    data: {
      type: Object,
      required: true,
      default: function () {
        return {
          aStart: '常州 天宇',
          aEnd: '宿迁 泗洪',
          aDistance: 396,
          aTransdate: '2022-06-30T11:45:19+08:00',
          aCreatdate: '2022-06-29T11:45:19+08:00',
          cLicense: '苏LUS837',
          cParameter: '17.5/13.7米 | 高低板',
          cGoodnum: 5,
          cBadnum: 4,
          cMax: 20,
          cName: '丁超',
          sState: ''
        }
      }
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    updateSlip () {
      const slips = { sId: this.data.sId, sState: this.nextState }
      updateSlips(slips).then(res => {
        if (res.code === 200) {
          this.$toast.success('更新成功')
          this.$router.go(0)
        }
      })
    }
  },
  computed: {
    nextState () {
      switch (this.data.sState) {
        case '待出发':
          return '运输中'
        case '运输中':
          return '未签收'
        default:
          return null
      }
    }
  }
}
</script>

<style scoped>
.time {
  font-family: '微软雅黑', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #AEAEAE;
}

.strong {
  font-family: '微软雅黑', serif;
  font-weight: bold;
  font-style: normal;
  font-size: 18px;
}
</style>
