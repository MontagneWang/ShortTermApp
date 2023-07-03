import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import pinia from '../stores/store'
import {useCounterStore} from "@/stores/counter"
import {storeToRefs} from "pinia";

const store = useCounterStore(pinia)

const {token} = storeToRefs(store)
// @ts-ignore
const router = createRouter({
	history: createWebHashHistory(),
	// 每次切换路由页面滚动到顶部
	scrollBehavior() {
		return {top: 0}
	},
	// history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			meta: {
				title: '首页',
				keepAlive: true,
				requireAuth: false
			}
		},
		{
			path: '/focus',
			name: 'focus',
			component: () => import('../views/FocusView.vue'),
			meta: {
				title: '关注',
				keepAlive: true,
				requireAuth: false
			}
		},
		{
			path: '/app',
			name: 'app',
			component: () => import('../views/AppView.vue'),
			meta: {
				title: '应用',
				keepAlive: true,
				requireAuth: false
			}
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
			meta: {
				title: '主页',
				keepAlive: true,
				requireAuth: false
			}
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('../components/TheLogin.vue'),
			meta: {
				title: '主页',
				keepAlive: true,
				requireAuth: true
			}
		},
	]
})

interface RouteMeta {
	title: string
	keepAlive: boolean
	requireAuth: boolean
}

// 路由前置守卫；用来设置元信息
router.beforeEach((to, from, next) => {
	let meta = to.meta as RouteMeta;
	if (meta.title) {
		document.title = meta.title as string
	}
	next()
})
/**
 * 1. 第一次登录的时候，前端调后端的登陆接口，发送用户名和密码
 * 2. 后端收到请求，验证用户名和密码，验证成功，就给前端返回一个token
 * 3. 前端拿到token，将token存储到localStorage和vuex中，并跳转路由页面
 * 4. 前端每次跳转路由，就判断 localStroage 中有无 token ，没有就跳转到登录页面，有则跳转到对应路由页面
 * 5. 每次调后端接口，都要在请求头中加token
 * 6. 后端判断请求头中有无token，有token，就拿到token并验证token，验证成功就返回数据，验证失败（例如：token过期）就返回401，请求头中没有token也返回401
 * 7. 如果前端拿到状态码为401，就清除token信息并跳转到登录页面
 */
router.beforeEach((to, from, next) => {
	let meta = to.meta as RouteMeta;
	if (!meta.requireAuth) {
		next();
	} else if (meta.requireAuth && !token) {
		next({
			name: 'Login',
		});
	}
});

export default router
