import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import userLogin from '@/components/login'
// import logout from '@/components/logout'
// import Index from '@/components/pagecom/index'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'Index',
    meta: {
      requireAuth: true
    },
    component: resolve => require(['@/components/pagecom/Index'], resolve)
  }, {
    path: '/userregister',
    name: 'userregister',
    meta: {
      title: '用户注册/登录'
    },
    component: resolve => require(['@/components/pagecom/sdudent/userregister'], resolve)
  }, {
    path: '/postorder',
    name: 'postorder',
    meta: {
      title: '提交订单'
    },
    component: resolve => require(['@/components/pagecom/sdudent/postorder'], resolve)
  }, {
    path: '/attention',
    name: 'attention',
    meta: {
      title: '我的关注'
    },
    component: resolve => require(['@/components/pagecom/sdudent/attention'], resolve)
  }, {
    path: '/lessinfo',
    name: 'lessinfo',
    meta: {
      title: '个人中心'
    },
    component: resolve => require(['@/components/pagecom/sdudent/lessinfo'], resolve)
  }, {
    path: '/editinfo',
    name: 'editinfo',
    meta: {
      title: '编辑'
    },
    component: resolve => require(['@/components/pagecom/sdudent/editinfo'], resolve)
  }, {
    path: '/myinfo',
    name: 'myinfo',
    meta: {
      title: '我的资料'
    },
    component: resolve => require(['@/components/pagecom/sdudent/myinfo'], resolve)
  }, {
    path: '/records',
    name: 'records',
    meta: {
      title: '学习记录'
    },
    component: resolve => require(['@/components/pagecom/sdudent/records'], resolve)
  }, {
    path: '/yhcode',
    name: 'yhcode',
    meta: {
      title: '优惠码'
    },
    component: resolve => require(['@/components/pagecom/sdudent/yhcode'], resolve)
  }, {
    path: '/single',
    name: 'single',
    meta: {
      title: '课程详情'
    },
    component: resolve => require(['@/components/pagecom/sdudent/single'], resolve)
  }, {
    path: '/series',
    name: 'series',
    meta: {
      title: '课程详情'
    },
    component: resolve => require(['@/components/pagecom/sdudent/series'], resolve)
  }, {
    path: '/shophistory',
    name: 'shophistory',
    meta: {
      title: '学习记录'
    },
    component: resolve => require(['@/components/pagecom/sdudent/shophistory'], resolve)
  }, {
    path: '/live',
    name: 'live',
    meta: {
      title: '课程标题'
    },
    component: resolve => require(['@/components/pagecom/sdudent/live'], resolve)
  },
  // {
  //   path: '/series',
  //   name: 'seriesLesson',
  //   component: resolve => require(['@/components/pagecom/teacher/seriesLesson'], resolve)
  // }, {
  //   path: '/single',
  //   name: 'singleLesson',
  //   component: resolve => require(['@/components/pagecom/teacher/singleLesson'], resolve)
  // }, {
  //   path: '/couManage',
  //   name: 'couponManage',
  //   component: resolve => require(['@/components/pagecom/teacher/couponManage'], resolve)
  // }, {
  //   path: '/couSetting',
  //   name: 'couponSetting',
  //   component: resolve => require(['@/components/pagecom/teacher/couponSetting'], resolve)
  // }, {
  //   path: '/couAdd',
  //   name: 'couponAdd',
  //   component: resolve => require(['@/components/pagecom/teacher/couponAdd'], resolve)
  // },
  // {
  //   path: '/personal',
  //   name: 'personal',
  //   component: resolve => require(['@/components/pagecom/teacher/personal'], resolve)
  // },
  {
    path: '/logout',
    name: 'userlogout',
    component: resolve => require(['@/components/logout'], resolve)
  }
  // {
  //   path: '/teacher',
  //   name: 'TeacherIndex',
  //   component: resolve => require(['@/components/TeacherIndex'], resolve)
  // }
  ]
})
