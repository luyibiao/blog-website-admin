import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components';
import overall from '@/utils/overall'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//注入所有组件
components.install(Vue);

Vue.config.productionTip = false

Vue.prototype.$overall = overall

// 路由守卫
router.beforeEach((to, from, next) => {
 
  document.title = to.meta.title
  next()
})

window.$router = router

window.$vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')