import Vue from 'vue'
import Vuex from 'vuex'
import banner from './banner'
import tour from './tour'

Vue.use(Vuex)

export default new Vuex.Store({
  // 模块
  modules: {
    banner,
    tour
  }
})
