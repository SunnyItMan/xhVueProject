const UPDATE_USERINFO = 'UPDATE_USERINFO'
const state = {
  userInfo: {}
}
const getters = {
  userInfo: state => state.userInfo
}
// 提交数据，触发mutations， 异步操作
const action = { // 在组件中的调用方式 this.$store.dispatch('UPDATE_USERINFO', value)
  [UPDATE_USERINFO]: ({commit, value}) => commit([UPDATE_USERINFO], value)
}
// 真正修改模型
const mutations = { // 在组件中的调用方式 this.$store.commit('UPDATE_USERINFO', value)
  [UPDATE_USERINFO]: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

export default {
  state,
  getters,
  action,
  mutations
}
