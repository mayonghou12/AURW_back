// // import axios from 'axios'
import { getTour } from 'public/axiosRequest'

const state = {
  tourList: [],
  total: 5
}

const mutations = {
  changeTourList (state, list) {
    state.tourList = list
  },
  changeTotal (state, total) {
    state.total = total
  }
}

const actions = {
  getTourList ({ commit }, data) {
    getTour({
      data,
      success: function (res) {
        if (res.status === 200) {
          commit('changeTourList', res.data.list)
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
