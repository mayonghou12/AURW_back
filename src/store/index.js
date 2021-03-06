import Vue from 'vue'
import Vuex from 'vuex'
// import banner from './banner'
import tour from './tour'
import Dress from './Dress'
import wedding from './wedding'
import jewel from './jewel'
import Hotel from './Hotel'
import Service from './Service'

Vue.use(Vuex)

export default new Vuex.Store({
  // 模块
  modules: {
    tour,
    Dress,
    wedding,
    jewel,
    Hotel,
    Service
  }
})
