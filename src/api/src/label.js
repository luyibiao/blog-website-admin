import axios from '../axios'

export default {
  // 增加标签
  addLabel(data) {
    return axios.post('/label/addLabel', data)
  },
  // 查询标签
  queryLabelList(data) {
    return axios.post('/label/list', data)
  },
  // 修改标签
  updateLabel(data) {
    return axios.post('/label/update', data)
  },
  // 删除标签
  deleteLabel(data) {
    return axios.post('/label/delete', data)
  },
  // 设置热门标签
  updateHotLabel(data) {
    return axios.post('/label/hot', data)
  }
}