// 数据管理
import home from './home'
// 文章管理
import edit from './edit'
// 文章列表
import list from './list'
// 标签列表
import label from './label'
// 权限设置
import session from './session'
// 登录
import login from './login'

export default [
  ...home,
  ...edit,
  ...list,
  ...label,
  ...session,
  ...login
]