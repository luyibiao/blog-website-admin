<template>
  <div class="page-login-container">
    <i class="half"></i>
    <el-form 
    ref="loginForm" 
    :model="loginForm" 
    :rules="loginRules" 
    class="login-form" 
    auto-complete="on" 
    label-position="left">

      <div class="title-container">
        <h3 class="title">九七个人博客管理系统</h3>
      </div>

      <el-form-item prop="account">
        <span class="svg-container">
          <i class="iconfont icon-guanliyuan"></i>
        </span>
        <el-input
          v-model.trim="loginForm.account"
          placeholder="账号"
          name="account"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="iconfont icon-mimaffffffpx"></i>
        </span>
        <el-input
          :type="passWordType"
          v-model.trim="loginForm.password"
          placeholder="密码"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handleLogin" />
      </el-form-item>

      <el-button 
      :loading="loading"
      type="primary" 
      style="width:100%;margin-bottom:30px;" 
      @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'page-login',
  data() {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      loginRules: {
        account: [{ required: true, trigger: 'blur', message: '请输入账号' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      },
      passWordType: 'password',
      loading: false
    }
  },
  created() {
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        //验证通过
        if (valid) {
          this.loading = true;
          this.$api.getUser(this.loginForm).then(res => {
            //把登陆信息存入仓储
            this.$store.commit('setUser', res);    
            this.$router.push('/');
            this.loading = false;
         }).catch(e => this.loading = false);
        }
      })
    },
  }
}
</script>



<style lang="scss">
@import '~@/assets/scss/variable.scss';
@import '~@/assets/scss/mixin.scss';
.page-login-container{
  text-align: center;
  height: 100%;
  background-color: inherit;
  .login-form{
    position: relative;
    @include inlineBox($width: 520px, $height: auto);
    background-color: $main-white;
    padding: 20px;
    border-radius: $content-radius;
    @include shadow-base();
    .title-container{
      padding-bottom: 20px; 
    }
  }
}
</style>
