import cookie from '@/utils/cookie'

export default {
  setbBreadcrumbInfo(state, val) {
    state.breadcrumbInfo = val
  },
  setUser(state, info) {
    state.user = info
    // 登录后设置token， 2小时后过期
    cookie.cookieSet('token', info.token, 2)
  },
  setArticleType(state, val) {
    state.articleType = val
  }
}