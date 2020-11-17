

export default [
  {
    path: '/list/all',
    name: 'all',
    component: () => import(/* webpackChunkName: "all" */ './page/all'),
    meta: {
      title: '所有文章',
      isMenu: true
    }
  },
  {
    path: '/list/line',
    name: 'line',
    component: () => import(/* webpackChunkName: "line" */ './page/line'),
    meta: {
      title: '已上线',
      isMenu: true
    }
  },
  {
    path: '/list/offline',
    name: 'offline',
    component: () => import(/* webpackChunkName: "offline" */ './page/offline'),
    meta: {
      title: '已下线',
      isMenu: true
    }
  },
  {
    path: '/list/topping',
    name: 'topping',
    component: () => import(/* webpackChunkName: "topping" */ './page/topping'),
    meta: {
      title: '置顶文章',
      isMenu: true
    }
  },
  {
    path: '/list/hotArticles',
    name: 'hotArticles',
    component: () => import(/* webpackChunkName: "hotArticles" */ './page/hotArticles'),
    meta: {
      title: '热评文章',
      isMenu: true
    }
  },
  {
    path: '/list/recommend',
    name: 'recommend',
    component: () => import(/* webpackChunkName: "recommend" */ './page/recommend'),
    meta: {
      title: '推荐文章',
      isMenu: true
    }
  },
  {
    path: '/list/draff',
    name: 'draff',
    component: () => import(/* webpackChunkName: "draff" */ './page/draff'),
    meta: {
      title: '草稿',
      isMenu: true
    }
  },
]