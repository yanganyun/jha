<template>
  <div class="cheng">
    <Header></Header>

    <!-- 板块3  关于我们 -->
    <div class="aboutus">
      <div class="about_logo"></div>
      <h3><span>关于我们</span></h3>
      <p>"JHA DESIGN专注建筑改造及室内空间设计项目及关联产品。<br>
 服务于卓越企业、国际国内酒店管理集团、私人客户，<br>
产品包含：商旅度假酒店、总部办公、商业展示、度假别墅；<br>
提供改造优化、空间设计、设备专业协调、软装配置、现场督导的全程服务。<br>
并开展“集跃创造” “尤物定制”的研发建造与市场运营。"</p>
      <div class="aboutus_icon">
        <span @click="showLiucheng(0)" :class="{active:liuchengIndex==0}"><img src="~/static/img/icon/about1.png" alt=""></span>
        <span @click="showLiucheng(1)" :class="{active:liuchengIndex==1}"><img src="~/static/img/icon/about2.png" alt=""></span>
        <span @click="showLiucheng(2)" :class="{active:liuchengIndex==2}"><img src="~/static/img/icon/about3.png" alt=""></span>
        <span @click="showLiucheng(3)" :class="{active:liuchengIndex==3}"><img src="~/static/img/icon/about4.png" alt=""></span>
        <span @click="showLiucheng(4)" :class="{active:liuchengIndex==4}"><img src="~/static/img/icon/about5.png" alt=""></span>
        <span @click="showLiucheng(5)" :class="{active:liuchengIndex==5}"><img src="~/static/img/icon/about6.png" alt=""></span>
      </div>

      <div class="about_icon_content">
        <h4><span>设计流程</span></h4>
        <b>{{liucheng[liuchengIndex].title}}</b>
        <p v-html="liucheng[liuchengIndex].detail"></p>
      </div>
    </div>

    <!-- 板块4  设计团队 -->
    <div class="team" id="team">
      <h3><span>设计团队</span></h3>
      <div class="home_team swiper-container" id="home_team">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="team_list">
              <li @click="showDetail(index)" v-for="(item,index) in listData" :key="index">
                <div><img :src="'http://pic.jha-design.com/team/'+item.pinyin+'.jpg'" alt=""></div>
                <b>{{item.name}}</b>
                <p>{{item.zhiwei}}</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div class="swiper-button-prev swiper-button-black"></div>
        <div class="swiper-button-next swiper-button-black"></div> -->
      </div>

      <!-- 人员介绍 -->
      <div class="team_info" v-show="thisMember">
        <div class="team_img">
          <img :src="'http://pic.jha-design.com/team/'+thisMember.pinyin+'_big.jpg'" alt="">
        </div>
        <div class="team_detail">
          <h4>{{thisMember.name}}<span>{{thisMember.zhiwei}}</span></h4>
          <div class="xueli">
            <span v-for="item in thisMember.xueli" :key="item">{{item}}</span>
          </div>
          <p v-html="thisMember.detail"></p>
        </div>
      </div>

    </div>


    <div class="join">
      <h3><span>加入我们</span></h3>
    </div>

    <div class="cheng_content">
      <img src="~/static/img/cheng/cheng_content.jpg" width="100%" alt="">
    </div>
    
    <!-- 板块5  底部 -->
    <Footer></Footer>
    
  </div>
</template>

<script>
import Header from '~/components/common/header.vue';
import Footer from '~/components/common/footer.vue';

import listData from '~/assets/js/data/cheng.js';
import liucheng from '~/assets/js/data/liucheng.js';

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
    Header,
    Footer
  },
  data(){
    return {
      listData: listData,
      liucheng: liucheng,
      thisMember: '',
      liuchengIndex:0
    }
  },
  methods:{
    showLiucheng(index){
      this.liuchengIndex = index;
    },
    showDetail(index){
      this.thisMember = this.listData[index];
    }
  },
  mounted() {
    

    //team
    setTimeout(function(){
      var mySwiper = new Swiper('#home_team', {
        autoplay: 2500,//可选选项，自动滑动
        loop : false,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next'
      });
    },400);

    var index = this.$route.query.index;
    if(index>=0){
      this.showDetail(index);
      var doc = document.querySelectorAll('html,body');
      var team = document.getElementById('team');
      doc[0].scrollTop = team.offsetTop-50;
      doc[1].scrollTop = team.offsetTop-50;
    }
    

    
    
  }
}
</script>




<style lang="scss" scoped>

.aboutus{
  padding: 1.2rem 0 0.7rem;
  background: url('~/static/img/cheng/banner.jpg') no-repeat center top;
  background-size: cover;
  .about_logo{
    width: 0.8rem;
    height: 0.98rem;
    margin: 0 auto;
    background: url('~/static/img/logo2.png') no-repeat center center;
    background-size: cover;
  }
  h3{
    font-size: 0.38rem;
    padding-top: 0.4rem;
    text-align: center;
    span{
      display: inline-block;
      border-bottom: #a7161d solid 2px;
    }
  }
  p{
    margin-top: 0.35rem;
    font-size: 0.14rem;
    line-height: 0.32rem;
    color: #5c5c5c;
    text-align: center;
  }
  .aboutus_icon{
    text-align: center;
    margin-top: 0.45rem;
    span{
      border-radius: 50%;
      display: inline-block;
      margin: 0 0.05rem;
      padding: 0.1rem;
      transition: all 0.2s ease-out 0s;
      -webkit-transition: all 0.2s ease-out 0s;
      cursor: pointer;
      &:hover{
        transform: translateY(-5px);
        -webkit-transform: translateY(-5px);
      }
    }
    
    img{
      max-width: 100%;
    }
    .active{
      background-color: #fff!important;
      transform: scale(1.05)!important;
      -webkit-transform: scale(1.05)!important;
    }
  }
  .about_icon_content{
    text-align: center;
    color: #010101;
    margin-top: 0.4rem;
    h4{
      font-size: 0.24rem;
      
      span{
        border-bottom: #606060 solid 2px;
        line-height: 0.4rem;
        display: inline-block;
      }
    }
    b{
      display: block;
      font-weight: normal;
      font-size: 0.22rem;
      margin-top: 0.25rem;
    }
    p{
      font-size: 0.15rem;
      margin-top: 0.15rem;
    }
  }
}

