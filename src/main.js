// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './common/css/style.css'
import echarts from 'echarts'
import store from './store/index'
import './mock/mock'
import '../static/utf8-jsp/ueditor.config'
import '../static/utf8-jsp/ueditor.all.min'
import '../static/utf8-jsp/ueditor.parse'
import '../static/utf8-jsp/lang/zh-cn/zh-cn'
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
