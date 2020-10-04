<template>
  <div id="home" class="home">
    <div class="sidebar">
      <my-menu />
      <div class="user-column">
        <div class="user-column_wrap">
          <div class="user-name">
            <small>{{getUser.insurerCompanyName || '-'}}</small>
          </div>
          <div class="user-companyName">
            {{getUser.realName || '-'}}
          </div>
          <div class="unlogin">
            <el-button round @click="unLogin">退出登录</el-button>
          </div>
        </div>

      </div>
    </div>
    <div class="content">
      <router-view />   
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import myMenu from './menu.vue';
import myRouter from './router';
export default {
  name: 'home',
  data(){
    return{

    }
  },
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    //退出登录，清空缓存
    unLogin(){
      // this.$plugins.clearLStorage();
      // this.$plugins.clearSStorage();
      // this.$store.replaceState({});
      this.$router.replace('/login')
      this.$nextTick(_ => void window.location.reload())
    },
  },
  mounted() {   

  },
  components: {
    myMenu,
    myRouter,
  },
  watch: {
    
  },
}
</script>

<style lang="scss">
@import '~@/assets/scss/variable.scss';
@import '~@/assets/scss/mixin.scss';
.home{
  @include inlineBox();
  display: flex;
  .sidebar{
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    .user-column{
      text-align: center;
      color: $main-white;
      padding: 0px 0 0px;
      .user-column_wrap {
        width: 120px;
        background-color: #545c64;
        padding-bottom: 10px;
        box-sizing: border-box;
      }
      .user-companyName{
        padding: 5px 10px;
        width: 100px;
        font-size: $fs-16;
      }
      .user-name{
        padding: 5px 10px;
        width: 100px;
      }
      .unlogin{
        padding: 5px 10px;
        width: 100px;
        .el-button{
          padding: 4px 8px;
          font-size: $fs-12;
        }
      }
    }
    .menu{
      height: calc(100% - 200px);
      flex: 1;
    }
  }
  .content{
    @include inlineBox();
    flex: 1; 
    padding: 10px;
    overflow: auto;
    .router{
      min-width: 1000px;
      height: 100%;
    }
  }
}
</style>
