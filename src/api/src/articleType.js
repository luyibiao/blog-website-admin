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
  // 修改栏目
  updateArticleType(data) {
    return axios.post('/type/updateArticleType', data)
  },

  // 增加二级栏目
  addSecondsArticleType(data) {
    return axios.post('/type/addSecondsArticleType', data)
  },
  // 删除二级栏目
  deleteSecondsArticle(data) {
    return axios.post('/type/deleteSecondsArticle', data)
  },
  // 查询二级栏目
  querySecondsArticleType(data) {
    return axios.post('/type/querySecondsArticleType', data)
  },
  // 修改二级栏目
  updateSecondsArticle(data) {
    return axios.post('/type/updateSecondsArticle', data)
  }
}