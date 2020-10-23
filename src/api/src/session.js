import axios from '../axios'

export default {
  // 增加个人说明
  addMine(data) {
    return axios.post('/mine/addmine', data)
  },
  // 查询个人说明
  queryMine() {
    return axios.post('/mine/querymine')
  },
  // 修改个人说明
  updateMine(data) {
    return axios.post('/mine/updatemine', data)
  }
}