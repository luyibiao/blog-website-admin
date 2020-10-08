<template>
  <div id="home" class="home">
    <div class="sidebar">
      <my-menu />
    </div>
    <router-view class="content-router_wrap"/>   
  </div>
</template>

<script>
import myMenu from './menu.vue';
import myRouter from './router';
export default {
  name: 'home',
  data(){
    return{

    }
  },
  methods: {
    
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
   
  }
  .content-router_wrap{
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 20px 70px;
    box-sizing: border-box;
    width: 100%;
    overflow-y: auto;
    // overflow: hidden;
    // overflow-y: auto;
  }
}
</style>
