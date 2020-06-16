/**
 * 所有axios请求都会从当前文件出发
 */

import { axiosRequest } from './axios'

const setBanner = (data, success, fail) => {
  axiosRequest({
    url: 'setBanner',
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

const getBanner = (options) => {
  axiosRequest({
    url: 'getBanner',
    data: options.data
  }).then((res) => {
    console.log(res)
    options.success(res)
  }).catch(() => {
  })
}

export {
  setBanner,
  getBanner
}
