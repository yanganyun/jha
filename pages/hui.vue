<template>
  <div class="hui">
    <Header></Header>
    
    <div class="hui_icon">
      <img @click="dataType('A')" title="古" src="~/static/img/hui/icon1.png" alt="">
      <img @click="dataType('B')" title="今" src="~/static/img/hui/icon2.png" alt="">
      <img @click="dataType('C')" title="中" src="~/static/img/hui/icon3.png" alt="">
      <img @click="dataType('D')" title="外" src="~/static/img/hui/icon4.png" alt="">
      <img @click="dataType('E')" title="海派" src="~/static/img/hui/icon5.png" alt="">
    </div>

    
    
    <!-- <div class="hui_list_box clearfix">
      <ul class="hui_list hui_list1 clearfix">
        <li v-for="item in 4" :key="item" @click="showDialogFn">
          <img src="~/static/img/hui/list1.jpg" alt="">
          <div class="info_box">
            <h4>大酒店時間</h4>
            <p>上海是卡卡是奧斯卡拉拉時大舅上帝上海是卡卡是奧斯卡拉拉時大舅上帝上海是卡卡是奧斯卡拉拉時大舅上帝</p>
          </div>
        </li>
      </ul>
      <ul class="hui_list hui_list2 clearfix">
        <li v-for="item in 3" :key="item" @click="showDialogFn">
          <img src="~/static/img/hui/list1.jpg" alt="">
          <div class="info_box">
            <h4>大酒店時間</h4>
            <p>上海是卡卡是奧斯卡拉拉時大舅上帝上海是卡卡是奧斯卡拉拉時大舅上帝上海是卡卡是奧斯卡拉拉時大舅上帝</p>
          </div>
        </li>
      </ul>
    </div> -->



    <div>
      <div class="hui_list_box clearfix">
        <ul class="hui_list clearfix">
          <li v-for="(item,index) in typeList" :key="index" @click="showDialogFn(index,$event)">
            <img :src="'http://pic.jha-design.com/hui/'+item.details.filename+'/list.jpg'" alt="">
            <div class="info_box">
              <h4>{{item.title}}</h4>
              <p>{{item.summary}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="dialog_bg" v-show="showDialog"></div>
    <div class="dialog_box" id="dialog_box" :class="{dialog_show:showDialog}">
      <div class="dialog_content">
        <em>{{dialogDetail.city}}</em>
        <h4>{{dialogDetail.title}}</h4>
        <p v-for="item in dialogDetail.info" :key="item" v-html="item"></p>
      </div>
      <div class="hui_pic_show swiper-container" id="pic_show">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in dialogDetail.imgLength" :key="item">
            <img :src="'http://pic.jha-design.com/hui/'+dialogDetail.filename+'/'+(item)+'.jpg'" alt="">
          </div>
        </div>
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>
      </div>

      <div class="dialog_close" @click="closeDialog"></div>
    </div>
    
    <!-- 板块5  底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/common/header.vue';
import Footer from '~/components/common/footer.vue';

import listData from '~/assets/js/data/hui.js';

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
      listData: listData,
      dialogDetail: '',
      showDialog: false,
      typeList: listData,
    }
  },
  computed:{
    listBoxLength:function(){
      return parseInt(this.listData.length/7)+1;
    }
  },
  methods:{
    closeDialog(){
      this.showDialog = false;
      this.dialogDetail = '';
    },
    showDialogFn(index,ev){
      this.showDialog = true; 
      //this.mySwiper.update();
      this.dialogDetail = this.typeList[index].details;

      var dialog_box = document.getElementById('dialog_box');
      var doc = document.querySelectorAll('html,body');
      var winTop = doc[0].scrollTop || doc[1].scrollTop;
      dialog_box.style.top = winTop + 50 + 'px';

      var self = this;
      this.mySwiper.activeIndex = 0;
      this.mySwiper.updateActiveIndex();
      
      setTimeout(function(){
          self.mySwiper.update();
      },300);
    },
    boxType(index){
      return parseInt(15/7)%2;
    },
    boxShow(index){
      return parseInt(15/7)%2;
    },
    dataType(type){
      var listData = this.listData;
      var newData = [];
      for(var i=0;i<listData.length;i++){
        var thisType = listData[i].type;
        if(thisType.join('_').indexOf(type)>=0){
          newData.push(listData[i]);
        }
      }
      this.typeList = newData;


    }
  },
  mounted() {
    
    
    this.mySwiper = new Swiper('#pic_show', {
        autoplay: false,//可选选项，自动滑动
        loop : false,
        //init: false,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next'
    });
    
  }
}
</script>




