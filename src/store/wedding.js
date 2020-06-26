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
          var weddingList = res.data.list
          weddingList.forEach((item) => {
            item.img_url_new = item.img_url.split(',')
          })
          commit('changeWeddingList', weddingList)
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
