
import {reqNavSwiper,reqData,reqHome,reqClassify,reqClassifyNav} from "../api"
import {RECEIVE_ADDNAVSWIPER,RECEIVE_DATA,RECEIVE_HOME,RECEIVE_CLASSIFY,RECEIVE_NAV} from "./mutation-types"

export default {
  async getNavSwiper({commit},cb){
    const result = await reqNavSwiper()
    if (result.code===0){
      const categoryL1List = result.focusList
      commit(RECEIVE_ADDNAVSWIPER,{categoryL1List})
      cb & cb()
    }
  },
  async getData({commit},cb){
    const result = await reqData()
    if (result.code===0){
      const data = result.data
      commit(RECEIVE_DATA,{data})
      cb&cb()
    }
  },
  async getHome({commit}){
    const result = await reqHome()
    if (result.code===0){
      const home = result.home
      commit(RECEIVE_HOME,{home})
    }
  },
  async getClassify({commit}){
    const result = await reqClassify()
    if (result.code===0){
      const detail = result.detail
      commit(RECEIVE_CLASSIFY,{detail})
    }
  },
  async getClassifyNav({commit},cb){
    const result = await reqClassifyNav()
    console.log(result)
    if (result.code===0){
      const nav = result.nav
      console.log(nav)
      commit(RECEIVE_NAV,{nav})
      cb&cb()
    }
  },
}
