

export default [
  {
    path: '/edit/articles',
    name: 'articles',
    component: () => import(/* webpackChunkName: "articles" */ './page/articles'),
    meta: {
      title: '编辑文章',
      isMenu: true
    }
  },

  {
    path: '/edit/home-info',
    name: 'home-info',
    component: () => import(/* webpackChunkName: "home-info" */ './page/home-info'),
    meta: {
      title: '编辑首页',
      isMenu: true
    }
  }
]