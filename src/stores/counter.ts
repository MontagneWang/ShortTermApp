import {ref, computed, reactive} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', () => {
	let token = ref('')
	let isUserLoggedIn = ref(false)
	let articleData = reactive({
		title: String,
		articleId: String,
		author: String,
		contain: String,
		viewCount: String,
		hotPoint: String
	})

	const count = ref(0)
	const doubleCount = computed(() => count.value * 2)

	return {token, isUserLoggedIn, articleData, count, doubleCount}
})
