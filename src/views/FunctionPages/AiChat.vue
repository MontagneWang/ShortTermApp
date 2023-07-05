<script lang="ts" setup>

import BackHeader from "@/components/BackHeader.vue";
import {reactive} from "vue";

interface chatFormat {
	chat: string
	isGPT: boolean
}

let chatList = reactive([
	{
		chat: '您好，请问有什么需要我帮忙的吗？',
		isGPT: true
	},
	{
		chat: '请介绍一下人工智能吧。',
		isGPT: false
	},
	{
		chat: '当然！人工智能（Artificial Intelligence，简称AI）是计算机科学的一个分支，致力于使计算机系统能够模拟和执行类似人类智能的任务。人工智能研究的目标是开发出能够感知、理解、学习、推理和决策的智能系统。\n' +
				'人工智能可以分为两种类型：弱人工智能和强人工智能。弱人工智能是指专门针对特定任务或领域开发的人工智能系统，比如语音助手、图像识别和推荐系统等。这些系统在特定任务上表现出色，但缺乏通用的智能。\n' +
				'而强人工智能则是指具有与人类智能相似或超越人类智能的系统。强人工智能的目标是使计算机具备自主学习、理解自然语言、进行推理和决策等高级智能能力。',
		isGPT: true
	},
	{
		chat: '当然！人工智能（Artificial Intelligence，简称AI）是计算机科学的一个分支，致力于使计算机系统能够模拟和执行类似人类智能的任务。人工智能研究的目标是开发出能够感知、理解、学习、推理和决策的智能系统。\n' +
				'人工智能可以分为两种类型：弱人工智能和强人工智能。弱人工智能是指专门针对特定任务或领域开发的人工智能系统，比如语音助手、图像识别和推荐系统等。这些系统在特定任务上表现出色，但缺乏通用的智能。\n' +
				'而强人工智能则是指具有与人类智能相似或超越人类智能的系统。强人工智能的目标是使计算机具备自主学习、理解自然语言、进行推理和决策等高级智能能力。',
		isGPT: true
	}

]) as chatFormat

const gptStyle = {
	'text-align': 'left'
}
const peoStyle = {
	'text-align': 'right'
}
</script>

<template>
	<back-header title="Ai 对话"/>
	<div class="container">
		<div class="message">
			<div v-for="item in chatList"
			     :style="item.isGPT?gptStyle:peoStyle"
			     class="chat">
				{{ item.chat }}
			</div>
		</div>
		<div class="send">
			<input type="text">
			<button>Send</button>
		</div>
	</div>
	<!--<img src="../../assets/gpt.png" alt="">-->
</template>

<style lang="scss" scoped>

.message {
	margin-bottom: 20vh;

	.chat{
		width: 70vw;
		padding: 15px;
		margin: 2vh auto;
		border: 1px solid #000000;
		border-radius: 7px;
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
	border: 1px solid #000000;
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
