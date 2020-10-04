

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
]