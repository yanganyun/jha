<template>
  <div class="footer_all">
    <div class="footer">
      <h3><span>联系我们</span></h3>
      <p class="footer_nav">
        <a href="#">ABOUT</a>
        <a href="#">WORKS</a>
        <a href="#">NEWS</a>
        <a href="#">CAREERS</a>
      </p>
      <div class="go_top">
        <span @click="gotop">TOP ↑</span>
        <p>版权所有© JHA DESIGN</p>
      </div>
      <div class="footer_info">
        Copyright © 2018 www.jha-design.com 沪ICP备14001709号 | 互联网违法和不良信息举报电话：0571-81683755 blxxjb@alibaba-inc.com
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Footer',
  methods:{
    gotop(){
      document.getElementsByTagName('html')[0].scrollTop = 0;
      document.getElementsByTagName('body')[0].scrollTop = 0;
    }
  },
  mounted() {
    
  },
}
</script>


<style lang="scss" scoped>
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

</style>
