import axios from '../axios'

export default {
  // 增加个人说明
  addMine(data) {
    return axios.post('/mine/addmine', data)
  },
  // 查询个人说明
  queryMine() {
    return axios.post('/mine/querymine')
  }
}