import axios from '@/until/axios'

export function show(params) {
  return axios.get('/goods/select',{params});
}
export function showtj() {
  return axios.get('/goods/showtj');
}
export function addpost(params) {
  return axios.get('/goods/addpost',{params});
}
export function showgood(params) {
  return axios.get('/goods/showgood',{params});
}
