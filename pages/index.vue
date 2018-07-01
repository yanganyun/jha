<template>
  <div class="home">
    <Header></Header>

    <!-- 板块1 -->
    <div class="banner_box swiper-container" id="home_banner1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="~/static/img/home/banner1_1.jpg" width="100%" alt="">
          <div class="banner_info_box">
            <div class="banner_info">
              <b>南京</b>
              <h3>朗庭Cordis Hotel</h3>
              <p>项目落址于江宁区，为商务、会展、互联平台贸易等大都市商业活动提供完善、国际化的商旅功能。酒店共十九层，建筑面积60000㎡，客房278间 ，设施规划有容纳225人报告厅、大宴会厅、全日制餐厅、会议中心、风味餐厅、行政楼层、恒温泳池和健身房等。针对会务商旅精品酒店的偏大规模，空间规划对建筑布局做了妥善改善，确保流通区的尺度规范、确保动静前后区的严格分属。确保明快的色系与元素关联Cordis的精品定义。</p>
              <a href="#" target="_blank">点击了解更多</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="~/static/img/home/banner1_1.jpg" width="100%" alt="">
          <div class="banner_info_box">
            <div class="banner_info">
                <b>南京</b>
                <h3>朗庭Cordis Hotel</h3>
                <p>项目落址于江宁区，为商务、会展、互联平台贸易等大都市商业活动提供完善、国际化的商旅功能。酒店共十九层，建筑面积60000㎡，客房278间 ，设施规划有容纳225人报告厅、大宴会厅、全日制餐厅、会议中心、风味餐厅、行政楼层、恒温泳池和健身房等。针对会务商旅精品酒店的偏大规模，空间规划对建筑布局做了妥善改善，确保流通区的尺度规范、确保动静前后区的严格分属。确保明快的色系与元素关联Cordis的精品定义。</p>
                <a href="#" target="_blank">点击了解更多</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="~/static/img/home/banner1_1.jpg" width="100%" alt="">
          <div class="banner_info_box">
            <div class="banner_info">
                <b>南京</b>
                <h3>朗庭Cordis Hotel</h3>
                <p>项目落址于江宁区，为商务、会展、互联平台贸易等大都市商业活动提供完善、国际化的商旅功能。酒店共十九层，建筑面积60000㎡，客房278间 ，设施规划有容纳225人报告厅、大宴会厅、全日制餐厅、会议中心、风味餐厅、行政楼层、恒温泳池和健身房等。针对会务商旅精品酒店的偏大规模，空间规划对建筑布局做了妥善改善，确保流通区的尺度规范、确保动静前后区的严格分属。确保明快的色系与元素关联Cordis的精品定义。</p>
                <a href="#" target="_blank">点击了解更多</a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!-- 板块2 -->
    <div class="banner_box swiper-container banner_bg_black" id="home_banner2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="~/static/img/home/banner2_1.jpg" width="100%" alt="">
          <div class="banner_info_box">
              <div class="banner_info">
                  <span class="banner_tag">EED Lab Project</span>
                  <b>南京</b>
                  <h3>深圳龙岗公共艺术馆</h3>
                  <h4>“龙岗区三馆一城”项目深圳</h4>
                  <p>以可持续和系统设计为原则策略<br>历史与文遗产化保护开发，交互教育环境</p>
                  <a href="#" target="_blank">点击了解更多</a>
              </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="~/static/img/home/banner2_1.jpg" width="100%" alt="">
          <div class="banner_info_box">
              <div class="banner_info">
                  <span class="banner_tag">EED Lab Project</span>
                  <b>南京</b>
                  <h3>深圳龙岗公共艺术馆</h3>
                  <h4>“龙岗区三馆一城”项目深圳</h4>
                  <p>以可持续和系统设计为原则策略<br>历史与文遗产化保护开发，交互教育环境</p>
                  <a href="#" target="_blank">点击了解更多</a>
              </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="~/static/img/home/banner2_1.jpg" width="100%" alt="">
          <div class="banner_info_box">
              <div class="banner_info">
                  <span class="banner_tag">EED Lab Project</span>
                  <b>南京</b>
                  <h3>深圳龙岗公共艺术馆</h3>
                  <h4>“龙岗区三馆一城”项目深圳</h4>
                  <p>以可持续和系统设计为原则策略<br>历史与文遗产化保护开发，交互教育环境</p>
                  <a href="#" target="_blank">点击了解更多</a>
              </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>

