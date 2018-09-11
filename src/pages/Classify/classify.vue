<template>
  <div class="classify">
    <div class="classify_head">
      <div>
        <span class="iconfont icon-sousuo"></span>
        <span>搜索商品，共13242款好物</span>
      </div>
    </div>
    <div class="classify_content">
      <div class="classify_bsc">
        <div class="classify_content_left">
          <ul ref="uls">
            <li :class="{on:mas_index === index}" v-for="(item,index) in nav.categoryL1List" @click="gotoClass($event,index)" :key="index">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="classify_content1">
      <div class="classify_bss">
        <div class="classify_content_right">
          <div class="classify_content_right_img">
            <img :src="nav.categoryL1List[mas_index].bannerUrl" alt="">
          </div>
          <div class="classify_content_right_list">
            <ul>
              <li v-for="(item,index) in nav.categoryL1List[mas_index].subCateList" :key="index" >
                <img :src="item.wapBannerUrl" alt="">
                <div>{{item.frontName}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from "vuex"
  import BScroll from "better-scroll"
  export default {
    data(){
      return{
        mas_index:0
      }
    },
    mounted(){
      this.$store.dispatch("getClassifyNav",()=>{
        this.$nextTick(()=>{
          this.$refs.uls.children[0].className = "on"
          new BScroll(".classify_content",{
            click:true,
            scrollY:true
          })
          new BScroll(".classify_content1",{
            click:true,
            scrollY:true
          })
        })

      })
    },
    methods:{
      gotoClass(event,index){
        Array.from(this.$refs.uls.children).map((item)=>{
          if (!item.className){
            event.target.className = "on"
            this.mas_index = index
          }else {
            item.className = ""
          }
        })
      }
    },
    computed:{
      ...mapState(["detail","nav"])
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixins.styl"

  .classify
    width 100%
    .classify_head
      position fixed
      z-index 100
      width 100%
      height 50px
      background-color white
      padding 10px 16px
      box-sizing border-box
      bottom-border-1px($bc)
      div
        width 100%
        height 100%
        border-radius 5px
        text-align center
        line-height 30px
        background: #ededed
        span
          font-size 14px
          color #666
    .classify_content
      float left
      width 24%
      height 618px
      .classify_bsc
        width 100%
        height 680px
        overflow hidden
        .classify_content_left
          width 100%
          float left
          ul
            height 1000px
            text-align center
            padding 15px 0
            box-sizing border-box
            border-right 0.5px solid $bc
            li
              height 25px
              line-height 25px
              font-size 15px
              margin-bottom 19px
              &.on
                color #ab2b2b
                border-left 3px solid #ab2b2b

    .classify_content1
      float right
      width 76%
      height 618px
      .classify_bss
        width 100%
        height 680px
        overflow hidden
        .classify_content_right
          width 100%
          float right
          padding 15px 10px 0 10px
          box-sizing border-box
        .classify_content_right_img
          width 100%
          margin-bottom 15px
          img
            height 100px
        .classify_content_right_list
          width 100%
          height 100%
          li
            width 33.333%
            height 120px
            float left
            text-align center
            img
              width 55px
              height 55px
              margin-bottom 15px
              border-radius 80px
            div
              width 88%
              height 25px
              font-size 12px
              margin-left 5px
              overflow hidden

</style>
