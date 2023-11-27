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
// components
import BannerTitle from '@/components/BannerTitle'
// api
import { getScreenInfo } from '@/api';

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
    this.fetchScreenInfo()
  },
  methods:{
    async fetchScreenInfo(){
      let res = await getScreenInfo({web_name:"three"})
      console.log(res)
    }
  }
}
</script>

<style lang="stylus" scoped src="@/style/views/three_screen.styl"></style>