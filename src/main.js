import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components';
import overall from '@/utils/overall'
import vueFilters from '@/filters/filters.js'
import api from '@/api/'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { size: 'medium' });

//注入所有组件
components.install(Vue);

Vue.config.productionTip = false

Vue.prototype.$overall = overall
Vue.prototype.$api = api
Vue.prototype.$vueFilters = vueFilters
// 注册过滤器
Vue.mixin({
  filters: vueFilters
});
// 路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

window.$router = router

// 拿文章类型字典
api.queryArticleType().then(res => {
  store.commit('setArticleType', res.list)
  window.$vue = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

