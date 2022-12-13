import Vue from 'vue'
import Router from 'vue-router'
import { localGet } from '@/until/index'
import store from '@/store'

import { mapGetters, mapMutations } from 'vuex'
Vue.use(Router)

const router = new Router({
	routes: [{
			path: '/',
			name: 'first',
			redirect: '/main',
			component: () =>
				import("@/views/content_m.vue")
		},
		{
			path: "/main",
			component: () =>
				import("@/views/content_m.vue")
		}, {
			path: "/buy",
			component: () =>
				import("@/views/content_gm.vue")
		}, {
			path: "/goods",
			component: () =>
				import("@/views/content_goods")
		}, {
			path: "/dis",
			component: () =>
				import("@/views/content_dis.vue")
		}, {
			path: "/sy",
			component: () =>
				import("@/views/content_sy.vue")
		}, {
			path: "/ley",
			component: () =>
				import("@/views/content_ley.vue")
		}, {
			path: "/userdata",
			component: () =>
				import("@/views/content_user.vue")
		}, {
			path: "/gwc",
			component: () =>
				import("@/views/content_gwc.vue")
		},
		{
			path: "/rz",
			component: () =>
				import("@/views/content_cwrz.vue")
		},
		{
			path: "/city",
			component: () =>
				import("@/views/content_city")
		},
		{
       path:'*',
       redirect:'/main',
       component: () =>
					import("@/views/content_m.vue")
   },
	]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
	store.commit('seturl', to.name)
	if(to.path === "/login") {
		next()
	} else {
		if(!localGet('token')) {
			next({
				path: '/login'
			})
		} else {
			next()
		}
	}

})

export default router