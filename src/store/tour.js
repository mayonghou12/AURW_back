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
          var tourList = res.data.list
          tourList.forEach((item) => {
            item.img_url_new = item.img_url.split(',')
          })
          commit('changeTourList', tourList)
          commit('changeTotal', res.data.total)
        }
      }
    })
  }
}

const getters = {
  // newtourList ({ state }) {
  //   var list = []
  //   state.tourList.forEach((item) => {
  //     item.img_url_new = item.img_url.split(',')
  //     list.push(item)
  //   })
  //   return list
  // }
}

export default {
  state,
  mutations,
  actions,
  getters
}
