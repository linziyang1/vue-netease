
import Vue from "vue"
import {RECEIVE_ADDNAVSWIPER,RECEIVE_DATA,RECEIVE_HOME,RECEIVE_CLASSIFY,RECEIVE_NAV} from "./mutation-types"

export default {
  [RECEIVE_ADDNAVSWIPER](state,{categoryL1List}){
    state.categoryL1List = categoryL1List
  },
  [RECEIVE_DATA](state,{data}){
    state.data = data
  },
  [RECEIVE_HOME](state,{home}){
    state.home = home
  },
  [RECEIVE_CLASSIFY](state,{detail}){
    state.detail = detail
  },
  [RECEIVE_NAV](state,{nav}){
    state.nav = nav
  }
}

