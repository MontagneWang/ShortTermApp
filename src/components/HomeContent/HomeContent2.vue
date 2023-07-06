<script lang="ts" setup>
import {onMounted, reactive} from "vue";
import ArticleItem from "@/components/ArticleItem.vue";
import ShowUser from "@/components/ShowUser.vue";
import router from "@/router";
import {getUrl} from "@/api/getData";
interface ReturnData {
	code: number
	data: Array<object>
}

let url = `/api/getpost`	// todo 切换标签时发送请求
onMounted(async () => {
	let data = await getUrl(url) as ReturnData
	if (data.code === 200) {
		console.log(data)
		Object.assign(articleList, data.data)
	} else {
		// showModal.value = true
	}
})
let articleList = reactive([])

</script>

<template>
	<div class="container">
		<article-item
				v-for="item in articleList"
				:key="item.articleId"
				:data="item"
				:isHot="true"/>

		<div class="more">
			查看更多
		</div>
		<div class="recommendUser">
			<show-user title="推荐用户"/>
		</div>

		<h3 class="block">作品集</h3>
		<div class="collection" @click="router.push('/draw')">
			<div class="example">
				<img alt="" src="../../assets/ai/ai4.webp">
			</div>
			<div class="example">
				<img alt="" src="../../assets/ai/ai1.webp">
			</div>
			<div class="example">
				<img alt="" src="../../assets/ai/ai3.webp">
			</div>
		</div>
	</div>

</template>

<style lang="scss" scoped>
.block{
	margin-left: 2vw;
	border-left: 5px solid #66ccff;
}
.more {
	text-align: center;
	margin: 3vh;
}

.recommendUser {
	width: 100vw;
	background-color: #fffdf8;
	border: 1px solid #000000;
	margin-bottom: 3vh;
}

.collection {
	border: 1px solid #000000;
	width: 100vw;
	height: 40vh;
	margin-bottom: 8vh;
	display: flex;
	justify-content: space-evenly;

	.example {
		width: 28vw;
		height: 80%;
		margin-top: 4%;
		border-radius: 10px;
		background-color: #ccc;
		overflow: hidden;

		img {
			height: 100%;
		}
	}
}
</style>
