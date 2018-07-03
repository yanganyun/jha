<template>
  <div class="hui">
    <Header></Header>
    
    <div class="hui_icon">
      <img src="~/static/img/hui/icon.png" alt="">
    </div>
    
    <div class="hui_list_box clearfix">
      <ul class="hui_list hui_list1 clearfix">
        <li v-for="item in 4" :key="item">
          <img src="~/static/img/hui/list1_1.jpg" alt="">
          <div class="info_box">
            <h4>大酒店時間</h4>
            <p>上海是卡卡是奧斯卡拉拉時大舅上帝上海是卡卡是奧斯卡拉拉時大舅上帝上海是卡卡是奧斯卡拉拉時大舅上帝</p>
          </div>
        </li>
      </ul>
      <ul class="hui_list hui_list2 clearfix">
        <li v-for="item in 3" :key="item">
          <img src="~/static/img/hui/list1_1.jpg" alt="">
          <div class="info_box">
            <h4>大酒店時間</h4>
            <p>上海是卡卡是奧斯卡拉拉時大舅上帝上海是卡卡是奧斯卡拉拉時大舅上帝上海是卡卡是奧斯卡拉拉時大舅上帝</p>
          </div>
        </li>
      </ul>
    </div>




    <div class="hui_list_box clearfix">
      <ul class="hui_list hui_list3 clearfix">
        <li v-for="item in 7" :key="item">
          <img src="~/static/img/hui/list1_1.jpg" alt="">
          <div class="info_box">
            <h4>大酒店時間</h4>
            <p>上海是卡卡是奧斯卡拉拉時大舅上帝上海是卡卡是奧斯卡拉拉時大舅上帝上海是卡卡是奧斯卡拉拉時大舅上帝</p>
          </div>
        </li>
      </ul>
    </div>


    <div class="dialog_box">

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

    }
  },
  methods:{
    
  },
  mounted() {
    

    


    
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
      }
      margin-bottom: 0.8rem;
    }
    .hui_list_box{
      max-width: 1200px;
      .hui_list{
        float: left;
        li{
          float: left;
          
          position: relative;
          -webkit-transition:all 0.2s linear 0s;
          transition:all 0.2s linear 0s;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
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

    .dialog_box{
      width: 1193px;
    height: 1235px;
    box-shadow: 5px 4px 8px 0px rgba(68, 68, 68, 0.22);
    border: solid 3px #bab3b3;
    }
  }


</style>
<style lang="scss">

  
</style>