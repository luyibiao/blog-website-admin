import axios from '../axios'


export default {
  getUser() {
    return axios.post('/user/login')
  }
}