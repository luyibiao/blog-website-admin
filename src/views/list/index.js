

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
]