<template>
  <div>
    <div class="header">this is index pages</div>
    <div class="content">
      <div class="menu">
       <el-row class="tac">
          <el-col>
            <div @click="isCollapse === !isCollapse">展开</div>
            <el-menu
              :default-active="defaultActive"
              :collapse="isCollapse"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu :index='item.sequence.toString()' v-for="item in items" :key='item.index'>
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.name}}</span>
                </template>
                <el-menu-item :index='childItem.id.toString()' v-for="childItem in item.subMenu" :key='childItem.index' @click='_toPages(childItem.name)'>{{childItem.name}}</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="main">
        <div>
          <el-tabs type='border-card'  @tab-remove="removeTab" v-model="activeTab"  @tab-click="changePages">
            <el-tab-pane :label='item.title' v-for="(item, index) in tabs" :key='item.name' :name='item.name' :closable="index!==0"></el-tab-pane>
            <router-view v-if="isTrue"></router-view>
          </el-tabs>
        </div>
    </div>
    </div>
  </div>
</template>
<script>
import routes from '../router'
import api from '../api/index'
// import axios from 'axios'
export default {
  data () {
    return {
      isCollapse: false,
      isTrue: true,
      activeTab: '1', // 必须和tabs中的name值相等，才能高亮显示
      defaultActive: '',
      items: [],
      tabs: [
        {
          title: '总览',
          path: '/',
          name: '1'
        }
      ],
      tabIndex: 1,
      count: 2 // 记录添加的tab的name属性大于等于2的数就行
    }
  },
  created () {
    this.getTab()
    this.getMenu()
  },
  mounted () {
  },
  methods: {
    getMenu () {
      api('../json/menu.json', 'get').then(res => {
        console.log('abc', res)
        this.items = res.content
        let curTab = this.$route.meta.name
        if (curTab) {
          let arr = []
          this.items.forEach(x => {
            arr.push(...x.subMenu)
          })
          this.defaultActive = arr.filter(x => x.name === curTab)[0].id + ''
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err || '获取数据失败'
        })
      })
    },
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    _toPages (v1) {
      let route = routes.options.routes[0].children
      let tabs = this.tabs
      let bool = tabs.some(x => { return x.title === v1 })
      var path = ''
      let tabIndex = ''
      if (bool) {
        for (let i = 0, l = tabs.length; i < l; i++) {
          if (tabs[i].title === v1) {
            tabIndex = tabs[i].name
            path = tabs[i].path
          }
        }
        this.$router.push({ path: '/' + path })
        this.activeTab = tabIndex + ''
      } else {
        this.count = this.count + 1 + ''
        let newTabIndex = this.count
        let pathArr = route.filter(x => {
          return x.hasOwnProperty('meta')
        }).filter(x => {
          return x.meta.name === v1
        })
        tabs.push({ title: v1, path: pathArr[0].path, name: newTabIndex })
        this.activeTab = newTabIndex
        this.$router.push({ path: '/' + pathArr[0].path })
      }
    },
    changePages (arg) {
      let name = arg.label
      if (name === '总览') {
        this.$router.push({ path: '/' })
      } else {
        let arr = routes.options.routes[0].children.filter(x => {
          return x.hasOwnProperty('meta')
        }).filter(x => {
          return x.meta.name === name
        })
        let arr1 = []
        this.items.forEach(x => {
          arr1.push(...x.subMenu)
        })
        this.defaultActive = arr1.filter(x => x.name === arr[0].meta.name)[0].id + ''
        let path = arr[0].path
        this.$router.push({ path: '/' + path })
      }
    },
    removeTab (target) {
      let index = this.tabs.findIndex(x => { return x.name === target })
      let newTab = this.tabs.filter(x => { return x.name !== target })
      this.tabs = newTab
      if (target === this.activeTab) {
        this.$router.push({ path: '/' + this.tabs[index - 1].path })
        this.activeTab = this.tabs[index - 1].name
      } else {
        this.$router.push({ path: '/' + this.tabs[index].path })
        this.activeTab = this.tabs[index].name
      }
    },
    getTab () {
      let curTab = this.$route.meta.name
      // console.log(curTab)
      if (curTab) {
        this.tabs.push({
          title: curTab,
          name: '2',
          path: this.$route.path.slice(1)
        })
        this.activeTab = '2'
      }
    }
  },
  watch: {
    '$route.path': {
      handler (path) {
        console.log('path:')
        console.log(path)
      }
    }
  },
  filters: {}
}
</script>
<style lang="sass" scoped>
.header
  height: 100px;
  background: #ccc;
.content
  height: calc(100vh - 100px);
  display: flex
.el-col-24
  height: calc(100vh - 100px)
  background: #545c64
.el-submenu
  width: 200px
.el-menu
  border: none
.main
  flex: 1
  padding: 14px
  overflow: hidden
</style>
