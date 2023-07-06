<script lang="ts" setup>
import {reactive} from "vue";
import ArticleItem from "@/components/ArticleItem.vue";
import ShowUser from "@/components/ShowUser.vue";

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
		<div class="collection">
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
