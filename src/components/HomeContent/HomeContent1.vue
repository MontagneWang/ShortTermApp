<script lang="ts" setup>
import {reactive, ref} from "vue";
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
	articleList: Array<object>
}

let url = `https://localhost:8000/cate/${active.value}`	// todo 切换标签时发送请求
const onClickTab = async (url: string) => {
	let data = await getUrl(url) as ReturnData
	if (data.code === 200) {
		Object.assign(articleList, data)
	} else {
		// showModal.value = true
	}
}

let articleList = reactive([
	{
		title: '人工智能：机器学习的崛起',
		articleId: '1',
		author: '张云',
		contain: '本文详细介绍了机器学习在人工智能领域中的重要地位。讨论了从神经网络到深度学习的发展，并探讨了未来可能出现的趋势。',
		viewCount: '123124',
		hotPoint: '3123'
	},
	{
		title: '人工智能的伦理问题',
		articleId: '2',
		author: '李华',
		contain: '人工智能的快速发展带来了许多伦理问题，包括隐私、就业和决策透明性等问题。本文试图引起人们对这些问题的关注，并提出可能的解决方案。',
		viewCount: '1224',
		hotPoint: '323'
	},
	{
		title: '人工智能在医疗领域的应用',
		articleId: '3',
		author: '王刚',
		contain: '本文通过列举几个具体的例子，讨论了人工智能如何改变医疗服务。其中涉及到数据挖掘、自然语言处理，以及深度学习在医疗诊断和疾病预测中的应用。',
		viewCount: '12224',
		hotPoint: '3311'
	},
])
</script>

<template>
	<div class="container">
		<van-swipe :autoplay="2000"
		           class="my-swipe"
		           indicator-color="white"
		           lazy-render>
			<van-swipe-item>
				<img src="https://article.biliimg.com/bfs/article/517562633f566c6a9d93ef3f4a41a90c8be63107.jpg"/>
			</van-swipe-item>
			<van-swipe-item>
				<img src="https://article.biliimg.com/bfs/article/cf65477bf0c5fd14cb66c8f3080fcb4ec2ba5847.jpg"/>
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
				<div class="button3">
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
		          sticky swipeable @click-tab="onClickTab">
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
