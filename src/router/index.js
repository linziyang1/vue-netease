import Vue from 'vue'
import Router from 'vue-router'

import HomePage from "../pages/Home-Page/home-page.vue"
import Recommend from "../pages/Recommend/recommend.vue"
import Classify from "../pages/Classify/classify.vue"
import Shop from "../pages/Shop/shop.vue"
import Person from "../pages/Person/person.vue"



Vue.use(Router)

export default new Router({
  // 应用的所有路由
  routes:[
    // 默认跳转首页
    {
      path:"/",
      redirect:"/homepage"
    },
    // 首页路由
    {
      path:"/homepage",
      component:HomePage,
      meta:{
        showFooter:true
      }
    },
    // 推荐（识物）路由
    {
      path:"/recommend",
      component:Recommend,
      meta:{
        showFooter:true
      }
    },
    // 分类路由
    {
      path:"/classify",
      component:Classify,
      meta:{
        showFooter:true
      }
    },
    // 购物车路由
    {
      path:"/shop",
      component:Shop,
      meta:{
        showFooter:true
      }
    },
    // 个人路由
    {
      path:"/person",
      component:Person,
      meta:{
        showFooter:false
      },
    },
  ]
})
