<template>
  <header class="header">
    <nav class="nav_bg">
        <ul class="nav">
            <li>
              <a href="#"><img src="~/static/img/logo.png" alt=""></a>
            </li>
            <li id="hui">
              <a class="nav_a">慧</a>
            </li>
            <li id="ji">
              <a class="nav_a">集</a>
              <span>
                <a class="ji_jiyue" href="#">集跃<i></i></a>
                <a class="ji_xinyuan" href="#">心苑<i></i></a>
                <a class="ji_youwu" href="#">尤物<i></i></a>
              </span>
            </li>
            <li id="cheng">
              <a class="nav_a">诚</a>
            </li>
            <li id="eed">
              <a class="nav_a">EED lab</a>
            </li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name:'Header',
  mounted() {
    //二级导航居中
    var $nav = $('.nav'),
        $nav_down = $('.nav_down');
    var navTimer = null;
    $('.nav li,.nav_down li').hover(function(e){
        clearTimeout(navTimer);
        var navL = $nav.offset().left;
        var num = $(this).index();
        $nav_down.show();
        var navLiW = $(this).eq(num).width();
        $nav_down.find('li').eq(num).show().css({'left':navL,'width':navLiW}).siblings().hide();
    },function(){
        navTimer = setTimeout(function(){
            $nav_down.hide();
        },200);
        
    });
  },
}
</script>


<style lang="scss" scoped>

.header{ 
  
  .nav_bg{
    background-color: rgba(0,0,0,0.6); box-shadow:0 3px 10px rgba(0,0,0,0.4);
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
        a{
          display: inline-block;
          img{
            margin-top: 0.05rem;
          }
        }
        .nav_a{
          display: inline-block;
          padding: 0 0.24rem;
          color: #fff;
          cursor: pointer;
          margin-right: 0.12rem;
        }
        span{
          display: none;
          a{
            vertical-align: top;
            font-size: 0.2rem;
            padding: 0 0.13rem;
            color: #fff;
            position: relative;
            i{
              display: none;
              position: absolute;
              left: 50%;
              top: 0;
              transform: translateX(-50%);
              width: 4.35rem;
              height: 0.65rem;
              background: url('~/static/img/nav_bg.png') no-repeat center bottom;
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


//一级导航高亮设置
.hui #hui,
.ji #ji,.youwu #ji,.jiyue #ji,.xinyuan #ji,
.cheng #cheng,
.eed #eed{
  font-size: 0.3rem;
  .nav_a{
    border-bottom: #a7161d solid 2px;
    height: 0.65rem;
    box-sizing: border-box;
  }
}

// 二级导航高亮设置
.ji #ji,.youwu #ji .ji_youwu,.jiyue #ji .ji_jiyue,.xinyuan #ji .ji_xinyuan
{
  border-bottom: #fff solid 2px;
  height: 0.65rem;
  box-sizing: border-box;
  span{
    display: inline-block;
    i{
      display: inline-block;
    }
  }
  
}


</style>
