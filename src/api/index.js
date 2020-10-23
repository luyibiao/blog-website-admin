import login from './src/login'
import label from './src/label'
import overall from './src/overall'
// 文章接口
import article from './src/article'
// 权限部分接口
import session from './src/session'
// 轮播
import banner from './src/banner'

export default {
  ...login,
  ...label,
  ...overall,
  ...article,
  ...session,
  ...banner
}