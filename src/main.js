import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/vant'
// import Button from 'ant-design-vue/lib/button'
// import 'ant-design-vue/dist/antd.css'
import '@/utils/filter'
// Vue.component(Button.name, Button)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
