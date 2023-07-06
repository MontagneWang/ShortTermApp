<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import {getUrl} from "@/api/getData";
import {useCounterStore} from "@/stores/counter";
import {storeToRefs} from "pinia";
// toast
import Modal from '../utils/ToastComp.vue'
import NavBar from "@/components/NavBar.vue";
import BackHeader from "@/components/BackHeader.vue";

const showModal = ref(false)


// 数据获取部分
let data = reactive([])
let showFetchData = ref(null)
let showAxiosData = ref(null)
onMounted(async () => {
	// try {
	// 	const response = await fetch('/api/x/web-interface/view?bvid=BV1es411Z7VB')
	// 	if (response.status !== 200) { // 检查 HTTP 状态码是否为 200-299
	// 		throw new Error(`获取出错，HTTP 状态码为：${response.status}`);
	// 	}
	// 	let fetchData = await response.json()
	// 	// 若直接替换会丢失响应式
	// 	Object.assign(data, fetchData)
	// 	// console.log(data)
	// 	// console.log(data['data']['title'])
	// 	// showFetchData.value.innerText = JSON.stringify(data['data']['title'])
	// } catch (error) {
	// 	console.error('获取出错：', error);
	// }
	//
	// let songs = await getUrl('/api/x/web-interface/view?bvid=BV1Dx411K7kA')
	// if (songs['code'] !== 'ERR_BAD_REQUEST') {
	// 	// showAxiosData.value.innerText = JSON.stringify(songs['data']['title'])
	// }

})

</script>

<template>
	<back-header :is-home="true" title="首页"/>
	<nav-bar/>

</template>

<style lang="scss" scoped>

</style>
