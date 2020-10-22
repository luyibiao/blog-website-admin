

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
]