import axios from '../axios'


export default {
  getUser(data) {
    return axios.post('/user/login', data)
  }
}