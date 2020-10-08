import axios from '../axios'

export default {
  addLabel(data) {
    return axios.post('/label/addLabel', data)
  }
}