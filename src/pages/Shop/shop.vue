<template>
  <div class="shop">
    <div class="shop_head">
      <span class="shop_head_s1">购物车</span>
      <span class="shop_head_s2">领劵</span>
    </div>
    <div class="shop_body">
      <div class="shop_body_font">
        <ul>
          <li>
            <i class="iconfont icon-yuanquan"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="iconfont icon-yuanquan"></i>
            <span>48小时快速退款</span>
          </li>
          <li>
            <i class="iconfont icon-yuanquan"></i>
            <span>满88元免邮费</span>
          </li>
        </ul>
      </div>
      <div class="shop_body_content">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
        <div class="d1">去添加点什么吧</div>
        <span class="d2">登录</span>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus"  >
  .shop
    width 100%
    .shop_head
      width 100%
      height 45px
      font-size 18px
      padding 0 25px
      background-color white
      box-sizing border-box
      text-align center
      .shop_head_s1
        line-height 45px
        margin-left 30px
      .shop_head_s2
        float right
        font-size 16px
        line-height 45px
        color #B4282D
    .shop_body
      position relative
      width 100%
      height 618px
      background: #f4f4f4
      .shop_body_font
        width 100%
        height 30px
        padding 0 15px
        box-sizing border-box
        line-height 30px
        ul
          display flex
          flex-flow row nowrap
          align-items center
          justify-content space-between
          li
            display flex
            color #666
            align-items center
            .icon-yuanquan
              font-size 1px
              transform scale(0.5)
            span
              font-size 12px


      .shop_body_content
        width 100%
        height 200px
        position absolute
        top: 0
        bottom: 0
        margin auto
        text-align center
        img
          width 120px
          height 120px
        .d1
          color #999
          font-size 14px
          margin-bottom 30px
        .d2
          width 230px
          height 45px
          background-color #b4282d
          color white
          display inline-block
          line-height 45px
          border-radius 3px


</style>