<style lang="scss" scoped>

  .hui{
    padding-top: 1.5rem;
    .footer_all{
      margin-top: 1rem;
    }
    .hui_icon{
      text-align: center;
      
      img{
        max-width: 100%;
        width: 1rem;
        margin: 0 1%;
        cursor: pointer;
        transition: all 0.2s ease-out 0s;
        -webkit-transition: all 0.2s ease-out 0s;
        transform: translateY(0);
        -webkit-transform: translateY(0);
        &:hover{
          transform: translateY(-6px);
          -webkit-transform: translateY(-6px);
        }
      }
      margin-bottom: 0.8rem;
    }
    .hui_list_box{
      max-width: 1300px;
      margin: 0 auto;
      .hui_list{
        //float: left;
        li{
          float: left;
          width: 23%;
          margin: 1% 1%;
          position: relative;
          -webkit-transition:all 0.2s linear 0s;
          transition:all 0.2s linear 0s;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          cursor: pointer;
          img{
            width: 100%;
          }
          .info_box{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            padding: 0.05rem 0.2rem 0.1rem;
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            -webkit-transition:all 0.2s linear 0s;
            transition:all 0.2s linear 0s;
            opacity: 0;
            h4{
              font-size: 0.14rem;
              font-weight: normal;
            }
            p{
              margin-top: 0.03rem;
              font-size: 0.12rem;
            }
          }
          &:hover{
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
            z-index: 2;
            .info_box{
              opacity: 1;
            }
          }
        }
      }
      .hui_list1{
        width: 39.8%;
        li{
          width: 48%;
          margin:1% 1%;
        }
      }
      .hui_list2{
        width: 60%;
        li{
          &:first-child{
            width: 65%;
            margin:0.5% 0.84%;
          }
          width: 31.3%;
          margin:1% 1%;
        }
      }
      .hui_list3{
        width: 100%;
        li{
          &:first-child{
            width: 39%;
            margin:0.5% 0.5%;
          }
          width: 19%;
          margin:0.5% 0.44%;
        }
      }
    }

    
  }

  .dialog_bg{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
  }
  .dialog_box{
    width: 96%;
    max-width: 1200px;
    box-shadow: 5px 4px 8px 0px rgba(68, 68, 68, 0.22);
    border: solid 3px #bab3b3;
    background-color: #fff;
    padding-bottom: 0.75rem;
    position: absolute; left: 50%; top: 8%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    z-index: 100;
    visibility: hidden;
    // transform: scale(0.5) translateX(-50%);
    // z-index: -1;
    // transition: all 0.3s ease-out 0s;
    // -webkit-transition: all 0.3s ease-out 0s;
    // visibility: hidden;
    .dialog_content{
      padding: 0.75rem 0.9rem;
      em{
        font-style: normal;
        font-family: 'SimSun';
        font-weight: bold;
        font-size: 0.38rem;
        color: #ccc;
        display: block;
        line-height: 0.4rem;
      }
      h4{
        font-family: 'SimSun';
        font-weight: bold;
        font-size: 0.44rem;
        color: #1f1f1f;
      }
      p{
        font-size: 0.16rem;
        margin-top: 0.3rem;
        line-height: 0.28rem;
      }
    }
    

    .hui_pic_show{
      margin: 0 0.9rem;
      .swiper-slide{
        text-align: center;
        // -webkit-transition:all 0.2s linear 0s;
        // transition:all 0.2s linear 0s;
        height: 6rem;
        overflow: hidden;
        img{
          // width: 100%;
          // max-width: 100%;
          height: 100%;
        }
      }
      // .swiper-slide-prev{
      //   transform: scale(0.8) translateX(100%);
      //   -webkit-transform: scale(0.8) translateX(100%);
      // }
      // .swiper-slide-active{
      //   transform: scale(0.9);
      //   -webkit-transform: scale(0.9);
      //   z-index: 9;
      // }
      // .swiper-slide-next{
      //   transform: scale(0.8) translateX(-100%);
      //   -webkit-transform: scale(0.8) translateX(-100%);
      // }
      .swiper-button-white{
        opacity: 1;

      }
    }

    .dialog_close{
      position: absolute;
      right: 0.2rem;
      top: 0.1rem;
      width: 0.8rem;
      height: 0.8rem;
      background: url('~/static/img/icon/close.png') no-repeat center center;
      background-size: 50%;
      cursor: pointer;
    }
  }
  .dialog_show{
    visibility: inherit;
    // opacity: 1;
    // transform: scale(1) translateX(-50%);
    // z-index: 100;
  }

@media only screen and (max-width: 900px) {
  .hui{
    .hui_list_box{
      .hui_list{
        li{
          width: 94%;
          margin: 0.2rem 3%;
          .info_box{
            opacity: 1;
          }
          &:hover{
            transform: scale(1);
            -webkit-transform: scale(1);
            z-index: 2;
            .info_box{
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .dialog_box{
    padding: 0.4rem;
    
    .dialog_content{
      padding: 0.2rem 0;
    }
    .hui_pic_show{
      margin: 0;
      .swiper-slide{
        height: 4rem;
      }
    }
  }
}
</style>