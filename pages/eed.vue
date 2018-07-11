<template>
  <div class="eed">
    <Header></Header>
    

    <!-- 板块1 -->
    <div class="banner1">
      <div class="banner1_logo"></div>
      <div class="banner1_info">
        <h3>关于</h3>
        <p><i></i>当下及未来生活方式环境的创新研究</p>
        <p><i></i>可持续品牌价值的顶层战略及商业模式研究</p>
        <p><i></i>用者环境体验的主题场景研究</p>
        <p><i></i>创新运营的系统服务研究</p>
        <p><i></i>特定品牌与场景的创新主题内容创造</p>
        <p><i></i>创新生态系统平台资源的整合驱动</p>
        <p><i></i>创新品牌及商业模式的开拓实验</p>
      </div>
    </div>

    <!-- 板块2 -->
    <div class="banner_box swiper-container banner2" id="eed_banner2">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide1">
          <div class="banner_info_box">
            <div class="banner_info">
              <span class="banner_tag"></span>
              <b>深圳马蹄山村</b>
              <h3>城市更新创新模式研究</h3>
              <p>•用者环境体验的主题场景研究<br>•创新运营的系统服务研究</p>
              <ul class="banner2_list">
                <li>
                  <img src="~/static/img/home/banner2_list1_1.jpg" alt="">
                  <div class="banner2_list_text">
                    <span>项目顶层理念</span>
                    <span class="block">城市发展目标</span>
                  </div>
                </li>
                <li>
                  <img src="~/static/img/home/banner2_list1_2.jpg" alt="">
                  <div class="banner2_list_text">
                    <span>创意环境营造</span>
                    <span class="block">其他社区环境界面</span>
                  </div>
                </li>
                <li>
                  <img src="~/static/img/home/banner2_list1_3.jpg" alt="">
                  <div class="banner2_list_text">
                    <span>创新社区文化</span>
                    <span class="block">活动事件策划</span>
                  </div>
                </li>
              </ul>
              <a href="#">点击了解更多</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide2">
          <div class="banner_info_box">
            <div class="banner_info">
              <span class="banner_tag"></span>
              <b class="pt1">深圳龙岗公共艺术馆</b>
              <h3>“龙岗区”三馆一城项目</h3>
              <br><br><br><br><br><br>
              <a href="#">点击了解更多</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide3">
          <div class="banner_info_box">
            <div class="banner_info">
              <span class="banner_tag"></span>

              <div class="banner_info_left">
                <h3>绿地探索中心</h3><br><br>
                <a href="#">点击了解更多</a>
              </div>
              
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide4">
          <div class="banner_info_box">
            <div class="banner_info">
              <span class="banner_tag"></span>
              <b class="pt1">嘉定</b>
              <h3>汽车城文体设施策划运营方案</h3>
              <br><br><br><br><br><br>
              <a href="#">点击了解更多</a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-pagination"></div>
    </div>


    
    
    <!-- 板块5  底部 -->
    <Footer></Footer>
    
  </div>
</template>

<script>
import Header from '~/components/common/header.vue';
import Footer from '~/components/common/footer.vue';

import listData from '~/assets/js/data/cheng.js';

export default {
  head(){
    return{
      title: 'EED lab',
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
      listData: listData
    }
  },
  methods:{
    
  },
  mounted() {
    

    

    var mySwiper2 = new Swiper('#eed_banner2', {
        autoplay: 5000,//可选选项，自动滑动
        pagination : '.swiper-pagination',
        loop : true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        onInit: function(swiper){
          setTimeout(function(){
            var H = parseInt($('.banner2 .swiper-slide').eq(1).height());
          $('.banner2 .swiper-slide').height(H);
          },100);
        }
    });


    
    
  }
}
</script>




<style lang="scss" scoped>

