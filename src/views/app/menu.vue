<template>
  <div id="my_menu" class="menu">
    <!-- 导航栏 -->
    <ul class="first-menu chh-menu">
      <li 
        class="first-menu-item" 
        v-for="(item, key) in menu" 
        :class="{'active': currentMenu.moduleName === key}"
        :key="key" 
        @click="firstMenuClick(item, key)"
      >{{item.name}}</li>
    </ul>
    <ul class="sec-menu chh-menu">
      <li 
        class="sec-menu-item" 
        :class="{ 
          'active': currentMenu.name === item.name,
          'inServiceOrders': item.name === 'inServiceOrders'
        }"
        v-for="(item, index) in secMenu" 
        :key="index" 
        @click="secMenuClick(item, index)"
      >
        <span size="small">{{item.meta.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import menu from './menus'
export default {
  name: "my-menu",
  data() {
    return {
      menu,
      currentMenu: {
        //模块名
        moduleName: '',
        //页面名
        name: ''
      },
    };
  },
  mounted() {
    this.setCurrentMenu();
  },
  computed: {
    //二级菜单
    secMenu(v) {
      let secMenu = this.menu[this.currentMenu.moduleName];
      //过滤非菜单栏的页面
      return secMenu ? secMenu.children.filter(v => v.meta.isMenu) : [];;
    },
  },
  methods: {
    firstMenuClick(item, key) {
      if (this.currentMenu.moduleName === key) return
      //给当前点击对象选中样式
      this.currentMenu.moduleName = key;
      //默认跳转子集菜单第一个
      this.$router.push(this.secMenu[0].path);
    },
    secMenuClick(item, key) {
      if (this.currentMenu.name === item.name) return
      //给当前点击对象选中样式
      this.currentMenu.name = item.name;
      this.$router.push(item.path);
    },
    //设置当前菜单
    setCurrentMenu(){
       //从路径中取出值 0号位为模块名  1号位为页面名 
      var path = this.$route.path.split('/').filter(v => v);
      this.currentMenu = {
        //模块名
        moduleName: path[0] ? path[0] : 'home',
        //页面名
        name: path[1] ? path[1] : 'home'
      }
    },
  },
  watch: {
    '$route.path'(n,o){
      this.setCurrentMenu();
    },
  }
};
</script>

<style lang="scss">
@import '~@/assets/scss/variable.scss';
@import '~@/assets/scss/mixin.scss';
.menu{
  position: relative;
  @include inlineBox($width: auto);
  background-color: $main-white;
  .chh-menu{
    display: inline-block;
    height: 100%;
    width: 120px;
    vertical-align: top;
  }
  .first-menu{
    background-color: #545c64;
    color: $main-white;
    text-align: center;
    .first-menu-item{
      position: relative;
      padding: 10px 20px;
      transition: all 0.3s;
      cursor: pointer;
      border-bottom: 1px solid #434a50;
      &.active{
        color: #fff;
        border-right: 2px solid #1A1C23;
        background-color: #1A1C23;
        &::after{
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: -7px;
          content: '';
          border: 7px solid;
          border-color: transparent #fff transparent transparent;
        }
      }
      &:hover{
        background-color: #1A1C23;
      }
    }
  }
  .sec-menu{
    width: 150px;
    .sec-menu-item{
      padding: 10px 0 10px 30px;
      transition: background-color 0.3s;
      cursor: pointer;
      .el-badge__content.is-fixed{
        right: 0;
      }
      &.active{
        background-color: $list-active-bg;
        color: #409EFF;
      }
      &:hover{
        background-color: $list-hover-bg;
      }
      &.inServiceOrders .el-badge .el-badge__content{
        background-color: #409EFF;
      }
    }
  }
}
</style>
