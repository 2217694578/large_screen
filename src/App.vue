<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  mounted(){
    const html = document.getElementsByTagName('html')[0]
    const windowWidth = document.body.clientWidth

    const width = windowWidth < 1200 ? 1200 : windowWidth

    html.style.fontSize = width / 1920 * 100 + 'px'
  }
}
</script>

<style lang="stylus" src="./style/base.styl"></style>
