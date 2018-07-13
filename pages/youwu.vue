<template>
  <div class="youwu">
    <Header></Header>
    
    <div class="main">
      <div class="zhizhi_top">
        <div class="zhizhi_l">
          <!-- <img src="~/static/img/ji/youwu/zhizhi_banner1.jpg" alt=""> -->
          <div class="swiper-container" id="zhizhi_banner">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="~/static/img/ji/youwu/zhizhi_banner1.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="~/static/img/ji/youwu/zhizhi_banner2.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
        <ul class="zhizhi_r">
          <li @click="zhizhiFn(0)" :class="{active:zhizhiActive==0}">
            <img src="~/static/img/ji/youwu/zhizhi1.jpg" alt="">
            <div class="zhizhi_r_bg"></div>
            <p>SOMNAMBULIST</p>
          </li>
          <li @click="zhizhiFn(1)" :class="{active:zhizhiActive==1}">
            <img src="~/static/img/ji/youwu/zhizhi2.jpg" alt="">
            <div class="zhizhi_r_bg"></div>
            <p>EPIPHANY</p>
          </li>
          <li @click="zhizhiFn(2)" :class="{active:zhizhiActive==2}">
            <img src="~/static/img/ji/youwu/zhizhi3.jpg" alt="">
            <div class="zhizhi_r_bg"></div>
            <p>PENUMBRA</p>
          </li>
          <li @click="zhizhiFn(3)" :class="{active:zhizhiActive==3}">
            <img src="~/static/img/ji/youwu/zhizhi4.jpg" alt="">
            <div class="zhizhi_r_bg"></div>
            <p>PENUMBRA</p>
          </li>
        </ul>
        
      </div>

      <div class="zhizhi_detail_tab" v-show="!showDetail">
        <ul>
          <li @click="showDetailFn" v-show="zhizhiActive==2">
            <img src="~/static/img/ji/youwu/zhizhi1_1.jpg" alt="">
            <p>又义支</p>
          </li>
          <li class="qidai" v-show="zhizhiActive!=2">COMING SOON</li>
        </ul>
      </div>

      <div class="zhizhi_detail" v-show="showDetail">
        <img src="~/static/img/ji/youwu/zhizhi1_detail_1.jpg" width="100%" alt="">
        <div class="btn" @click="showDetail=false">返回</div>
      </div>
      
    </div>
    
    
    <!-- 板块5  底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/common/header.vue';
import Footer from '~/components/common/footer.vue';


export default {
  head(){
    return{
      title: '慧',
      meta: [{
          hid: "keywords",
          name: "keywords",
          content: ''
        },
        {
          hid: "description",
          name: "description",
          content: ''
        }
      ]
    }
  },
  components: {
    Header,
    Footer
  },
  data(){
    return {
      zhizhiActive: -1,
      detailActive: 0,

      showDetail: false
    }
  },
  computed:{
    
  },
  methods:{
    showDetailFn(){
      this.showDetail = true;
    },
    zhizhiFn(index){
      this.zhizhiActive=index;
      if(index==2){
        
      }else{
        this.showDetail =false;
      }
    }
  },
  mounted() {
    setTimeout(function(){
      var mySwiper = new Swiper('#zhizhi_banner', {
        autoplay: 2500,//可选选项，自动滑动
        loop : false,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next'
      });
    },400);
  }
}
</script>




<style lang="scss" scoped>
.youwu{
  background: url('~/static/img/ji/youwu/zhizhi_bg.jpg') no-repeat center 0 #fff;
  background-size: 100% auto;
  padding-top: 0.95rem;
  .main{
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 1rem;
    .zhizhi_top{
      overflow: hidden;
      .zhizhi_r{
        float: right;
        width: 46%;
        li{
          float: left;
          width: 48%;
          margin: 0 1% 2%;
          position: relative;
          cursor: pointer;
          img{
            width: 100%;
          }
          .zhizhi_r_bg{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            -webkit-transition:all 0.2s linear 0s;
            transition:all 0.2s linear 0s;
          }
          p{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            z-index: 2;
            color: #fff;
            border: #fff solid 2px;
            padding: 0 0.1rem;
            font-size: 0.26rem;
          }
          &:hover{
            .zhizhi_r_bg{
              background-color: rgba(0, 0, 0, 0.5);
            }
          }
          &.active{
            .zhizhi_r_bg{
              background-color: rgba(0, 0, 0, 0);
            }
          }
        }
      }
      .zhizhi_l{
        float: left;
        width: 51%;
        margin-left: 2%;
        img{
          width: 100%;
        }
      }
    }

    .zhizhi_detail_tab{
      margin-top: 0.2rem;
      ul{
        overflow: hidden;
        li{
          float: left;
          margin-left: 0.3rem;
          width: 2.16rem;
          font-size: 0.18rem;
          cursor: pointer;
          p{
            text-align: center;
            color: #404040;
            margin-top: 0.16rem;
          }
          img{
            width: 100%;
            border-radius: 50%;
          }
        }
        .qidai{
          background-color: #e2e0e0;
          color: #404040;
          text-align: center;
          line-height: 2.16rem;
          border-radius: 50%;
          cursor: default;
        }
      }
    }

    .zhizhi_detail{
      margin-top: 0.2rem;
      .btn{
        margin: 1rem auto 0;
      }
    }

    .btn{
      margin: 0.7rem auto 0;
      cursor: pointer;
    }
  }
}

@media only screen and (max-width: 900px) {
  .youwu{
    .main{
      .zhizhi_top{
        .zhizhi_r{
          width: 100%;
          margin-top: 0.2rem;
          li{
            width: 23%;
            p{
              font-size: 0.14rem;
            }
          }
        }
        .zhizhi_l{
          float: left;
          width: 100%;
          margin: 0;
          padding: 0 2%;
        }
      }
    }
  }
}
</style>