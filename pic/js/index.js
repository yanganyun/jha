$(function(){

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

})