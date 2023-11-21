<template lang="pug">
.banner-wrapper
  .banner-title {{ title }}
</template>

<script>
export default {
  name:"BannerTitle",
  props:{
    title:{
      type:String,
      required:true
    }
  },
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>

<style lang="stylus" scoped src="@/style/components/banner_title.styl"></style>