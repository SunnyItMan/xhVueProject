<template>
  <div>this is proxy
    <div id='ueditor' type='text/plain'></div>
    <!-- <pagination :pager='pager'></pagination> -->
  </div>
</template>
<script>
import pagination from '../../common/paination'
export default {
  data () {
    return {
      ue: '',
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      },
      defaultMsg: 'this is a test example',
      pager: {
        pageSize: 10,
        pageIndex: 1,
        pageTotal: 100
      }
    }
  },
  created () {},
  methods: {
    handleSizeChange (v) {
      console.log(v)
    },
    handleCurrentChange (v) {
      console.log(v)
    },
    getUEContent () {
      return this.ue.getContent()
    },
    destroyed () {
      this.us.destroy()
    }
  },
  mounted () {
    const that = this
    this.ue = window.UE.getEditor('ueditor', this.config)
    this.ue.addListener('ready', function () {
      that.ue.setContent(that.defaultMsg)
    })
  },
  components: {
    pagination
  }
}
</script>
