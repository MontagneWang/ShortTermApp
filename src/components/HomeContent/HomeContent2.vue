<script lang="ts" setup>
import {reactive} from "vue";
import ArticleItem from "@/components/ArticleItem.vue";

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
		<article-item
				v-for="item in articleList"
				:key="item.articleId"
				:data="item"
				:isHot="true"/>

		<div class="more">
			查看更多
		</div>
		<div class="recommendUser">
			<h3>推荐用户</h3>
		</div>

		<h3>作品集</h3>
		<div class="collection">
			<div class="example"></div>
			<div class="example"></div>
			<div class="example"></div>
		</div>
	</div>

</template>

<style lang="scss" scoped>
.more {
	text-align: center;
	margin: 3vh;
}

.recommendUser {
	width: 100vw;
	height: 20vh;
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
	}
}
</style>
