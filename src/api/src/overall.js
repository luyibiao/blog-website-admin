import axios from '../axios'

export default {
  // 查询文章类型
  queryArticleType(data) {
    return axios.post('/overall/queryArticleType', data)
  }
}