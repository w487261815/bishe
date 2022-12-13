import axios from '@/until/axios'

export function showacly(params) {
  return axios.get('/acly/show',{params});
}

export function addpost(params) {
  return axios.put('/acly/addpost',params);
}

export function addlist(params) {
  return axios.post('/acly/addlist',params);
}

