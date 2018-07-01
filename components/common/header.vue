<template>
  <header class="header">
    <div class="logo"><img src="~/static/img/logo.png" alt=""></div>
    <nav class="nav_bg">
        <ul class="nav">
            <li>慧</li>
            <li>集</li>
            <li>诚</li>
            <li><i class="dian"></i>EED Lab</li>
        </ul>
        <ul class="nav_down">
            <li><a href="">• 案例展示 •</a></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name:'header',
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
  padding-top: 0.3rem;
  .logo{ 
    text-align: center;
  }
  .nav_bg{
    background-color: #ececec; margin-top: 0.3rem; box-shadow:0 3px 3px #ddd; position: relative;
    .nav{
      height: 0.72rem; max-width: 1280px; margin: 0 auto; border-left: 1px solid #d2d2d2; border-right: 1px solid #d2d2d2;
      li{
        float: left; height: 0.72rem; float: left; line-height: 0.72rem; width: 25%; font-size: 0.3rem; text-align: center; border-left: #d2d2d2 solid 1px; margin-left: -1px;
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



</style>
