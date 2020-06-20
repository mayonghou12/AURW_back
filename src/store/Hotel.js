// // import axios from 'axios'
import { getHotel } from 'public/axiosRequest'

const state = {
  HotelList: [],
  total: 5
}

const mutations = {
  changeHotelList (state, list) {
    state.HotelList = list
  },
  changeTotal (state, total) {
    state.total = total
  }
}

const actions = {
  getHotelList ({ commit }, data) {
    getHotel({
      data,
      success: function (res) {
        if (res.status === 200) {
          commit('changeHotelList', res.data.list)
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
