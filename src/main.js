// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import global from './components/config/Global'// 全局配置变量
import globaldialog from './components/dialog/dialog'// 全局提醒对话框
import pubfunc from './utils/util'// 全局函数
import axiosc from './utils/http'// ajax二次包装
// import {Dialog} from 'vue-weui'  // 微信ui框架
import '../static/css/global.css'// 全局样式调用
// import '../static/css/weui.min.css'// 全局样式调用
import 'lib-flexible/flexible.js'

// 全局函数处理类似插件
// Vue.use(Vuex)
Vue.use(pubfunc)
// Vue.use(ElementUI)
Vue.prototype.GLOBAL = global
Vue.prototype.DIALOG = globaldialog// 被放到util中调用
Vue.prototype.$axios = axiosc// 自定义二次包装后的axios  // 路由链接处理 [this.$axios.post]
// Vue.config.productionTip = false// 关闭生产模式下给出的提示

// 路由登录处理
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  // if (to.meta.requireAuth) {
  //   if (!isEmptyObject(store.state.user)) {
  //     next()
  //   } else {
  //     next({
  //       path: '/login',
  //       query: {redirect: to.fullPath}
  //     })
  //   }
  // } else {
  //   next()
  // }
})

// function isEmptyObject (obj) {
//   for (var key in obj) {
//     return false
//   }
//   return true
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
