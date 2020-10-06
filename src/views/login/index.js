

export default [
  {
    path: '/login',
    name: 'login',
    pageName: 'login',
    component: () => import(/* webpackChunkName: "login" */ './login.vue'),
    meta: {
      isNew: true,
      title: '登陆',
    }
  }
]