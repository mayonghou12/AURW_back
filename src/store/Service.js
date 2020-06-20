// // import axios from 'axios'
import { getService } from 'public/axiosRequest'

const state = {
  ServiceList: [],
  total: 5
}

const mutations = {
  changeServiceList (state, list) {
    state.ServiceList = list
  },
  changeTotal (state, total) {
    state.total = total
  }
}

const actions = {
  getServiceList ({ commit }, data) {
    getService({
      data,
      success: function (res) {
        if (res.status === 200) {
          commit('changeServiceList', res.data.list)
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
