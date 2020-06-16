// 1.引入vue vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import List from '@/components/List'
import About from '@/components/About'
import Detail from '@/components/Detail'
import NavTravel from '@/components/Right/NavTravel'
import NavWedding from '@/components/Right/NavWedding'
import NavHotel from '@/components/Right/NavHotel'
import NavDress from '@/components/Right/NavDress'
import NavJewellery from '@/components/Right/NavJewellery'
import NavService from '@/components/Right/NavService'
// 2.在vue中使用router
Vue.use(VueRouter)

// 3.编写路由的参数
// export default
export default new VueRouter({
  // 所有路由配置的地方
  routes: [{
    name: 'index',
    path: '/',
    component: Index,
    // 重定向
    redirect: '/index'
    // 别名 昵称
    // alias: '/index'
  }, {
    path: '/index',
    component: Index,
    redirect: './index/navone',
    children: [{
      // 在路由中添加了/ 就表示跟目录
      // 地址前面没有/ 地址就会从父级路由开始书写
      // path: '' 当前地址就是父级的地址
      path: 'navtravel',
      component: NavTravel
    }, {
      path: 'navwedding',
      component: NavWedding
    }, {
      path: 'navhotel',
      component: NavHotel
    }, {
      path: 'navdress',
      component: NavDress
    }, {
      path: 'navjewellery',
      component: NavJewellery
    }, {
      path: 'navservice',
      component: NavService
    }]
  }, {
    path: '/list',
    component: List
  }, {
    path: '/about',
    component: About
  }, {
    // : 匹配字符 字符名为id
    path: '/detail:id',
    component: Detail
  }]
})
// 4.将路由挂载导vue实例上  在入口文件的地方导入当前的对象 通过router实例挂载到实例上去

// 5.通过路由标签将页面挂载上路由
// <router-view></router-view>

// 6.路由跳转标签 to="" 表示跳到那里去
// <router-link to=""></router-link>