.team{
  padding-bottom: 1rem;
  h3{
    font-size: 0.38rem;
    padding-top: 0.4rem;
    text-align: center;
    span{
      display: inline-block;
      border-bottom: #a7161d solid 2px;
    }
  }
  .team_list{
    overflow: hidden;
    max-width: 1200px;
    margin: 0.6rem auto 0;
    li{
      float: left;
      width: 19%;
      margin: 0 3%;
      text-align: center;
      cursor: pointer;
      
      b{
        display: block;
        margin-top: 0.3rem;
        font-size: 0.3rem;
      }
      p{
        color: #666;
        font-size: 0.16rem;
      }
      div{
        width: 100%;
        overflow: hidden;
        border-radius: 50%;
        img{
          width: 100%;
          -webkit-transition:all 0.3s linear 0s;
          transition:all 0.3s linear 0s;
        }
      }
      
      &:hover{
        img{
          transform: scale(1.1);
        -webkit-transform: scale(1.1);
        }
        
      }
    }
  }
  .team_info{
    width: 94%;
    max-width: 1200px;
    //height: 0;
    margin: 0 auto;
    overflow: hidden;
    // -webkit-transition:all 0.3s linear 0s;
    // transition:all 0.3s linear 0s;
    // opacity: 0;
    .team_img{
      width: 45%;
      float: left;
      text-align: right;
      img{
        max-width: 100%;
      }
    }
    .team_detail{
      float: left;
      width: 50%;
      margin-left: 5%;
      margin-top: 1rem;
      h4{
        color: #010101;
        font-size: 0.36rem;
        span{
          color: #444;
          font-size: 0.2rem;
          margin-left: 0.1rem;
        }
      }
      .xueli{
        margin-top: 0.05rem;
        span{
          display: block;
          font-size: 0.16rem;
          color: #999;
        }
      }
      p{
        margin-top: 0.15rem;
        font-size: 0.14rem;
        color: #444;
        line-height: 0.28rem;
      }
    }
  }
  .show_member{
    height: auto;
    opacity: 1;
  }
}

.join{
  padding-bottom: 1rem;
  background: url('~/static/img/cheng/banner.jpg') no-repeat center top;
  background-size: cover;
  height: 8rem;
  h3{
    font-size: 0.38rem;
    padding-top: 0.8rem;
    text-align: center;
    span{
      display: inline-block;
      border-bottom: #a7161d solid 2px;
    }
  }
}
.cheng_content{
  max-width: 1000px;
  margin: -5.6rem auto 0;
}

.footer_all{
  background: url('~/static/img/footer_bg.jpg') no-repeat center center;
  background-size: cover;
  .footer{
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 0.2rem;
    
    position: relative;
    h3{
      font-size: 0.38rem;
      padding-top: 0.4rem;
      text-align: center;
      span{
        display: inline-block;
        border-bottom: #a7161d solid 2px;
        color: #fff;
      }
    }
    .footer_nav{
      a{
        color: #fff;
        font-size: 0.16rem;
        margin-right: 0.36rem;
      }
    }
    .go_top{
      font-size: 0.16rem;
      color: #fff;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      span{
        float: right;
        margin-top: -0.3rem;
        cursor: pointer;
      }
    }
    .footer_info{
      color: #fff;
      font-size: 0.12rem;
      margin-top: 0.4rem;
    }
  }
}


@media only screen and (max-width: 900px) {
  .aboutus{
    .aboutus_icon{
      span{
        width: 0.8rem;
      }
    }
  }
  .team{
    .home_team{
      .team_list{
        li{
          b{
            font-size: 0.26rem;
          }
          p{
            font-size: 0.18rem;
          }
        }
      }
    }
    .team_info{
      .team_detail,.team_img{
        width: 94%;
        margin: 0.2rem auto 0;
        float: none !important;
      }
      .team_detail{
        h4{
          color: #010101;
          font-size: 0.5rem;
          span{
            color: #444;
            font-size: 0.3rem;
            margin-left: 0.15rem;
          }
        }
        .xueli{
          margin-top: 0.15rem;
          span{
            display: block;
            font-size: 0.24rem;
            color: #999;
          }
        }
        p{
          margin-top: 0.2rem;
          font-size: 0.24rem;
          color: #444;
          line-height: 0.28rem;
        }
      }
    }
  }
}

</style>
<style lang="scss">
.home{
  .swiper-container{
    .swiper-slide{ max-width: 100vw; overflow: hidden; background-size: cover;}
    .swiper-pagination-bullet{ width: 0.44rem; height: 2px; border-radius:3rem; background-color: #fff; opacity: 1;}
    .swiper-pagination-bullet-active{ background-color: #a7161d;}
    .swiper-button-next, .swiper-button-prev{}
  }
}
</style>