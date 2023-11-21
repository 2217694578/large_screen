<template lang="pug">
.header-wrapper
  //- 左侧容器
  .header-left-wrapper
    .cube-loader
      .cube-top
      .cube-wrapper
        span(style="--i:0" class="cube-span")
        span(style="--i:1" class="cube-span")
        span(style="--i:2" class="cube-span")
        span(style="--i:3" class="cube-span")

  //- 中间标题容器
  .header-title-wrapper
    .title {{$route.path === '/basic_screen' ? "基础数据可视化大屏" : "三维数据可视化大屏"}}

  //- 右侧容器
  .header-right-wrapper
    .time-wrapper
      .date {{ date }}
      .time {{ time }}
    .week-wrapper
      .week {{ week }}


</template>

<script>
import { formatDatetime } from '@/utils'

export default {
  name:"Header",
  data(){
    return {
      clockTimestamp:"",
      date: '',
      time: '',
      week: '',
    }
  },
  mounted(){
    this.formatClockTime()

    setInterval(this.formatClockTime,1000)
  },
  methods:{
    formatClockTime(){
      this.clockTimestamp = Date.now()
      this.date = formatDatetime(this.clockTimestamp, 'yyyy-MM-dd')
      this.time = formatDatetime(this.clockTimestamp, 'hh:mm:ss')
      this.week = formatDatetime(this.clockTimestamp, '星期')
    }
  }
}
</script>

<style lang="stylus" scoped src="@/style/components/header.styl"></style>