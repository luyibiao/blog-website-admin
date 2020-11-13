

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
    path: '/session/column',
    name: 'column',
    component: () => import(/* webpackChunkName: "column" */ './page/column/column'),
    meta: {
      title: '栏目设置',
      isMenu: true
    }
  },
  {
    path: '/session/side-column',
    name: 'side-column',
    component: () => import(/* webpackChunkName: "side-column" */ './page/side-column/side-column'),
    meta: {
      title: '侧边栏目',
      isMenu: true
    }
  },
  {
    path: '/session/column/add',
    name: 'columnAdd',
    component: () => import(/* webpackChunkName: "columnAdd" */ './page/column/add'),
    meta: {
      title: '增加栏目',
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
    component: () => import(/* webpackChunkName: "banner" */ './page/banner/banner'),
    meta: {
      title: 'banner配置',
      isMenu: true
    }
  },
  {
    path: '/session/banner-edit',
    name: 'banner-edit',
    component: () => import(/* webpackChunkName: "banner-edit" */ './page/banner/banner-edit'),
    meta: {
      title: '增加banner',
    }
  }
]