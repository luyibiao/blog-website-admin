import axios from '../axios'

export default {
  // 增加标签
  addLabel(data) {
    return axios.post('/label/addLabel', data)
  },
  // 查询标签
  queryLabelList(data) {
    return axios.post('/label/list', data)
  }
}