import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import md5 from 'js-md5'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts';
import axios from 'axios'
Vue.config.productionTip = false

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 5000,
})
Vue.prototype.$bus = new Vue()
Vue.prototype.$Axios = instance
Vue.config.productionTip = false
let showMenu=true;
Vue.prototype.$showMenu = showMenu;
Vue.prototype.$md5 = md5;
Vue.use(ElementUI)
Vue.use(echarts)
new Vue({
	router,
	store,
  render: h => h(App)
}).$mount('#app')
