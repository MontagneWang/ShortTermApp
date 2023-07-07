<script lang="ts" setup>
import {useCounterStore} from "@/stores/counter";
import {storeToRefs} from "pinia";
import BackHeader from "@/components/BackHeader.vue";
import CommentItem from "@/components/CommentItem.vue";
import {postUrl} from "@/api/postData";
import {getCurrentInstance, onActivated, onMounted, reactive, ref} from "vue";

let counter = useCounterStore()
const {articleData} = storeToRefs(counter)
let {title, articleId, author, contain, viewCount, hotPoint} = articleData
import Modal from '../utils/ToastComp.vue'
const internalInstance = getCurrentInstance()

const showModal = ref(false)
let modalTitle = ref('')
let modalContent = ref('')

interface ReturnData {
	code: number
	message: string
	title: string,
	articleId: string,
	author: string,
	contain: string,
	viewCount: string,
	hotPoint: string,
	comment: Array<any>
}

let data = reactive([]) as ReturnData
let url = '/api/getarticledetail' // todo 获取文章详情接口
onActivated(async () => {
	data = await postUrl(url, articleId) as ReturnData
	if (data.code === 200) {
		console.log(data)
		// 操作数据后更新视图
		internalInstance.ctx.$forceUpdate()
		// Object.assign(articleData, data)
	}
})

let handleFollow = async () => {
}


let url2 = '/api/sendcomment' // todo 发送评论接口
let sendData = ref('')

interface ReturnData {
	code: number
	data: string
}

let handleSend = async () => {
	if (sendData.value.trim() !== '') {
		data.comment.push({
			author: '',
			contain: sendData.value,
		})
		sendData.value = ''

		let data2 = await postUrl(url2, sendData.value) as ReturnData
		if (data2.code === 200) {
			console.log(data2)
			modalTitle.value = data2.data
			modalContent.value = '您的评论已成功显示在页面'
			showModal.value = true
		}
		setTimeout(() => {
			window.scrollTo(0, document.body.scrollHeight);
		}, 0)
	}else {
		modalTitle.value = '发布失败'
		modalContent.value = '内容不能为空'
		showModal.value = true
	}
}
</script>

<template>
	<Teleport to="body">
		<modal :show="showModal" @close="showModal = false">
			<template #header>
				<h3>{{ modalTitle }}</h3>
			</template>
			<template #body>
				{{ modalContent }}
			</template>
		</modal>
	</Teleport>


	<back-header :title="data.title||'文章标题'"/>
	<div class="container" >
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
	<div class="send">
		<input v-model="sendData" type="text">
		<button @click="handleSend">Send</button>
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
	margin: 4vh auto 18vh;
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

.send {
	width: 100vw;
	height: 8vh;
	margin-bottom: 8vh;
	position: fixed;
	bottom: 0;
	box-sizing: border-box;
	border-radius: 10px;
	border: 1px solid #66ccff;
	text-align: center;
	padding: 2vh;
	background-color: #fff;

	input {
		width: 60vw;
		margin-right: 5vw;
	}

	button {
		background-color: #66ccff;
		color: #ffffff;
		border-style: none;
	}
}
</style>
