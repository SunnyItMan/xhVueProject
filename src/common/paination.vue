<template>
  <div>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pager.pageIndex"
      :page-sizes="[10, 20, 30, 40, 50]"
      :page-size="pager.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pager.pageTotal">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    pager: {
      type: Object
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