/* banner */
.banner_box{
  .swiper-slide{
    padding: 1rem 0;
  }
  

  .banner_bg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: -webkit-linear-gradient(left,rgba(0,0,0,0.8),rgba(0,0,0,0.6),rgba(0,0,0,0.2),rgba(0,0,0,0.1)); /* Safari 5.1 - 6 */
    background: -o-linear-gradient(right,rgba(0,0,0,0.8),rgba(0,0,0,0.6),rgba(0,0,0,0.2),rgba(0,0,0,0.1)); /* Opera 11.1 - 12*/
    background: -moz-linear-gradient(right,rgba(0,0,0,0.8),rgba(0,0,0,0.6),rgba(0,0,0,0.2),rgba(0,0,0,0.1)); /* Firefox 3.6 - 15*/
    background: linear-gradient(to right, rgba(0,0,0,0.8),rgba(0,0,0,0.6),rgba(0,0,0,0.2), rgba(0,0,0,0.1)); /* 标准的语法 */
  }
  .banner_info_box{ 
     width: 100%; max-width: 1200px; height: 100%; color: #ccc;
     margin: 0 auto;
     position: relative;
     z-index: 2;
    .banner_info{ 
      width: 4.8rem; position: relative; box-sizing: border-box; margin-left: 0.5rem;
  
      .banner_tag{
        display: inline-block;
        background: url('~/static/img/home/eed_logo.png') no-repeat center center;
        width: 1.08rem;
        height: 0.93rem;
        background-size: cover;
        position: absolute;
        left: 0;
        top: -0.4rem;
      }
      .pt1{
        padding-top: 1rem;
      }
      b{ font-size: 0.36rem; font-weight: normal; display: block;}
      h3{ color: #fff; font-size: 0.44rem; font-weight: normal;
        border-bottom:#fff solid 1px;
        padding-bottom: 0.12rem;
      }
      p{ font-size: 0.14rem; line-height: 0.26rem; margin-top: 0.2rem; color: #c9c9c9;}
      a{ display: inline-block; font-size:0.19rem; height: 0.44rem; line-height: 0.44rem; padding: 0 0.3rem; display: inline-block; background-color: #a7161d; color: #fff; margin-top: 0.32rem;}
    }
  }
  .swiper-slide{
    .float_1,.float_2{
      position: absolute;
      left: 50%;
      top: 50%;
      display: block;
      width: 3.4rem;
      height: 1.6rem;
      box-shadow: 0 0 20px rgba(0,0,0,0.6);
      
      transform: translate(-60%,-110%) perspective(100px) rotateY(4deg);
      -webkit-transition:all 0.5s ease-out 0.2s;
      transition:all 0.5s ease-out 0.2s;
      opacity: 0;
    }
    .float_2{
      
      transform: translate(100%,30%) perspective(100px) rotateY(-4deg);
    }
    img{
      display: block;
      max-height: 650px;
    }
  }
}


.banner1{
  background: url('~/static/img/eed/banner1.jpg') no-repeat center center;
  background-size: cover;
  height: 6rem;
  position: relative;
  .banner1_logo{
    width: 2.83rem;
    height: 2.03rem;
    background: url('~/static/img/eed/logo.png') no-repeat center center;
    background-size: cover;
    position: absolute;
    left: 40%;
    top: 50%;
    transform: translate(-100%,-50%);
    -webkit-transform: translate(-100%,-50%);
  }
  .banner1_info{
    position: absolute;
    left: 55%;
    top: 50%;
    transform: translate(0,-50%);
    -webkit-transform: translate(0%,-50%);
    color: #fff;
    h3{
      font-size: 0.38rem;
    }
    p{
      padding: 0.03rem 0;
      font-size: 0.15rem;
      i{
        float: left;
        margin-left: -0.2rem;
        width: 4px;
        height: 4px;
        overflow: hidden;
        border-radius: 50%;
        background-color: #fff;
        overflow: hidden;
        margin-top: 0.08rem;
      }
    }
  }
}

.banner2{
  
  
  
  .banner_info_box{
    .banner_info{
      height: 100%;
      position: relative;
      top: 0;
      transform: translateY(0);
      text-align: center;
      margin-left: 0;
      b{
        color: #ccc;
        font-size: 0.23rem;
        margin-bottom: 0.05rem;
      }
      .mt1{
        margin-top: 1rem;
      }
      h3{
        display: inline-block;
        border: #fff solid 2px;
        font-size: 0.38rem;
        padding: 0 0.15rem;
        line-height: 0.5rem;
        height: 0.5rem;
        overflow: hidden;
      }
      p{
        margin: 0;
        color: #c9c9c9;
        font-size: 0.14rem;
      }
      .banner2_list{
        width: 80%;
        margin: 0.4rem auto 0;
        overflow: hidden;
        li{
          float: left;
          width: 33%;
          text-align: center;
          img{
            border-radius: 50%;
            width: 60%;
            display: inline-block;
          }
          .banner2_list_text{
            overflow: hidden;
            margin-top: 0.1rem;
            span{
              display: inline-block;
              vertical-align: top;
              border-bottom: solid 1px #a7161d;
              position: relative;
              color: #fff;
              font-size: 0.19rem;
              line-height: 0.32rem;
            }
            .block{
              display: block;
              border: none;
            }
          }
        }
      }
      a{
        margin-top: 0.4rem;
      }
      
    }
  }

  .swiper-slide{
    padding: 1rem 0;
  }
  .swiper-slide1{
    background: url('~/static/img/home/banner2_list1_bg.jpg') no-repeat center center;
    background-size: cover;
  }
  .swiper-slide2{
    background: url('~/static/img/home/banner2_list2_bg.jpg') no-repeat center center;
    background-size: cover;
    height: 100%;
  }
  .swiper-slide3{
    background: url('~/static/img/home/banner2_list3_bg.jpg') no-repeat center center;
    background-size: cover;
    height: 100%;
    .banner_info{
      .banner_info_left{
        position: absolute; left: 30%; top: 45%; margin-left: -2rem; text-align: left;
        h3{
          
        }
        a{
          
        }
      }
      
    }
  }
  .swiper-slide4{
    background: url('~/static/img/home/banner2_list4_bg.jpg') no-repeat center center;
    background-size: cover;
    height: 100%;
  }
}



#eed_banner2{
  .banner_info_box{
    width: 100%;
    .banner_info{
      width: 100%;
    }
  }
}

@media only screen and (max-width: 900px) {

  .banner_box{

    .swiper-slide{
      .float_1,.float_2{
        display: none;
      }
    }

    .banner_info_box{ 
      
      width: 100%;
      .banner_info{
        padding: 0 8%;
        margin-left: 0;
        width: 100%;
        left: 0;
        b{ font-size: 0.22rem;}
        h3{ font-size: 0.3rem;}
        p{ font-size: 0.18rem;}
      }
    }
    img{ width: 130%;}
    
  }
  .banner1{
    .banner1_info{
      left: 45%;
      padding-right: 0.2rem;
      p{
        i{
          margin-top: 0.12rem;
        }
      }
    }
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
    
  }
}

</style>
<style lang="scss">
.eed{
  .swiper-container{
    .swiper-slide{ max-width: 100vw; overflow: hidden; background-size: cover;}
    .swiper-pagination-bullet{ width: 0.44rem; height: 2px; border-radius:3rem; background-color: #fff; opacity: 1;}
    .swiper-pagination-bullet-active{ background-color: #a7161d;}
    .swiper-button-next, .swiper-button-prev{}
  }
}


  
</style>