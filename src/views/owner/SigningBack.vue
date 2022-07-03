<template>
  <div>
    <van-row>
      <van-col span="4">
        <van-button round block type="info" native-type="button" to="signback2"
                    style="color: black;background:white;border-color: white;">司机交单
        </van-button>
      </van-col>
      <van-col span="4">
        <van-button round block type="info" native-type="button" to="signback" color="green">送交客户
        </van-button>
      </van-col>
    </van-row>

    <van-form>
      <van-row>
        <van-col span="12">
          <van-field
              v-model="cid"
              name="编号"
              label-width=""
              placeholder="请输入交货单号或车号"
              :rules="[{ required: true, message: '请填写交货单号或车号' }]"
          />
        </van-col>
        <van-col span="8">
          <van-field
              clickable
              name="calendar"
              :value="value"
              placeholder="年/月/日"
              @click="showCalendar = true"
          />
        </van-col>
        <van-col span="4">
          <van-button round block type="info" native-type="button" color="green" @click="onSubmit">搜索</van-button>
        </van-col>
      </van-row>
      <van-calendar v-model="showCalendar" :min-date="mindate" :show-confirm="false" @confirm="onConfirm">
        <template v-slot:footer>
          <van-row>
            <van-col span="8">
              <van-button round block type="info" native-type="button" color="blue" @click="onDeleteD">清除</van-button>
            </van-col>
            <van-col span="8">
            </van-col>
            <van-col span="8">

              <van-button round block type="info" native-type="button" color="blue" @click="onToday">今天</van-button>
            </van-col>
          </van-row>
        </template>

      </van-calendar>
    </van-form>
    <div class="scroll-box">
      <table class="tableFixHead">
        <thead style="width: auto">
        <tr class="ligth">
          <th scope="col">全选</th>
          <th scope="col">日期车号</th>
          <th scope="col">交货单号</th>
          <th scope="col">数量</th>
          <th scope="col">起点</th>
          <th scope="col">迄点</th>
          <th scope="col">拍照</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sum in sums" :key="sum.sid">
          <van-checkbox v-model="checked[sum.sid]" :disabled="sum.photo==='补拍'" shape="square"/>
          <th scope="col">{{ sum.atransdate }}{{ sum.clicense }}</th>
          <th scope="col">{{ sum.sid }}</th>
          <th scope="col">{{ sum.snum }}</th>
          <th scope="col">{{ sum.astart }}</th>
          <th scope="col">{{ sum.aend }}</th>
          <th scope="col">{{ sum.sphoto }}</th>
        </tr>
        </tbody>
      </table>
      <van-button round block type="info" style="position:fixed; bottom:0;" color="green" @click="onUpdate">签收
      </van-button>
    </div>

  </div>
</template>

<script>
import moment from 'moment'
import { getSigns, getSigns1, updateState } from '@/api/sign'

export default {
  name: 'SigningBack',
  data () {
    return {
      sums: [],
      cid: '',
      value: '',
      showCalendar: false,
      mindate: moment('2000-01-01').toDate(),
      checked: []
    }
  },
  methods: {
    getSigning () {
      getSigns(1, 5, this.cid, this.value).then(res => {
        if (res.code === 200) {
          this.sums = res.data
        } else { this.$toast('错误') }
      })
    },
    getSigning1 () {
      getSigns1(1, 5, this.cid, this.value).then(res => {
        if (res.code === 200) {
          this.sums = res.data
        } else { this.$toast('错误') }
      })
    },
    onUpdate () {
      const fuxuan = []
      for (let i = 0; i < this.checked.length; i++) {
        if (this.checked[i]) {
          fuxuan.push(i)
        }
      }
      updateState(fuxuan).then(res => {
        if (res.code === 200) {
          this.$toast('成功')
        } else { this.$toast('错误') }
      })
    },
    onConfirm (date) {
      this.value = moment(date).format('YYYY-MM-DD')
      this.showCalendar = false
    },
    onSubmit () {
      if (isNaN(parseInt(this.cid))) {
        this.getSigning1()
      } else this.getSigning()
    },
    onDeleteD () {
      this.value = ''
      this.showCalendar = false
    },
    onToday () {
      this.onConfirm(new Date())
    }
  }
}
</script>

<style scoped>
.scroll-box {
  width: 100%;
  max-height: 500px;
  overflow: scroll;
}

.tableFixHead thead {
  position: sticky;
  top: 0;
}
</style>
