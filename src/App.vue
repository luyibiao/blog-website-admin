<template>
  <div id="app">
    <template v-if="$route.meta.isNew">
	    <router-view />
  	</template>
  	<template v-else >
  		<my-home class="app-home"></my-home>
  	</template>
  </div>
</template>

<script>
import MyHome from '@/views/app/home';

export default {
  components: {
    MyHome, 
  },
  created() {
    //在页面加载时读取sessionStorage里的状态信息 
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
        sessionStorage.removeItem('store')
    } 
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    });
  },
  mounted() {
    
  },
}
</script>

<style lang="scss">
@import '~@/assets/scss/variable.scss';
@import '~@/assets/scss/mixin.scss';
@import '~@/assets/scss/base.scss';

#app{
  position: relative;
  // background: $main-white;
  padding: 0 5px;
  box-sizing: border-box;
  min-height: 100%;
  margin: 0 auto;
  height: 100%;
  color: $main-black;
  // background: rgba($color: $main-white, $alpha: .5);
  .app-home {
  
  }
}
</style>
