

export default [
  {
    path: '/label/label-list',
    name: 'label-list',
    component: () => import(/* webpackChunkName: "label-list" */ './page/label-list'),
    meta: {
      title: '标签列表',
      isMenu: true
    }
  },
  {
    path: '/label/hot-label',
    name: 'hot-label',
    component: () => import(/* webpackChunkName: "hot-label" */ './page/hot-label'),
    meta: {
      title: '热门标签',
      isMenu: true
    }
  },
]