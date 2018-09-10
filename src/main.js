
import Vue from 'vue'
import App from './App'
import store from "./vuex/store"
import router from './router'
import "./mock/mockServer"

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
