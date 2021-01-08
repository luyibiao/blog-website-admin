import axios from '../axios'

export default {
  // 增加文章
  addArticle(data) {
    return axios.post('/article/add', data)
  },

  //  查询文章
  queryArticle(data) {
    return axios.post('/article/query', data)
  },

  // 修改文章
  updateArticle(data) {
    return axios.post('/article/update', data)
  },

  // 查询文章详情
  queryArticleDetail(data) {
    return axios.post('/article/detail', data)
  },

  // 删除文章
  deleteArticle(data) {
    return axios.post('/article/delete', data)
  },

  // 获取评论数
  queryCommonetCount(data) {
    return axios.post('/article/queryCommonetCount', data)
  },
  // 上传图片
}

