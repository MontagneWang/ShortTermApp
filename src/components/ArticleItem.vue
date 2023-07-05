<script lang="ts" setup>
import {computed, defineProps, ref} from "vue";
import {useRouter} from 'vue-router'
import {postUrl} from "@/api/postData";

const router = useRouter()

const props = defineProps({
	data: Object,
	isHot: Boolean
})
let {title, author, articleId, contain, viewCount, hotPoint} = props.data
// console.log(props.data)

let toArticlePage = async articleId => {
	// 发送请求，携带 articleId
	let config = {
		articleId
	}
	// let articleData = await postUrl('',config)
	await router.push('/article')
}

</script>

<template>
	<div :key="articleId" class="container" @click="toArticlePage">
		<div class="title">
			<div v-if="isHot" class="block"></div>
			{{ title }}
		</div>
		<div class="author">
			<div class="avatar"></div>
			{{ author }}
		</div>
		<div class="contain">
			{{ contain }}
		</div>
		<div class="counter">
			浏览量{{ viewCount }} 热度{{ hotPoint }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
.color1 {
	background-color: #ff0000;
}

.color2 {
	background-color: #ff9000;
}

.container {
	width: 100vw;
	border: 1px solid #000000;
	margin-bottom: 8px;
	background-color: #fffdf8 !important;
	padding: 10px;
	box-sizing: border-box;
	text-align: left;

	.title {
		font-size: 1.5rem;
		margin-bottom: 0.3rem;

		.block {
			width: 1.5rem;
			height: 1.5rem;
			display: inline-block;
			background-color: #ff0000;
			vertical-align: bottom;
		}
	}

	.author {
		margin-bottom: 0.3rem;

		.avatar {
			width: 1rem;
			height: 1rem;
			border-radius: 50%;
			display: inline-block;
			background-color: #000;
			vertical-align: middle;
		}
	}

	.contain {
		margin-bottom: 0.3rem;
	}

	.counter {
		color: #d9d9d9;
	}
}
</style>
