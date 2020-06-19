// // import axios from 'axios'
import { getWedding } from 'public/axiosRequest'

const state = {
  weddingList: [],
  total: 5
}

const mutations = {
  changeWeddingList (state, list) {
    state.weddingList = list
  },
  changeTotal (state, total) {
    state.total = total
  }
}

const actions = {
  getWeddingList ({ commit }, data) {
    getWedding({
      data,
      success: function (res) {
        if (res.status === 200) {
          commit('changeWeddingList', res.data.list)
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
