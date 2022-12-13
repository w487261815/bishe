import axios from '@/until/axios'
export function showaddress() {
  return axios.get('/address/show');
}

export function changemoren(params) {
  return axios.put('/address/changemoren',params);
}
export function add(params) {
  return axios.post('/address/add',params);
}

export function del(params) {
  return axios.post('/address/del',params);
}

