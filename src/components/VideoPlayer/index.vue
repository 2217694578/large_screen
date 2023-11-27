<template lang="pug">
.video-wrapper
  video(
    :id="id"
    class="video-js vjs-default-skin video-player"
  )
    source(:src="src")
</template>

<script>
// MP4 player
import videojs from "video.js"
import "video.js/dist/video-js.css"

export default {
  name:"VideoPlayer",
  props:{
    id:{
      type:String,
      required:true
    },
    src:{
      type:String,
      default:""
    },
    options:{
      type:Object,
      default:function(){
        return {
          controls:true,
          autoplay:true,
          loop:true,
          muted:true //想要在网页中自动播放，必须设置静音模式
        }
      }
    }
  },
  data(){
    return {
      player:null
    }
  },
  watch:{
    src(){
      this.updateUrl()
    }
  },
  mounted(){
    this.initVideoPlayer()
  },
  methods:{
    initVideoPlayer(){
      this.player = videojs(this.id,this.options, function(){
        this.play()
      })
    },
    updateUrl(){
      this.player.src(this.src)
      this.player.play()
    }
  },
  beforeDestroy(){
    if(this.player !== null){
      this.player.dispose()
    }
  }
}

</script>
<style lang="stylus" scoped src="@/style/components/video_player.styl"></style>