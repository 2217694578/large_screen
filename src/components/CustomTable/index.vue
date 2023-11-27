<template lang="pug">
.table-wrapper
  .table-header
    .header-title-item(
      v-for="item in headerTitle"
      :key="item.field"
      :style="{width:headerWidth}"
    ) {{ item.label }}
  vue-seamless-scroll(
    :data="tableData"
    class="table-body"
    :class-option="defaultOption"
  )
    ul(class="table-body-content")
      li(
        v-for="item in tableData"
        :key="item.id"
        class="table-data-item"
      )
        .field-item(
          v-for="k in headerTitle"
          :key="k.field"
          :style="{width:headerWidth}"
        ) {{ item[k.field] }}
      li(class="table-data-last-item") 到底了~
</template>

<script>
// import { fontSizeRem } from '@/utils'
export default {
  name:"CustomTable",
  props:{
    headerTitle:{
      type:Array,
      required:true
    },
    tableData:{
      type:Array,
      required:true
    }
  },
  data(){
    return {
      headerWidth:"",
      defaultOption:{
        // singleHeight:fontSizeRem(28),
        // waitTime:1500,
        step:0.5,
        openWatch:true
      }
    }
  },
  mounted(){
    this.processPropsData()
  },
  methods:{
    processPropsData(){
      this.headerWidth = parseInt(100 / this.headerTitle.length) + "%"
    }
  }
}
</script>

<style lang="stylus" scoped src="@/style/components/custom_table.styl"></style>