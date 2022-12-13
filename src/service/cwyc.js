import axios from '@/until/axios'

export function showcwyc() {
  return axios.get('/dis/show');
}

export function addpost(params) {
  return axios.get('/acly/addpost',{params});
}

export function addlist() {
  return axios.post('/dis/add');
}
export function dellist(params) {
  return axios.post('/dis/del',params);
}
export function showsc(params) {
  return axios.get('/dis/showsc',{params});
}