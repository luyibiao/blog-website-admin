

export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './page/home'),
    meta: {
      title: '数据概览',
      isMenu: true
    }
  }
]