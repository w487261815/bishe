import axios from '@/until/axios'

export function showcwrz(params) {
  return axios.get('/cwrz/select',{params});
}

export function addcwrz(params) {
  return axios.post('/cwrz/add',params);
}

export function showrz(params) {
  return axios.get('/cwrz/show',{params});
}

export function shownewrz() {
  return axios.get('/cwrz/shownewrz');
}

export function showsexnum() {
  return axios.get('/cwrz/showsexnum');
}