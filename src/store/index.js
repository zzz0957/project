import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

// Vuex 实例化
const store = new Vuex.Store({

  // Vuex 模块化  里面放的是子模块，但是没设置根级别的 state action Mutation
  // 将所有的数据都放到了 modules 里的 子模块里
  modules: {
    app,
    settings,
    user
  },
  // 开放了 根级别的 getters ，因为有app,settings,user3个子模块，getters 建立了对3个子模块的快捷访问
  getters
})

export default store
