<script lang="ts" setup>

import BackHeader from "@/components/BackHeader.vue";
import {postUrl} from "@/api/postData";
import {reactive, ref} from "vue";
import Modal from '../utils/ToastComp.vue'

const showModal = ref(false)
let url = '/api/sendpost' // todo 聊天机器人接口
let sendData = ref('')
let modalTitle = ref('')
let modalContent = ref('')

const columns = [
	{text: '医疗保健', value: '医疗保健'},
	{text: '智能控制', value: '智能控制'},
	{text: '金融服务', value: '金融服务'},
];
const columns2 = [
	{text: '所有人可见', value: '所有人可见'},
	{text: '仅好友可见', value: '仅好友可见'},
	{text: '仅自己可见', value: '仅自己可见'},
];
const fieldValue = ref('');
const fieldValue2 = ref('');
const showPicker = ref(false);
const showPicker2 = ref(false);

const onConfirm = ({selectedOptions}) => {
	showPicker.value = false;
	fieldValue.value = selectedOptions[0].text;
};
const onConfirm2 = ({selectedOptions}) => {
	showPicker2.value = false;
	fieldValue2.value = selectedOptions[0].text;
};

interface ReturnData {
	code: number
	data: string
}

let config = reactive({
	sendData: sendData.value,
	fieldValue: fieldValue.value,
	fieldValue2: fieldValue2.value
})
let handleSend = async () => {
	if (sendData.value.trim() !== '') {
		let data = await postUrl(url, config) as ReturnData
		if (data.code === 200) {
			console.log(data)
			sendData.value = ''
			fieldValue.value = ''
			fieldValue2.value = ''
			showPicker.value = false
			showPicker2.value = false
			modalTitle.value = '发布成功'
			modalContent.value = '您的内容已显示在文章页面'
			showModal.value = true
			// router.push('/article/:id') // todo 跳转到文章详情页
		}
	} else {
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
					label="分区"
					placeholder="选择分区"
					readonly
					style="border-radius: 30px;background-color: #fffdf8;"
					@click="showPicker = true"
			/>
			<van-popup v-model:show="showPicker" position="bottom" round>
				<van-picker
						:columns="columns"
						@cancel="showPicker = false"
						@confirm="onConfirm"
				/>
			</van-popup>

			<van-field
					v-model="fieldValue2"
					is-link
					label="权限"
					placeholder="选择权限"
					readonly
					style="border-radius: 30px;background-color: #fffdf8;"
					@click="showPicker2 = true"
			/>
			<van-popup v-model:show="showPicker2" position="bottom" round>
				<van-picker
						:columns="columns2"
						@cancel="showPicker2 = false"
						@confirm="onConfirm2"
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
