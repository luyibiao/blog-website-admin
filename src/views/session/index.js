

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
]