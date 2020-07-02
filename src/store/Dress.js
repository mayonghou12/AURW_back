// // import axios from 'axios'
import { getDress } from 'public/axiosRequest'

const state = {
  DressList: [],
  total: 5
}

const mutations = {
  changeDressList (state, list) {
    state.DressList = list
  },
  changeTotal (state, total) {
    state.total = total
  }
}

const actions = {
  getDressList ({ commit }, data) {
    getDress({
      data,
      success: function (res) {
        if (res.status === 200) {
          var DressList = res.data.list
          DressList.forEach((item) => {
            item.img_url_new = item.img_url.split(',')
          })
          commit('changeDressList', DressList)
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
