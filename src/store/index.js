import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

// 先写个假数据
const state = {
  user: {},
  totalPopdiv: 0, // 当前已经存在的弹层数量
  totalTime: 250,
  list: [{
    name: '二哲',
    avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date: '2016-12-25',
    totalTime: '6',
    comment: '12月25日完善，陪女朋友一起过圣诞节需要6个小时'
  },
  {
    name: '  三哲',
    avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date: '2016-12-25',
    totalTime: '7',
    comment: '12月25日完善，陪女朋友一起过圣诞节需要6个小时'
  }]
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
