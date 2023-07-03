<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import {getUrl} from "@/api/getData";
import {useCounterStore} from "@/stores/counter";
import {storeToRefs} from "pinia";
// toast
import Modal from '../utils/ToastComp.vue'

const showModal = ref(false)

// @ts-ignore
// defineProps<{
// 	msg: string
// }>()

// 数据获取部分
let data = reactive([])
let showFetchData = ref(null)
let showAxiosData = ref(null)
onMounted(async () => {
	try {
		const response = await fetch('/api/x/web-interface/view?bvid=BV1es411Z7VB')
		if (response.status !== 200) { // 检查 HTTP 状态码是否为 200-299
			throw new Error(`获取出错，HTTP 状态码为：${response.status}`);
		}
		let fetchData = await response.json()
		// 若直接替换会丢失响应式
		Object.assign(data, fetchData)
		// console.log(data)
		// console.log(data['data']['title'])
		showFetchData.value.innerText = JSON.stringify(data['data']['title'])
	} catch (error) {
		console.error('获取出错：', error);
	}

	let songs = await getUrl('/api/x/web-interface/view?bvid=BV1Dx411K7kA')
	if (songs['code'] !== 'ERR_BAD_REQUEST') {
		showAxiosData.value.innerText = JSON.stringify(songs['data']['title'])
	}

})

// Counter 使用
// `count` 和 `doubleCount` 是响应式的 ref
// 作为 action 的 increment 可以直接解构
let counter = useCounterStore()
const {count, doubleCount} = storeToRefs(counter)
const {increment} = counter
increment()
// console.log(count.value, doubleCount.value)

</script>

<template>
	<Teleport to="body">
		<modal :show="showModal" @close="showModal = false">
			<template #header>
				<h3>嵌入内容</h3>
			</template>
			<template #body>
			</template>
		</modal>
	</Teleport>


	<van-button style="display: block;width: 120px;margin: 3vh auto 0;"
	            type="primary"
	            @click.prevent="showModal = true">
		Toast 弹窗
	</van-button>


	<h1>这里是 Home 页面</h1>
	<h2>All great deeds and all great thoughts have a ridiculous beginning.</h2>
	<h3 ref="showFetchData"></h3>
	<h3 ref="showAxiosData"></h3>
</template>

<style lang="scss" scoped>
* {
	text-align: center;
}

</style>
