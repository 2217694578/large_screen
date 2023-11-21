<template lang="pug">
.page
  //- 左侧容器
  .left-top-wrapper
    banner-title(title="可视化图表1")

  .left-middle-wrapper


  //- 中央容器
  .middle-wrapper


  //- 右侧容器
  .right-top-wrapper

  .right-middle-wrapper


  //- 底部容器
  .bottom-left-wrapper

  .bottom-middle-wrapper

  .bottom-right-wrapper

</template>

<script>
import BannerTitle from '@/components/BannerTitle';

export default {
  name:"BasicScreenPage",
  components:{
    BannerTitle
  },
  data(){
    return {

    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style lang="stylus" scoped src="@/style/views/basic_screen.styl"></style>