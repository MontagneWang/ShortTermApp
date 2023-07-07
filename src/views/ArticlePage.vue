<script lang="ts" setup>
import {useCounterStore} from "@/stores/counter";
import {storeToRefs} from "pinia";
import BackHeader from "@/components/BackHeader.vue";
import CommentItem from "@/components/CommentItem.vue";
import {postUrl} from "@/api/postData";
import {onActivated, onMounted, reactive} from "vue";

let counter = useCounterStore()
const {articleData} = storeToRefs(counter)
let {title, articleId, author, contain, viewCount, hotPoint} = articleData

interface ReturnData {
	code: number
	message: string
	title: string,
	articleId: string,
	author: string,
	contain: string,
	viewCount: string,
	hotPoint: string,
	comment:Array<any>
}

let data = reactive([]) as ReturnData
let url = '/api/getarticledetail' // todo 登录验证接口
onActivated(async () => {
	data = await postUrl(url, articleId) as ReturnData
	if (data.code === 200) {
		console.log(data)
		Object.assign(articleData, data)
	}
})

let handleFollow = async () => {}
</script>

<template>
	<back-header :title="data.title"/>
	<div class="container">
		<div class="author">
			<div class="avatar">
				<img alt="" src="../assets/avatar/ava5.jpg">
			</div>
			<span class="name">
				{{ data.author }}
			</span>
			<!--<van-button class="follow" type="primary" @click="handleFollow">关注 +</van-button>-->
		</div>

		<div class="contain">
			{{ data.contain }}
		</div>
		<div class="counter">
			浏览量 {{ data.viewCount }} 热度 {{ data.hotPoint }}
		</div>
	</div>
	<div class="comment">
		<div class="head2">
			<span>热门评论</span>
			<comment-item v-for="item in data.comment" :data="item"/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: 90vw;
	border-radius: 15px;
	background-color: #fffdf8;
	margin: 4vh auto;
	border: 1px solid #66ccff;

	.author {
		width: 80vw;
		margin-top: 2vh;
		margin-left: 4vw;

		.avatar {
			width: 15vw;
			display: inline-block;
			vertical-align: middle;

			img {
				width: 100%;
				border-radius: 50%;
			}
		}

		.follow {
			display: inline-block;
			float: right;
			margin-top: 1vh;
		}

		.name {
			margin-left: 4vw;
			font-size: 1.5rem;
			font-weight: bold;
		}
	}

	.contain, .counter {
		width: 80vw;
		margin: 2vh auto;
		border: 1px solid #66ccff;
	}

	.counter {
		color: #ccc;
	}
}

.comment {
	width: 90vw;
	border-radius: 15px;
	background-color: #fffdf8;
	margin: 4vh auto 10vh;
	border: 1px solid #66ccff;

	.head2 {
		margin-top: 2vh;
		font-weight: bold;
		font-size: 1.2rem;
		margin-bottom: 2vh;

		span {
			margin-left: 4vw;
		}
	}

}
</style>
