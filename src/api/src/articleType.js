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
  },
  // 根据一级栏目查询二级栏目
  queryTypeOrSecondsType(data) {
    return axios.post('/type/queryTypeOrSecondsType', data)
  },
  // 增加侧边栏
  addSideColumn(data) {
    return axios.post('/type/addSideColumn', data)
  },
  // 查询侧边栏
  querySideColumn(data) {
    return axios.post('/type/querySideColumn', data)
  },
  // 删除侧边栏
  deleteSideCoulmn(data) {
    return axios.post('/type/deletesSideCoulmn', data)
  },
  // 修改侧边栏
  updateSideColumn(data) {
    return axios.post('/type/updateSideColumn', data)
  }
}