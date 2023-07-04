<script lang="ts" setup>
import {reactive, ref} from "vue";
import ArticleItem from "@/components/ArticleItem.vue";

const active = ref(0);
const onClickTab = () => {
}
let articleList = reactive([
	{
		title: '一个的标题',
		articleId: '213',
		author: 'test',
		contain: '这里是内容',
		viewCount: '123124',
		hotPoint: '3123'
	},
	{
		title: '另一个的标题',
		articleId: '2113',
		author: 'test2',
		contain: '这里是内容2',
		viewCount: '1224',
		hotPoint: '33'
	},
	{
		title: '第三个标题',
		articleId: '3',
		author: 'test3',
		contain: '这里是内容3',
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
						<img alt="" src="../../assets/画板.png">
					</div>
				</RouterLink>
				<RouterLink to="/chat">
					<div class="button2">
						<img alt="" src="../../assets/沟通.png">
					</div>
				</RouterLink>
				<div class="button3">
					<img alt="" src="../../assets/精灵日报.png">
				</div>
				<div class="button4">
					<img alt="" src="../../assets/科技.png">
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
			<van-tab name="全站" title="全站">
				<!--todo 切换标签时发送请求-->
				<article-item
						v-for="item in articleList"
						:key="item.articleId"
						:data="item"/>
			</van-tab>
			<van-tab name="医疗保健" title="医疗保健">
				<article-item
						v-for="item in articleList"
						:key="item.articleId"
						:data="item"/>
			</van-tab>
			<van-tab name="智能控制" title="智能控制">
				<article-item
						v-for="item in articleList"
						:key="item.articleId"
						:data="item"/>
			</van-tab>
			<van-tab name="金融服务" title="金融服务">
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
