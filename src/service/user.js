import axios from '@/until/axios'
let baseURL ='http://150.158.191.247:8088/api'

export function login(params) {
  return axios.post(baseURL+'/user/login', params);
}

export function getUserInfo() {
  return axios.get(baseURL+'/user/userinfo');
}
export function logout() {
  return axios.post(baseURL+'/user/logout');
}
export function changepass(params) {
  return axios.put(baseURL+'/user/updatepass',params);
}

export function updatename(params) {
  return axios.put(baseURL+'/user/updatename',params);
}
export function register(params) {
  return axios.get(baseURL+'/user/register',{params});
}
export function updateImg(params) {
  return axios.put(baseURL+'/user/updateimg',params);
}
export function updateCity(params) {
  return axios.get(baseURL+'/user/updatecity',{params});
}


export function updatedata(params) {
  return axios.get(baseURL+'/user/update',{params});
}
