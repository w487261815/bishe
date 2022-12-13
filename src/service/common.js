import axios from '@/until/axios'
export function uploadImg(params) {
  return axios.post('/common/upload',params);
}

