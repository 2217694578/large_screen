<template lang="pug">
.card
  .bg
    .inner-content
      slot(name="content")
  .blob
</template>

<script>
export default {
  name:"CardBackground"
}
</script>

<style lang="stylus" scoped src="@/style/components/card_background.styl"></style>