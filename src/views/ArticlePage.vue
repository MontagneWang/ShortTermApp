<script lang="ts" setup>
import {useCounterStore} from "@/stores/counter";
import {storeToRefs} from "pinia";
import BackHeader from "@/components/BackHeader.vue";

let counter = useCounterStore()
const {articleData} = storeToRefs(counter)
let {title, articleId, author, contain, viewCount, hotPoint} = articleData
</script>

<template>
	<back-header title="文章详情"/>
	<div class="title">
		{{ title || '标题'}}
	</div>
	<div class="author">
		<div class="avatar"></div>
		{{ author  || '作者'}}
	</div>
	<div class="contain">
		{{ contain  || '内容'}}
	</div>
	<div class="counter">
		浏览量 {{ viewCount  || '0'}} 热度 {{ hotPoint  || '0'}}
	</div>

	<div>
		本篇文章的 ID 为：{{articleId}}
	</div>
</template>

<style lang="scss" scoped>
*{
	text-align: center;
	font-size: 2rem ;
}
</style>
