<template>
  <div>
    <p>{{text}}</p>
    <ul>
      <li v-for="item in items" :key="item.index">{{item.author_name}}</li>
    </ul>
  </div>
</template>
<script>
import api from '../../api/index'
export default {
  data () {
    return {
      text: '这是订单管理',
      items: []
    }
  },
  created () {
    this.getAllData()
  },
  mounted () {
    // this.getAllData()
  },
  methods: {
    getAllData () {
      api('../json/user.json', 'get')
        .then(res => {
          this.items = res.arr
        }).catch(err => {
          this.$message({
            type: 'error',
            message: err || '获取失败'
          })
        })
    }
  },
  filters: {}
}
</script>
