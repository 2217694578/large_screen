<template lang="pug">
.table-wrapper
  .table-header
    .header-title-item(
      v-for="item in headerTitle"
      :key="item"
      :style="{width:headerWidth}"
    ) {{ item }}
  .table-body


</template>

<script>
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
      headerWidth:""
    }
  },
  mounted(){
    this.getHeaderWidth()
  },
  methods:{
    getHeaderWidth(){
      this.headerWidth = parseInt(100 / this.headerTitle.length) + "%"
    }
  }
}
</script>

<style lang="stylus" scoped src="@/style/components/custom_table.styl"></style>