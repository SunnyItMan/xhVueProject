<template>
  <div class="login">
    <div class="login-box" v-if="show">
      <el-form :model="ruleForm" ref='form' label-width="100px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码"  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: true,
      ruleForm: {
        userName: null,
        password: null
      },
      rules: []
    }
  },
  created () {},
  methods: {
    submit () {
      this.$router.push({path: '/index'})
    }
  },
  watch: {
    '$route.path': {
      handler (path) {
        if (path === '/') {
          this.show = true
        } else {
          this.show = false
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login-box {
  width: 600px;
  height: 400px;
  border:  1px solid #cccccc;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left:-300px;
  margin-top:-200px
}
</style>
