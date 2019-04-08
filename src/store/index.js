import Vuex from 'vuex'
import Vue from 'vue'
import moduleA from './modules/modulesA/index'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    moduleA
  }
})
export default store
