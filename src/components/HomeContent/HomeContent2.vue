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
	<article-item
			v-for="item in articleList"
			:key="item.articleId"
			:data="item"
			:isHot="true"/>
</template>

<style lang="scss" scoped>

</style>
