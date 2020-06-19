// // import axios from 'axios'
import { getJewel } from 'public/axiosRequest'

const state = {
  JewelList: [],
  total: 5
}

const mutations = {
  changeJewelList (state, list) {
    state.JewelList = list
  },
  changeTotal (state, total) {
    state.total = total
  }
}

const actions = {
  getJewelList ({ commit }, data) {
    getJewel({
      data,
      success: function (res) {
        if (res.status === 200) {
          commit('changeJewelList', res.data.list)
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
