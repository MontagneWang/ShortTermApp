import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
			meta: {
				title: '关于',
				keepAlive: true,
				requireAuth: false
			}
		}
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

export default router
