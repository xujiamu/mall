import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/w1',
    timeout: 15000
  })
  instance.interceptors.request.use(config => {
    return config
  },error => {
    return Promise.reject(error)
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    return Promise.reject(error)
  })
  return instance(config)
}
