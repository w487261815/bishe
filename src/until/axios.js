import axios from 'axios'
import router from '../router'
import {Message , ElLoading} from 'element-ui'
import { localGet } from './index'

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://150.158.191.247:8088/api' : 'http://150.158.191.247:8088/api'
axios.defaults.withCredentials = false
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Authorization'] = localGet('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    this.$message.error('服务端异常');
    
    return Promise.reject(res)
  }
  if (res.data.resultCode != 200) {
  	//if (res.data.message)console.log(res.data.message)
    if (res.data.message) Message.error(res.data.message)
    if (res.data.resultCode == 419) {
      router.push({ path: '/main' }
      )
    }
    //return Promise.reject(res.data)
  }

  return res.data
})

export default axios