<script>
import Header from '~/components/common/header.vue';

export default {
  head(){
    return{
      title: '首页',
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
    Header
  },
  data(){
    return {

    }
  },
  methods:{

  },
  mounted() {
    

    //首页banner
    var mySwiper1 = new Swiper('#home_banner1', {
        autoplay: 25000,//可选选项，自动滑动
        pagination : '.swiper-pagination',
        loop : true
    });

    var mySwiper2 = new Swiper('#home_banner2', {
        autoplay: 25000,//可选选项，自动滑动
        pagination : '.swiper-pagination',
        loop : true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next'
    });
  }
}
</script>

<style lang="scss">
.banner_box{
  .swiper-container{
    .swiper-slide{ max-width: 100vw; overflow: hidden;}
    .swiper-pagination-bullet{ width: 0.38rem; height: 3px; border-radius:3rem; background-color: #666; opacity: 0.8;}
    .swiper-pagination-bullet-active{ background-color: #fff;}
    .swiper-button-next, .swiper-button-prev{}
  }
}
  
</style>


<style lang="scss" scoped>

/* banner */
.banner_box{
  .banner_info_box{ 
    background-color: rgba(0,0,0,0.6); position: absolute; left: 0; top: 0; width: 50%; height: 100%; color: #ccc;
    .banner_info{ 
      width: 100%; position: relative; top: 50%; transform: translateY(-50%); padding:0 10%; box-sizing: border-box;
      b{ font-size: 0.36rem; font-weight: normal; display: block;}
      h3{ color: #fff; font-size: 0.48rem; font-weight: normal;}
      p{ font-size: 0.18rem; line-height: 0.28rem; margin-top: 0.2rem;}
      a{ font-size:0.18rem; height: 0.44rem; line-height: 0.44rem; padding: 0 0.3rem; display: inline-block; background-color: #fff; color: #666; margin-top: 0.32rem;}
      img{
        display: block;
      }
    }
  }
}


.banner_bg_black{
  background-color: #000;
  .banner_info_box{ 
    background: none;
    .banner_info{ 
      top: 0.45rem; transform: translateY(0);
      .banner_tag{ background-color: #a7161d; color: #fff; height:0.4rem; line-height: 0.4rem; padding: 0 0.1rem; display: inline-block;}
      b{ font-size: 0.26rem; margin-top: 0.6rem; color: #fff;}
      h3{ font-size: 0.6rem;}
      h4{ font-size: 0.26rem; color: #fff; margin-top: 0.1rem;}
      p{ margin-top: 0.3rem;}
    }
  }
  img{ opacity: 0.6;}
}


#home_banner2{
  .banner_info_box{
    width: 100%;
    .banner_info{
      width: 100%;
       padding:0 5%;
    }
  }
}

@media only screen and (max-width: 900px) {
  .banner_box{
    .banner_info_box{ width: 100%;
      .banner_info{
        padding: 0 5%;
        b{ font-size: 0.22rem;}
        h3{ font-size: 0.3rem;}
        p{ font-size: 0.18rem;}
      }
    }
    img{ width: 130%;}
  }
  
  .banner_bg_black{
    .banner_info_box{
      .banner_info{ 
        top: 0.2rem;
        b{ font-size: 0.2rem; margin-top:0.2rem ;}
        h3{ font-size: 0.28rem;}
        h4{font-size: 0.2rem; margin-top: 0.05rem;}
        p{ font-size: 0.16rem; margin-top: 0.2rem;}
      } 
    }
    .swiper-container-horizontal>.swiper-pagination{ bottom: 5px;}
    .swiper-button-prev{left: 0;}
    .swiper-button-next{right: 0;}
    .swiper-button-next, .swiper-button-prev{ transform: scale(0.6);}
  }
}

</style>
