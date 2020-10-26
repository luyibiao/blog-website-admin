
import axios from '../axios'

export default {
  // 上传轮播图
  addbnner(data) {
    return axios.post('/banner/addbanner', data)
  },
  // 查询轮播图
  querybanner(data) {
    return axios.post('/banner/querybanner', data)
  },
  // 修改轮播图
  updatebanner(data) {
    return axios.post('/banner/updatebanner', data)
  },
  // 查询轮播图详情
  queryBannerDetail(data) {
    return axios.post('/banner/queryBannerDetail', data)
  },
  // 删除轮播图
  deleteBanner(data) {
    return axios.post('/banner/deletebanner', data)
  }
}