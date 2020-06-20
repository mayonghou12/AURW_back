/**
 * 所有axios请求都会从当前文件出发
 */

import { axiosRequest } from './axios'

const setTour = (data, success, fail) => {
  axiosRequest({
    url: 'setTour',
    data: data
  }).then((res) => {
    success()
    // this.loading = false
    // this.$emit('closeModal')
  }).catch(() => {
    // this.loading = false
    fail()
  })
}

const getTour = (options) => {
  axiosRequest({
    url: 'getTour',
    data: options.data
  }).then((res) => {
    console.log(res)
    options.success(res)
  }).catch(() => {
  })
}

const setDress = (data, success, fail) => {
  axiosRequest({
    url: 'setDress',
    data: data
  }).then((res) => {
    success()
    // this.loading = false
    // this.$emit('closeModal')
  }).catch(() => {
    // this.loading = false
    fail()
  })
}

const getDress = (options) => {
  axiosRequest({
    url: 'getDress',
    data: options.data
  }).then((res) => {
    console.log(res)
    options.success(res)
  }).catch(() => {
  })
}

const setWedding = (data, success, fail) => {
  axiosRequest({
    url: 'setWedding',
    data: data
  }).then((res) => {
    success()
    // this.loading = false
    // this.$emit('closeModal')
  }).catch(() => {
    // this.loading = false
    fail()
  })
}

const getWedding = (options) => {
  axiosRequest({
    url: 'getWedding',
    data: options.data
  }).then((res) => {
    console.log(res)
    options.success(res)
  }).catch(() => {
  })
}

const setJewel = (data, success, fail) => {
  axiosRequest({
    url: 'setJewel',
    data: data
  }).then((res) => {
    success()
    // this.loading = false
    // this.$emit('closeModal')
  }).catch(() => {
    // this.loading = false
    fail()
  })
}

const getJewel = (options) => {
  axiosRequest({
    url: 'getJewel',
    data: options.data
  }).then((res) => {
    console.log(res)
    options.success(res)
  }).catch(() => {
  })
}

const DeteleTour = (data, success, fail) => {
  axiosRequest({
    url: 'DeteleTour',
    data: data
  }).then((res) => {
    success()
    // this.loading = false
    // this.$emit('closeModal')
  }).catch(() => {
    // this.loading = false
    fail()
  })
}

const setHotel = (data, success, fail) => {
  axiosRequest({
    url: 'setHotel',
    data: data
  }).then((res) => {
    success()
    // this.loading = false
    // this.$emit('closeModal')
  }).catch(() => {
    // this.loading = false
    fail()
  })
}

const getHotel = (options) => {
  axiosRequest({
    url: 'getHotel',
    data: options.data
  }).then((res) => {
    console.log(res)
    options.success(res)
  }).catch(() => {
  })
}

const setService = (data, success, fail) => {
  axiosRequest({
    url: 'setService',
    data: data
  }).then((res) => {
    success()
    // this.loading = false
    // this.$emit('closeModal')
  }).catch(() => {
    // this.loading = false
    fail()
  })
}

const getService = (options) => {
  axiosRequest({
    url: 'getService',
    data: options.data
  }).then((res) => {
    console.log(res)
    options.success(res)
  }).catch(() => {
  })
}

export {
  setTour,
  getTour,
  setDress,
  getDress,
  setWedding,
  getWedding,
  setJewel,
  getJewel,
  DeteleTour,
  setHotel,
  getHotel,
  setService,
  getService
}
