import axios from 'axios';

const url = '/api'

const instance = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: {
    'content-Type': 'application/json;charset=UTF-8',
    'Cache-Control': 'no-cache, no-store',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization,Origin,X-Requested-With,Content-Type,Accept',
  },
})

export default {
  post(url, data) {
    return new Promise((res, rej) => {
      instance.post(url, data).then(result => {
        resolve(response.data);
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