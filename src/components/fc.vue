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
          <van-col class="time">{{ data.aTransdate | moment('YYYY-MM-DD') }}全天</van-col>
        </van-row>
        <van-row>
          <van-col>{{ data.aReccom }} | 数量{{ data.aRemnum }} </van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="18">
        <van-row>
          <van-col>
          </van-col>
          <van-col style="margin-left: 5px;color: #736E68;font-size: 12px;">
<!--            丁超-->
          </van-col>
          <br />
        </van-row>
      </van-col>
    </van-row>
  </van-cell>
</template>

<script>
import moment from 'moment'

moment.locale('zh-cn')

export default {
  name: 'OrderCell',
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
          aReccom: '水果店',
          aRemnum: 20
        }
      }
    }
  },
  data () {
    return {}
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
