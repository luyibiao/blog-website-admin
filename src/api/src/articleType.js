import axios from '../axios'

export default {
  // 查询文章类型
  queryArticleType(data) {
    return axios.post('/type/queryArticleType', data)
  },
  // 增加栏目
  addArticleType(data) {
    return axios.post('/type/addArticleType', data)
  },
  // 删除栏目
  deleteArticleType(data) {
    return axios.post('/type/deleteArticleType', data)
  },

  // 增加二级栏目
  addSecondsArticleType(data) {
    return axios.post('/type/addSecondsArticleType', data)
  },
}