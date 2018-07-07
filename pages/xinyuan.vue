<template>
  <div class="xinyuan">
    <Header></Header>
    
    <div class="main">
      <img src="~/static/img/ji/xinyuan/banner.jpg" width="100%" alt="">
      <img src="~/static/img/ji/xinyuan/content.jpg" width="100%" alt="">
      <div class="btn">返回</div>
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
  computed:{
    
  },
  methods:{
    
  },
  mounted() {
    
  }
}
</script>




<style lang="scss" scoped>
.xinyuan{
  .main{
    max-width: 1300px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 0 0.3rem rgba(0,0,0,0.15);
    padding-bottom: 0.7rem;
    .btn{
      margin: 0.7rem auto 0;
      cursor: pointer;
    }
  }
}

@media only screen and (max-width: 900px) {
  
}
</style>