import login from './src/login'
import label from './src/label'
import overall from './src/overall'
// 文章接口
import article from './src/article'

export default {
  ...login,
  ...label,
  ...overall,
  ...article
}