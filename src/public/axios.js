/**
 * 封装axios 请求
 */

import axios from 'axios'
// import {urlListData} from './index'
import qs from 'qs'
import { api } from './apiconfig'
// import { response } from 'express'

axios.defaults.baseURL = api

// 请求拦截
axios.interceptors.request.use(function (config) {
  // 只在拦截的时候打印的一些信息
  // config 就是请求的一些信息 如果要更改请求的一些信息 就直接更改config
  // console.log(config)
  config.headers.token = 'asd'
  return config
})

// 响应拦截
axios.interceptors.response.use(function (response) {
  console.log(response)
  return response.data
}, function (error) {
  console.log(error)
})

function axiosGet (url, data, config) {
  // 发送postaxios请求  post请求的地方 data不能是一个json数据 是一个&连接的字符串
  // axios.post(url, urlListData(data), config).then(() => {
  // }).catch(() => {
  // })
  return new Promise((resolve, reject) => {
    axios.get(url, data || {}, config || {}).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function axiosPost (url, data, config) {
  // 发送postaxios请求  post请求的地方 data不能是一个json数据 是一个&连接的字符串
  // axios.post(url, urlListData(data), config).then(() => {
  // }).catch(() => {
  // })
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data || {}), config || {}).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

/**
 * 既可以发送get请求 又可以发送post请求 get请求参数在params中 post请求参数在data中
 * options中需要的参数有
 * url请求地址 method请求方法 data需要的参数 config配置信息
 */

function axiosRequest (options) {
  return new Promise((resolve, reject) => {
    axios({
      url: options.url,
      method: options.type || 'GET',
      params: options.data || {},
      data: options.data || {}
    }).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

export {
  axiosPost,
  axiosGet,
  axiosRequest
}
