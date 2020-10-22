

export default [
  {
    path: '/session/session',
    name: 'session',
    component: () => import(/* webpackChunkName: "session" */ './page/session'),
    meta: {
      title: '权限设置',
      isMenu: true
    }
  },
  {
    path: '/session/about-mine',
    name: 'about-mine',
    component: () => import(/* webpackChunkName: "about-mine" */ './page/about-mine'),
    meta: {
      title: '关于我',
      isMenu: true
    }
  },
  {
    path: '/session/banner',
    name: 'banner',
    component: () => import(/* webpackChunkName: "banner" */ './page/banner'),
    meta: {
      title: 'banner配置',
      isMenu: true
    }
  }
]