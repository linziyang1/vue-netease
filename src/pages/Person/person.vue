<template>
  <div class="person">
    <div class="person_head">
      <div class="person_head_box">
        <i class="iconfont icon-shouye" @click="goto('/homepage')"></i>
        <span class="person_head_box_span">网易严选</span>
        <i class="iconfont icon-sousuo" @click="goto('/Recommend')"></i>
        <i class="iconfont icon-gouwuche" @click="goto('/shop')"></i>
      </div>
    </div>
    <div class="person_body" v-show="isShow">
      <div class="person_body_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="person_body_login">
        <div class="login_d1" @click="isShow = false">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="login_d2">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </div>
        <span>手机号快捷注册</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <div class="person_body_footer">
        <span><i class="iconfont icon-weixin"></i> 微信</span>
        <span>|</span>
        <span> <i class="iconfont icon-qq"></i> QQ</span>
        <span>|</span>
        <span><i class="iconfont icon-weibo"></i> 微博</span>
      </div>
    </div>



    <div class="person_enter">
      <div class="person_enter_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="person_enter_d1">
        <input type="tel" autocomplete="off" spellcheck="false" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="person_enter_d2">
        <input type="text" placeholder="请输入短信验证码" v-model="code">
        <span>获取验证码</span>
      </div>
      <div class="person_enter_d3">
        <span>遇到问题？</span>
        <span class="d3_s1">使用密码验证登录</span>
      </div>
      <div class="person_enter_login">
        <div class="login_d1" @click.prevent="register">
          <span >登录</span>
        </div>
        <div class="login_d2">
          <span @click="isShow=true">其他方式登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {MessageBox} from 'mint-ui'
  export default {
    data(){
      return{
        isShow:true,
        phone:"",
        code:""
      }
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      },
      register(){
        if( /^1\d{10}$/.test(this.phone)){
          MessageBox.alert("请输入正确的验证码","登录失败")
          }else {
          MessageBox.alert("请输入正确的手机号","登录失败")
          return
        }
        if(/^1\d{4}$/.test(this.code)){

          MessageBox.alert("登录成功")
          return
        }else{
          MessageBox.alert("验证码错误")
          return
        }
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixins.styl"

  .person
    width 100%
    .person_head
      position fixed
      height 45px
      width 100%
      z-index 100
      background: #fafafa
      .person_head_box
        height 100%
        padding 0 10px
        line-height 45px
        text-align center
        .person_head_box_span
          font-size 20px
          font-family '楷体'
        .icon-shouye
          position absolute
          left: 10px
          font-size 28px
        .icon-sousuo
          position absolute
          right: 60px
          font-size 22px
        .icon-gouwuche
          position absolute
          right 20px
          font-size 28px
    .person_body
      width 100%
      height 800px
      padding-top 50px
      background-color #F2F5F4
      .person_body_img
        width 100%
        height 200px
        line-height 200px
        text-align center
        img
          width 35%
      .person_body_login
        width 100%
        height 200px
        padding 0 20px
        box-sizing border-box
        text-align center
        div
          height 46px
          width 100%
          line-height 46px
          border-radius 3px
          margin-bottom 20px
        .login_d1
          background-color #b4282d
          color white
          span
            font-size 14px
        .login_d2
          color  #b4282d
          border 1px solid #b4282d
          span
            font-size 14px
        span
          font-size 14px


      .person_body_footer
        width 100%
        height 20px
        text-align center
        font-size 14px
        color #979797
        margin-top 160px
        span
          margin 0 7px


    .person_enter
      width 100%
      height 800px
      padding-top 50px
      padding-left 20px
      padding-right 20px
      box-sizing border-box
      .person_enter_img
        width 100%
        height 120px
        line-height 100px
        text-align center
        img
          width 30%
      .person_enter_d1
        width 100%
        height 60px
        line-height 60px
        padding 0 10px
        bottom-border-1px(#999)
        input
          outline none
          width 100%
          height 100%
      .person_enter_d2
        width 100%
        height 60px
        padding 0 10px
        line-height 60px
        display inline-block
        bottom-border-1px(#999)
        input
          outline none
          width 70%
          height 100%
        span
          display inline-block
          font-size 14px
          width 85px
          height 30px
          line-height 30px
          text-align center
          border 1px solid #7f7f7f
          border-radius 5px
      .person_enter_d3
        width 100%
        height 60px
        line-height 60px
        padding-left 10px
        box-sizing border-box
        span
          font-size 14px
          color #7f7f7f
        .d3_s1
          float right
      .person_enter_login
        width 100%
        height 200px
        padding 0 20px
        box-sizing border-box
        text-align center
        div
          height 46px
          width 100%
          line-height 46px
          border-radius 3px
          margin-bottom 20px
        .login_d1
          background-color #b4282d
          color white
          span
            font-size 14px
        .login_d2
          color  #b4282d
          border 1px solid #b4282d
          span
            font-size 14px
        span
          font-size 14px




</style>
