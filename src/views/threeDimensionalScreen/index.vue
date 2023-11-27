<template lang="pug">
.page
  .left-area

  .right-top-area
    banner-title(title="数据展示一")

  .right-middle-area
    banner-title(title="数据展示二")

  .right-bottom-area
    banner-title(title="数据展示三")

</template>

<script>
import BannerTitle from '@/components/BannerTitle'
export default {
  name:"ThreeDimensionalScreenPage",
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

<style lang="stylus" scoped src="@/style/views/three_screen.styl"></style>