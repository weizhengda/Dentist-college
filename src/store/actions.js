import * as types from './mutation-types'

export default {
  addTotalTime ({commit}, time) {
    commit(types.ADD_TOTAL_TIME, time)
  },
  decTotalTime ({commit}, time) {
    commit(types.DEC_TOTAL_TIME, time)
  },
  savePlan ({commit}, plan) {
    commit(types.SAVE_PLAN, plan)
  },
  deletePlan ({commit}, plan) {
    commit(types.DELETE_PLAN, plan)
  },
  setLoginState ({commit}, userinfo) {
    // console.log('==', userinfo)
    commit(types.SET_LOGIN_STATE, userinfo)
  },
  addTotalPops ({commit}, cnt) {
    // console.log('cnt=', cnt)
    commit(types.ADD_TOTAL_POPS, cnt)
  },
  decTotalPops ({commit}, cnt) {
    // console.log('cnt=', cnt)
    commit(types.DEC_TOTAL_POPS, cnt)
  }
}
