
//二级导航居中
var $nav = $('.nav'),
    $nav_down = $('.nav_down');
$('.nav li').hover(function(e){
    var navL = $nav.offset().left;
    var num = $(this).index();
    $nav_down.show();
    var navLiW = $(this).eq(num).width();
    $nav_down.find('li').eq(num).show().css({'left':navL,'width':navLiW}).siblings().hide();
},function(){
    $nav_down.hide();
});

