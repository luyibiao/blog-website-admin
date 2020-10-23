
import axios from '../axios'

export default {
  // 上传轮播图
  addbnner(data) {
    return axios.post('/banner/addbanner', data)
  }
}