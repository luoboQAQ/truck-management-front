import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.filter('moment', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  if (dataStr === null || dataStr === '') {
    return null
  }
  return moment(dataStr).format(pattern)
})

Vue.filter('momentNow', function (dataStr) {
  if (dataStr === null || dataStr === '') {
    return null
  }
  return moment(dataStr).fromNow()
})
