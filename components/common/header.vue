<template>
  <div>
    
    <header class="header" :class="{header_hide:hideHead&&pageName=='index'}">
      <nav class="nav_bg" @mousemove="hideHead=false" @mouseout="hideHead=true">
        <ul class="nav">
            <li>
              <a class="logo" href="/"></a>
            </li>
            <li id="hui">
              <a class="nav_a" href="/hui">慧</a>
              <b></b>
            </li>
            <li id="ji">
              <a class="nav_a" href="/xinyuan">集</a>
              <span>
                <!-- <a class="ji_jiyue" href="/jiyue">集跃<i></i></a> -->
                <a class="ji_xinyuan" href="/xinyuan">心苑<i></i></a>
                <a class="ji_youwu" href="/youwu">尤物<i></i></a>
              </span>
              <b></b>
            </li>
            <li id="cheng">
              <a class="nav_a" href="/cheng">诚</a>
              <b></b>
            </li>
            <li id="eed">
              <a class="nav_a">EED lab</a>
              <b></b>
            </li>
        </ul>
      </nav>
      
    </header>

    <div class="logo_middle" v-show="hideHead&&pageName=='index'" @mouseover="hideHead=false" @touchend="hideHead=false"></div>
  </div>
  
</template>

<script>
export default {
  name:'Header',
  data(){
    var pageName = this.$route.name;
    
    return {
      pageName: pageName,
      hideHead: true
    }
  },
  mounted() {
    //二级导航居中
    // var $nav = $('.nav'),
    //     $nav_down = $('.nav_down');
    // var navTimer = null;
    // $('.nav li,.nav_down li').hover(function(e){
    //     clearTimeout(navTimer);
    //     var navL = $nav.offset().left;
    //     var num = $(this).index();
    //     $nav_down.show();
    //     var navLiW = $(this).eq(num).width();
    //     $nav_down.find('li').eq(num).show().css({'left':navL,'width':navLiW}).siblings().hide();
    // },function(){
    //     navTimer = setTimeout(function(){
    //         $nav_down.hide();
    //     },200);
        
    // });
    var self = this;
    // window.addEventListener('scroll',function(){
    //   self.hideHead = false;
    // })


  },

}
</script>


<style lang="scss" scoped>

.logo_middle{
    position: fixed;
    left: 50%;
    top: 0.08rem;
    transform: translate(-50%,0);
    -webkit-transform: translate(-50%,0);
    width: 0.49rem;
    height: 0.49rem;
    background: url('~/static/img/logo.png') no-repeat center top;
    background-size: cover;
    z-index: 99;
  }
.header{ 
  position: relative;
  -webkit-transition:all 0.2s linear 0s;
  transition:all 0.2s linear 0s;
  
  opacity: 1;
  z-index: 9;
  .nav_bg{
    background-color: rgba(0,0,0,0.7); box-shadow:0 3px 10px rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;

    
    .nav{
      height: 0.65rem; max-width: 1200px; margin: 0 auto; overflow: hidden;
      
      display:-moz-box;
      display:-webkit-box;
      display:box;
      li{
        height: 0.65rem; line-height: 0.65rem; font-size: 0.22rem; text-align: center; color: #fff;
        -moz-box-flex:1; //占3成
        -webkit-box-flex:1;
        box-flex:1;
        z-index: 1;
        position: relative;
        a{
          display: inline-block;
          img{
            margin-top: 0.05rem;
          }
        }
        .logo{
          display: inline-block;
          width: 0.49rem;
          height: 0.49rem;
          background: url('~/static/img/logo.png') no-repeat center top;
          background-size: cover;
          vertical-align: middle;
        }
        b{
          display: none;
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 4.35rem;
          height: 0.65rem;
          background: url('~/static/img/nav_bg.png') no-repeat center bottom;
          background-size: cover;
        }
        .nav_a{
          display: inline-block;
          padding: 0 0.24rem;
          color: #fff;
          cursor: pointer;
          margin-right: 0.12rem;
          position: relative;
          z-index: 2;
        }
        span{
          display: none;
          a{
            vertical-align: top;
            font-size: 0.2rem;
            padding: 0 0.13rem;
            color: #fff;
            position: relative;
            z-index: 1;
            i{
              display: none;
              position: absolute;
              left: 50%;
              top: 0;
              transform: translateX(-50%);
              -webkit-transform: translateX(-50%);
              width: 4.35rem;
              height: 0.65rem;
              background: url('~/static/img/nav_bg.png') no-repeat center bottom;
              background-size: cover;
            }
          }
        }
        .dian{
          width: 0.1rem; height: 0.1rem; display: inline-block; background-color: #a7161d; border-radius: 50%; margin-top: 0.3rem; vertical-align: top; margin-right: 16px;
        }
        @media only screen and (max-width: 900px) {
          .dian{ margin-right: 3px;}
        }
      }
      
    }
    .nav_down{ 
      position: absolute; top: 0.72rem; max-width: 1280px; left: 0; width: 100%; display: none;
      li{ 
        height: 0.54rem; line-height: 0.54rem; font-size: 0.24rem; position: absolute; text-align: center;
        a{ color: #000;}
      }
    }
  }
}
.header_hide{
  opacity: 0;
  z-index: -1;
}


//一级导航高亮设置
.hui #hui,
.ji #ji,.youwu #ji,.jiyue #ji,.xinyuan #ji,
.cheng #cheng,
.eed #eed{
  font-size: 0.3rem;
  z-index: 0;
  .nav_a{
    border-bottom: #a7161d solid 2px;
    height: 0.65rem;
    box-sizing: border-box;
    
  }
  b,span{
    display: inline-block;
  }
}
.ji #ji,.youwu #ji,.jiyue #ji,.xinyuan #ji{
  // .nav_a{
  //   border-bottom: none;
  //   height: 0.65rem;
  // }
  b{
    display: none;
  }
}

// 二级导航高亮设置
.ji #ji,.youwu #ji .ji_youwu,.jiyue #ji .ji_jiyue,.xinyuan #ji .ji_xinyuan
{
  border-bottom: #fff solid 2px;
  height: 0.65rem;
  box-sizing: border-box;
  z-index: 0;
  span{
    display: inline-block!important;
    
  }
  i{
    display: inline-block;
  }
}


</style>
