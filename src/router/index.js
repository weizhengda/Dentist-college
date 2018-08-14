import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/view/home/home.vue'
import TimeEntries from '@/components/TimeEntries.vue'
import LogTime from '@/components/LogTime.vue'
import Bihome from '@/view/report/home.vue'
import Patient from '@/view/patient/index.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'h_a_active',
  mode: 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {
      path: '/Patient',
      name: 'Patient',
      component: Patient,
      children: [
       {name: 'Ptcasehistory', path: '/Patient/casehistoryeditor', component: resolve => require(['@/view/patient/casehistoryeditor.vue'], resolve)}
      ]
    },
    {path: '/Bihome',
      name: 'Bihome',
      component: Bihome,
      children: [
       {name: 'Biwork', path: '/Bihome/work', component: resolve => require(['@/view/report/work.vue'], resolve)},
       {name: 'Bicase', path: '/Bihome/case', component: resolve => require(['@/view/report/case.vue'], resolve)}
      ]
    },
    {name: 'time-entries',
      path: '/time-entries',
      component: TimeEntries,
      children: [{
        path: 'log-time',
        component: LogTime
      }]
    }
  ]
})
