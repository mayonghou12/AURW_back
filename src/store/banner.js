// import axios from 'axios'
import { getBanner } from 'public/axiosRequest'

const state = {
  bannerList: [],
  total: 5
}

const mutations = {
  changeBannerList (state, list) {
    state.bannerList = list
  },
  changeTotal (state, total) {
    state.total = total
  }
}

const actions = {
  getBannerList ({ commit }, data) {
    getBanner({
      data,
      success: function (res) {
        if (res.status === 200) {
          commit('changeBannerList', res.data.list)
          commit('changeTotal', res.data.total)
        }
      }
    })
  }
}

const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}
