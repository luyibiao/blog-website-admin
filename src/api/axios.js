import axios from 'axios';
import qs from 'qs'

const url = '/api'

const instance = axios.create({
  baseURL: url,
  timeout: 10000,
  // withCredentials: false
})

instance.interceptors.request.use((config) => {
  config.data = qs.stringify(config.data)
  return config;
}, (err) => {
  console.log('请求超时!');
  return Promise.resolve(err);
});


export default {
  post(url, data) {
    return new Promise((resolve, reject) => {
      instance.post(url, data).then(result => {
        resolve(result);
      }).catch(e => {
        reject(e)
      })
    })
  },

  get(url, data) {
    return new Promise((res, rej) => {
      instance.get(url, data).then(result => {
        res(result.data);
      })
    })
  }
}