<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import ArticleItem from "@/components/ArticleItem.vue";
import {getUrl} from "@/api/getData";

const active = ref(0);

/**
 * 切换标签时会触发事件，从左到右切换时 active 的值依次为 0 1 2 3
 * 发送请求携带分类，接收返回数据
 * return { code,articleList:[{}] }
 */
interface ReturnData {
	code: number
	data: Array<object>
}

let url = `/api/getpost`	// todo 切换标签时发送请求
// let url = `/api/getpost/${active.value}`
const onClickTab = async (url: string) => {
	let data = await getUrl(url) as ReturnData
	if (data.code === 200) {
		console.log(data)
		Object.assign(articleList, data.data)
	} else {
		// showModal.value = true
	}
}

let articleList = reactive([])

onMounted(()=>{
	onClickTab(url)
})
</script>

<template>
	<div class="container">
		<van-swipe :autoplay="2000"
		           class="my-swipe"
		           indicator-color="white"
		           lazy-render>
			<van-swipe-item>
				<img src="../../assets/img_2.png"/>
			</van-swipe-item>
			<van-swipe-item>
				<img src="../../assets/img_2.png"/>
			</van-swipe-item>
		</van-swipe>
		<div class="action">
			<div class="button">
				<RouterLink to="/draw">
					<div class="button1">
						<img alt="" src="../../assets/icon/pic.png">
					</div>
				</RouterLink>
				<RouterLink to="/chat">
					<div class="button2">
						<img alt="" src="../../assets/icon/message.png">
					</div>
				</RouterLink>
				<div class="button3" >
					<img alt="" src="../../assets/icon/file.png">
				</div>
				<div class="button4">
					<img alt="" src="../../assets/icon/up.png">
				</div>
			</div>
			<div class="buttonName">
				<div class="name1">
					AI绘图
				</div>
				<div class="name2">
					AI对话
				</div>
				<div class="name3">
					最新资讯
				</div>
				<div class="name4">
					科技产品
				</div>
			</div>
		</div>
		<van-tabs v-model:active="active"
		          animated
		          sticky swipeable
		          @click-tab="onClickTab(url)">
			<van-tab name="0" title="全站">
				<article-item
						v-for="item in articleList"
						:key="item.articleId"
						:data="item"/>
			</van-tab>
			<van-tab name="1" title="医疗保健">
				<article-item
						v-for="item in articleList"
						:key="item.articleId"
						:data="item"/>
			</van-tab>
			<van-tab name="2" title="智能控制">
				<article-item
						v-for="item in articleList"
						:key="item.articleId"
						:data="item"/>
			</van-tab>
			<van-tab name="3" title="金融服务">
				<article-item
						v-for="item in articleList"
						:key="item.articleId"
						:data="item"/>
			</van-tab>
		</van-tabs>
	</div>
</template>

<style lang="scss" scoped>
.container {
	background-color: #f4f4f4;
}

.container:last-of-type {
	margin-bottom: 4vh;
}

.my-swipe .van-swipe-item {
	width: 100vw;
	text-align: center;

	img {
		width: 100vw;
	}
}

.action {
	transform: translateX(-0.5vw);
}

.button {
	height: 15vh;
	width: 100vw;
	box-sizing: border-box;
	text-align: center;
	line-height: 5vh;
	display: flex;
	justify-content: space-around;
	padding-top: 2vh;

	img {
		width: 100%;
	}

	div {
		display: inline-block;
		width: 15vw;
		height: 15vw;
		border-radius: 50%;
	}
}

.buttonName {
	height: 5vh;
	width: 100vw;
	box-sizing: border-box;
	text-align: center;
	line-height: 5vh;
	display: flex;
	justify-content: space-around;
	transform: translateX(0.9vw);
	margin-top: -4vh;
	margin-bottom: 2vh;
}
</style>
