import axios from '@/until/axios'

export function showaddress() {
  return axios.get('/address/show');
}
export function dellist(params) {
  return axios.post('/list/del',params);
}
export function showlist(params) {
  return axios.get('/list/show',{params});
}
export function addlist(params) {
  return axios.post('/list/add',params);
}
export function changstatus(params) {
  return axios.put('/list/changstatus',params);
}
