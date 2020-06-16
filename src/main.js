import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'css/common.less'

// Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  // 第四步执行的地方
  router,
  store,
  render: h => h(App)
}).$mount('#app')
