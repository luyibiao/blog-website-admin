import cookie from '@/utils/cookie'

export default {
  setbBreadcrumbInfo(state, val) {
    state.breadcrumbInfo = val
  },
  setUser(state, info) {
    state.user = info
    console.log(info)
    // 登录后设置token， 2小时后过期
    cookie.cookieSet('token', info.token, 2)
  }
}