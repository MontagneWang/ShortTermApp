<script lang="ts" setup>

import BackHeader from "@/components/BackHeader.vue";
import {postUrl} from "@/api/postData";
import {ref} from "vue";
import Modal from '../utils/ToastComp.vue'

const showModal = ref(false)
let url = '/api/sendpost' // todo 聊天机器人接口
let sendData = ref('')
let modalTitle = ref('')
let modalContent = ref('')
interface ReturnData {
	code: number
	data: string
}

let handleSend = async () => {
	if (sendData.value.trim() !== '') {
		let data = await postUrl(url, sendData.value) as ReturnData
		if (data.code === 200) {
			sendData.value = ''
			modalTitle.value = '发布成功'
			modalContent.value = '您的内容已显示在文章页面'
			showModal.value = true
		}
	}else{
		modalTitle.value = '发布失败'
		modalContent.value = '内容不能为空'
		showModal.value = true
	}
}

const columns = [
	{ text: '杭州', value: 'Hangzhou' },
	{ text: '宁波', value: 'Ningbo' },
	{ text: '温州', value: 'Wenzhou' },
	{ text: '绍兴', value: 'Shaoxing' },
	{ text: '湖州', value: 'Huzhou' },
];
const fieldValue = ref('');
const showPicker = ref(false);

const onConfirm = ({ selectedOptions }) => {
	showPicker.value = false;
	fieldValue.value = selectedOptions[0].text;
};
</script>

<template>
	<Teleport to="body">
		<modal :show="showModal" @close="showModal = false">
			<template #header>
				<h3>{{modalTitle}}</h3>
			</template>
			<template #body>
				{{modalContent}}
			</template>
		</modal>
	</Teleport>

	<back-header title="文章发布"/>
	<div class="container">
		<div class="edit">
			<textarea id="textarea"
			          v-model="sendData"
			          name="textarea"
			          placeholder="请输入内容……"></textarea>
			<div class="button">
				<van-button type="primary"
				            @click.prevent="handleSend">
					发送
				</van-button>
			</div>
		</div>
		<div class="typeChoose">
			<van-field
					v-model="fieldValue"
					is-link
					readonly
					label="城市"
					placeholder="选择城市"
					@click="showPicker = true"
			/>
			<van-popup v-model:show="showPicker" round position="bottom">
				<van-picker
						:columns="columns"
						@cancel="showPicker = false"
						@confirm="onConfirm"
				/>
			</van-popup>
			<!--<div class="type">-->
			<!--	<span>分区</span>-->
			<!--	<van-icon name="arrow"/>-->
			<!--</div>-->
			<!--<div class="auth">-->
			<!--	<span>权限</span>-->
			<!--	<van-icon name="arrow"/>-->
			<!--</div>-->
		</div>

	</div>
</template>

<style lang="scss" scoped>
.container {
	background-color: #f4f4f4;
	min-height: 80vh;

	.edit {
		width: 85vw;
		height: 40vh;
		border: 1px solid #66ccff;
		background-color: #fffdf8;
		margin: 0 auto;
		border-radius: 15px;

		textarea {
			width: 90%;
			height: 70%;
			margin: 2vh 5% 0;
			background-color: #fffdf8;
			resize: none;
			box-sizing: border-box;
			border: none;
		}

		.button {
			text-align: right;
			margin-right: 6vw;
		}
	}

	.typeChoose {
		width: 85vw;
		height: 15vh;
		border: 1px solid #66ccff;
		background-color: #fffdf8;
		margin: 3vh auto;
		border-radius: 15px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		//.type {
		//	display: flex;
		//	justify-content: space-between;
		//	padding: 0 6vw 2vh;
		//	border-bottom: 1px solid #66ccff;
		//}
		//
		//.auth {
		//	display: flex;
		//	justify-content: space-between;
		//	padding: 0 6vw;
		//}

	}
}

</style>
