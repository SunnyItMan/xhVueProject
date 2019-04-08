// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import store from './store/index'
// import axios from 'axios'
import './mock/mock'
// import './../static/ue/ueditor/ueditor.parse'
// import './../static/ue/ueditor/ueditor.config'
// import './../static/ue/ueditor/lang/zh-cn/zh-cn.js'
Vue.prototype.echarts = echarts
// Vue.prototype.$http = axios
Vue.use(ElementUI, {size: 'small'})
Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  router,
  store,
  render: h => h(App)
})
vm.$mount('#app')
