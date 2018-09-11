<template>
  <div class="recommend">
    <div class="recommend_head">
      <div class="recommend_head_box">
        <i class="iconfont icon-shouye"  @click="goto('/homepage')"></i>
        <span class="recommend_head_box_span">网易严选</span>
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche" @click="goto('/shop')"></i>
      </div>
    </div>
    <div class="recommend_content">
      <div class="recommend_content_bs">
        <!--轮播图-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in detail.banner" :key="index">
              <img :src="item.picUrl" alt="">
              <div class="recommend_content_nav_lis_div">
                <div class="recommend_content_nav_lis_div_div1">{{item.subTitle}}</div>
                <div class="recommend_content_nav_lis_div_div2">{{item.title}}</div>
                <div class="recommend_content_nav_lis_div_div3">{{item.desc}}</div>
              </div>
            </div>
          </div>
        </div>
        <!--图片导航-->
        <div class="recommend_content_essay">
          <ul >
            <li v-for="(item,index) in detail.column" :key="index">
              <img :src="item.picUrl" alt="">
              <div>{{item.title}}</div>
            </li>
          </ul>
        </div>
        <hr>
        <!--严选推荐-->
        <div class="recommend_content_body" v-if="detail.recommendOne">
          <div class="recommend_content_body_title">{{detail.recommendOne.nickname}}</div>
          <div class="recommend_content_body_con">
            <img :src="detail.recommendOne.picUrl" alt="">
            <div>
              <span>{{detail.recommendOne.title}}</span>
              <span class="span1">{{detail.recommendOne.priceInfo}}元起</span>
            </div>
            <span class="span2">{{detail.recommendOne.subTitle}}</span>
          </div>
          <div class="recommend_content_body_ig">
            <div class="recommend_content_body_ig_font">
              <div class="recommend_content_body_ig_font_div">
                <img :src="detail.recommendThree.avatar" alt="">
                <span>{{detail.recommendThree.nickname}}</span>
              </div>
              <p class="recommend_content_body_ig_p1">
                {{detail.recommendThree.title}}
              </p>
              <p class="recommend_content_body_ig_p2">
                {{detail.recommendThree.subTitle}}
              </p>
            </div>
            <img :src="detail.recommendThree.picUrl"/>
          </div>
          <div class="recommend_content_body_ig">
            <div class="recommend_content_body_ig_font">
              <div class="recommend_content_body_ig_font_div">
                <img :src="detail.recommendTwo.avatar" alt="">
                <span>{{detail.recommendTwo.nickname}}</span>
              </div>
              <p class="recommend_content_body_ig_p1">
                {{detail.recommendTwo.title}}
              </p>
              <p class="recommend_content_body_ig_p2">
                {{detail.recommendTwo.subTitle}}
              </p>
            </div>
            <img :src="detail.recommendTwo.picUrl"/>
          </div>
        </div>
        <hr>
        <!--十点一刻-->
        <div class="recommend_content_nav">
          <div class="recommend_content_nav_title">
            十点一刻
          </div>
          <div class="recommend_content_nav_div">
            <ul>
              <li>
                <div class="content_nav_lis_div">今日话题</div>
                <p class="content_nav_lis_p1">你有那些租房经历</p>
                <p>聊聊你用过的租房神器</p>
                <div class="content_nav_lis_div2">
                  <img src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png" alt="">
                  <img src="http://yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg" alt="">
                  <img src="http://yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg" alt="">
                  <i class="iconfont icon-shenglve"></i>
                  <span>977人参与话题</span>
                </div>
              </li>
              <li>
                <div class="content_nav_lis_div">今日话题</div>
                <p class="content_nav_lis_p1">你有那些租房经历</p>
                <p>聊聊你用过的租房神器</p>
                <div class="content_nav_lis_div2">
                  <img src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png" alt="">
                  <img src="http://yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg" alt="">
                  <img src="http://yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg" alt="">
                  <i class="iconfont icon-shenglve"></i>
                  <span>977人参与话题</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr>
        <!--重复严选推荐内容-->
        <div class="recommend_content_body" v-if="detail.zhenThree">
          <div class="recommend_content_body_title">{{detail.zhenThree.nickname}}</div>
          <div class="recommend_content_body_con">
            <img :src="detail.zhenThree.picUrl" alt="">
            <div>
              <span>{{detail.zhenThree.title}}</span>
            </div>
            <span class="span2">{{detail.zhenThree.subTitle}}</span>
          </div>
          <div class="recommend_content_body_ig">
            <div class="recommend_content_body_ig_font">
              <div class="recommend_content_body_ig_font_div">
                <img :src="detail.zhenTwo.avatar" alt="">
                <span>{{detail.zhenTwo.nickname}}</span>
              </div>
              <p class="recommend_content_body_ig_p1">
                {{detail.zhenTwo.title}}
              </p>
              <p class="recommend_content_body_ig_p2">
                {{detail.zhenTwo.subTitle}}
              </p>
            </div>
            <img :src="detail.zhenTwo.picUrl"/>
          </div>
          <div class="recommend_content_body_ig">
            <div class="recommend_content_body_ig_font">
              <div class="recommend_content_body_ig_font_div">
                <img :src="detail.zhenOne.avatar" alt="">
                <span>{{detail.zhenOne.nickname}}</span>
              </div>
              <p class="recommend_content_body_ig_p1">
                {{detail.zhenOne.title}}
              </p>
              <p class="recommend_content_body_ig_p2">
                {{detail.zhenOne.subTitle}}
              </p>
            </div>
            <img :src="detail.zhenOne.picUrl"/>
          </div>
        </div>
        <hr>
        <div class="recommend_content_look">
          <div class="recommend_content_look_title">严选LOOK</div>
          <img src="http://yanxuan.nosdn.127.net/ce03b9c9d8636b04564a6e36d5be0781.jpg" alt="">
          <div class="recommend_content_footer">
            <div class="recommend_content_footer_title">
              <img src="http://yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png" alt="">
              <span>*****1527</span>
            </div>
            <p>
              加了冰块一个小金橘，还是觉得比较甜。照评论员说的，下次用苏打水稀释。因为只优惠了10块钱，我有囤了一瓶～
            </p>
          </div>
        </div>
        <div class="recommend_content_more">
          <div class="recommend_content_more_title">
            <span class="s1"></span>
            更多精彩
            <span class="s2"></span>
          </div>
          <div class="recommend_content_more_body">
            <div class="recommend_content_more_body_img">
              <div class="img_left">
                <img src="http://yanxuan.nosdn.127.net/a5277893ce7d4c9dc6c65d991220fa92.jpg" alt="">
              </div>
              <div class="img_right">
                <img src="http://yanxuan.nosdn.127.net/a7e2eb51b994f5feed575afcd31ab585.jpg" alt="">
                <img src="http://yanxuan.nosdn.127.net/4d7f0c77ab1ad8f933018d790ee37994.jpg" alt="">
              </div>
            </div>
            <div class="recommend_content_more_body_font">甲醛这种空气污染物，在日常生活中无处不在。无论是人造木地板、家具，还是地毯、窗帘...</div>
          </div>
          <div class="recommend_content_more_body2">
            <div>
              <img src="//yanxuan.nosdn.127.net/244949bc4fc828b6d746fadda37533b1.jpg" alt="">
            </div>
            <div class="recommend_content_more_body_font">甲醛这种空气污染物，在日常生活中无处不在。无论是人造木地板、家具，还是地毯、窗帘...</div>
          </div>
          <div class="recommend_content_more_body2">
            <div>
              <img src="//yanxuan.nosdn.127.net/4b7c24318e2e7f441d52ee3b6032b9c6.jpg" alt="">
            </div>
            <div class="recommend_content_more_body_font">全球直采进口好酒第二件半价</div>
          </div>
          <div class="recommend_content_more_body2">
            <div>
              <img src="//yanxuan.nosdn.127.net/5a1df92d48fa3214bec9bb40ab067683.jpg" alt="">
            </div>
            <div class="recommend_content_more_body_font">6个家庭清洁小技巧</div>
          </div>
          <div class="recommend_content_more_body2">
            <div>
              <img src="//yanxuan.nosdn.127.net/81f9a728f78e429c2b1f57f3712e38e1.jpg" alt="">
            </div>
            <div class="recommend_content_more_body_font">懒人清扫、日式收纳、洗衣神器</div>
          </div>
          <div class="recommend_content_more_body">
            <div class="recommend_content_more_body_img">
              <div class="img_left">
                <img src="//yanxuan.nosdn.127.net/15115119685326151.png" alt="">
              </div>
              <div class="img_right">
                <img src="http://yanxuan.nosdn.127.net/15115119710556152.png" alt="">
                <img src="http://yanxuan.nosdn.127.net/15115110017195992.png" alt="">
              </div>
            </div>
            <div class="recommend_content_more_body_font">冬天一到，我就对毛绒绒的单品毫无抵抗力，鞋子当然也不例外。今年，我们上新了很多保...</div>
          </div>
          <div class="recommend_content_more_body2">
            <div>
              <img src="//yanxuan.nosdn.127.net/14926859849200826.jpg" alt="">
            </div>
            <div class="recommend_content_more_body_font">经典百搭，时尚线条</div>
          </div>
          <div class="recommend_content_more_body2">
            <div>
              <img src="//yanxuan.nosdn.127.net/022e0ba0349d6d7da823b54bc3de88e4.jpg" alt="">
            </div>
            <div class="recommend_content_more_body_font">清新原色，轻巧脆爽</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  import SwiPer from "swiper"
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from "vuex"
  export default {
    computed:{
      ...mapState(["detail"])
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      },
    },
    mounted(){
      this.$store.dispatch("getClassify",(()=>{
        this.$nextTick(()=>{
          new SwiPer(".swiper-container",{
            loop:true,
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 15,
            observer:true,
          })
        })
      }))
      new BScroll(".recommend_content",{
        click:true,
        scrollY: true
      })
      new BScroll(".recommend_content_nav_div",{
        click:true,
        scrollX:true
      })
      new BScroll(".recommend_content_essay",{
        click:true,
        scrollX: true
      })

    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">

  .recommend
    width 100%
    hr
      height 10px
      width 100%
      border none
      margin 0
      background #ededed
    .recommend_head
      position fixed
      height 45px
      width 100%
      z-index 100
      background: #fafafa
      .recommend_head_box
        height 100%
        padding 0 10px
        line-height 45px
        text-align center
        .recommend_head_box_span
          font-size 24px
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
    .recommend_content
      width 100%
      height 618px
      .recommend_content_bs
        width 100%
        .swiper-container
          padding-top 55px
          width 100%
          .swiper-wrapper
            width 3000px
            height 200px
            overflow hidden
            .swiper-slide
              text-align center
              position relative
              width 330px !important
              height 200px
              float left
              img
                border-radius 10px
                width 100%
                height 100%
              .recommend_content_nav_lis_div
                position absolute
                left: 0
                top: 0
                right: 0
                bottom: 0
                margin auto
                width 230px
                height 100px
                border-radius 10px
                background-color rgba(255,255,255,.9)
                text-align center
                padding 10px
                box-sizing border-box
                .recommend_content_nav_lis_div_div1
                  position relative
                  font-size 12px
                  margin 10px
                  color #999
                  &:after
                    content: ' ';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right 48px
                    margin: auto;
                    width: 10px;
                    height: 1px;
                    background-color: #999;
                  &:before
                    content: ' ';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left 48px
                    margin: auto;
                    width: 10px;
                    height: 1px;
                    background-color: #999;

                .recommend_content_nav_lis_div_div2
                  font-size 16px
                  font-weight bold
                  margin-bottom 10px
                .recommend_content_nav_lis_div_div3
                  font-size 12px
        .recommend_content_essay
          width 100%
          height 130px
          padding 10px
          ul
            width 900px
            li
              float left
              width 90px
              height 90px
              padding 0
              margin-left 10px
              text-align center
              img
                width 100%
                height 100%
                margin-bottom 10px
              div
                font-size 12px



    .recommend_content_body
      width 100%
      box-sizing border-box
      padding 0 20px
      .recommend_content_body_title
        width 100%
        height 50px
        text-align center
        line-height 50px
      .recommend_content_body_con
        width 100%
        height 290px
        border-radius 3px
        border 0.5px solid #d9d9d9
        color #333
        overflow hidden
        img
          width 100%
          height 200px
          border-radius 3px
          overflow hidden
        div
          width 100%
          height 40px
          line-height 40px
          font-size 18px
          box-sizing border-box
          padding 0 10px
          .span1
            float right
        .span2
          padding-left 10px
          font-size 14px
          color #9f9f9f


      .recommend_content_body_ig
        border 0.1px solid #d9d9d9
        height 150px
        margin 20px 0
        .recommend_content_body_ig_font
          float left
          width 50%
          .recommend_content_body_ig_font_div
            width 100%
            height 20px
            padding 20px 0
            img
              float left
              width 20px
              height 20px
              border-radius 20px
              margin 0 10px
            span
              font-size 12px
          .recommend_content_body_ig_p1
            font-size 16px
            margin-left 10px
            overflow hidden
            text-overflow: ellipsis;
            white-space: nowrap;
          .recommend_content_body_ig_p2
            color #9d9d9d
            font-size 12px
            margin-left 10px
            margin-top 10px
            line-height 18px
            overflow hidden
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient: vertical;
        img
          float right
          width 40%
          height 100%



    .recommend_content_nav
      width 100%
      height 290px
      .recommend_content_nav_title
        width 100%
        height 50px
        text-align center
        line-height 50px
      .recommend_content_nav_div
        width 100%
        ul
          width 700px
          li
            position relative
            float left
            width 300px
            height 200px
            margin-left 20px
            padding 20px
            box-sizing border-box
            text-align center
            border 5px solid #d9d9d9
            background-color #ededed
            .content_nav_lis_div
              position relative
              padding-bottom  20px
              font-size 12px
              color #7e8c8d
              &:after
                content: ' ';
                position: absolute;
                top: -20px
                bottom: 0;
                right 86px
                margin: auto;
                width: 10px;
                height: 1px;
                background-color: #999;
              &:before
                content: ' ';
                position: absolute;
                top: -20px;
                bottom: 0;
                left 86px
                margin: auto;
                width: 10px;
                height: 1px;
                background-color: #999;


            .content_nav_lis_p1
              font-size 20px
              font-weight bold
              margin-bottom 15px

            .content_nav_lis_div2
              width 100%
              height 30px
              line-height 30px
              position absolute
              bottom: 20px
              img
                width 20px
                height 20px
                margin-left -7px
                border-radius 20px
              .icon-shenglve
                font-size 22px
                color #d7d7d7
                margin-left -7px
              span
                font-size 12px
                margin-top -7px
                display inline-block
                vertical-align middle




    .recommend_content_look
      width 100%
      .recommend_content_look_title
        width 100%
        height 50px
        text-align center
        line-height 50px
      img
        width 100%
        height 400px
      .recommend_content_footer
        width 100%
        height 123px
        padding 15px
        .recommend_content_footer_title
          width 100%
          img
            width 20px
            height 20px
            vertical-align middle
          span
            font-size 12px
        p
          margin-top 15px
          width 90%
          height 60px
          font-size 14px
          line-height 25px
          color #7f7f7f

    .recommend_content_more
      width 100%
      height 2450px
      padding 0 15px
      box-sizing border-box
      background-color #eee
      .recommend_content_more_title
        width 100%
        height 70px
        text-align center
        line-height 70px
        .s1,.s2
          height 1px
          width 128px
          background-color #d9d9d9
          display inline-block
          vertical-align middle

      .recommend_content_more_body
        width 100%
        height 280px
        background: white
        padding 15px
        box-sizing border-box
        margin-bottom 15px
        .recommend_content_more_body_img
          height 200px
          .img_left
            float left
            width 69%
            height 100%
            img
              width 100%
              height 100%
          .img_right
            float right
            width 30%
            height 100%
            img
              width 100%
              height 49%
              padding 1px 0
        .recommend_content_more_body_font
          height 60px
          line-height 60px
          font-size 16px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis

      .recommend_content_more_body2
        width 100%
        height 280px
        background: white
        padding 15px
        box-sizing border-box
        margin-bottom 15px
        div
          height 200px
          img
            width 100%
            height 100%
        .recommend_content_more_body_font
          height 60px
          line-height 60px
          font-size 16px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis


</style>
