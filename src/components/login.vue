<template>
  <div class="login">
    <!-- <p class='title'>基于restFul架构寻人系统</p> -->
    <div class="login-box" v-if="show">
      <el-form :model="ruleForm" ref='form' label-width="60px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="userType">
          <el-select v-model="ruleForm.userType" placeholder="请选择角色">
            <el-option label="用户" value="USER"></el-option>
            <el-option label="管理员" value="ADMIN"></el-option>
          </el-select>
        </el-form-item>
        <el-button @click="submit" style='width:144px;margin-left:59px;font-size:14px'>登录</el-button>
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
        password: null,
        userType: null
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
<style>
.login-box .el-form-item__label {
  color:#fff;
}
</style>

<style lang="scss" scoped>
.title {
  font-size:40px;
  color: #ffffff;
  position: absolute;
  top: 25%;
  left:36.5%
}
.login {
  width: 100wh;
  height: 100vh;
  background-image: url('./../assets/login-bg1.png');
  background-repeat: no-repeat;
  background-size:  100% 100%
}
.login-box {
  padding: 20px;
  border:  1px solid #cccccc;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 3px 3px #515b68
}
</style>
