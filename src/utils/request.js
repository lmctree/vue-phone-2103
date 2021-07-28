import axios from 'axios'
import { Toast } from 'vant'

const http = axios.create({
  baseURL: 'http://itfly.vip:8888',
  timeout: 5000
})

http.interceptors.request.use(response => {
  return response
}, err => {
  Promise.reject(err)
  Toast('资源请求失败')
})

export default http