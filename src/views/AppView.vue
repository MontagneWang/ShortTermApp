<script lang="ts" setup>

import TheHeader from "@/components/TheHeader.vue";
import BackHeader from "@/components/BackHeader.vue";
</script>

<template>
	<!--<the-header msg="应用"/>-->
	<back-header :is-home="true" title="应用"/>
	<div class="container">
		<h3>AI绘画</h3>
		<div class="draw">
			<div class="picLeft">

			</div>
			<div class="picRight">
				<div class="pic">

				</div>
				<div class="pic">

				</div>
			</div>
		</div>
		<h3>对话机器人</h3>
		<div class="chat">
			<div class="example"></div>
			<div class="example"></div>
			<div class="example"></div>
		</div>
		<h3>其他</h3>
		<div class="other">
			<div class="example"></div>
			<div class="example"></div>
			<div class="example"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

.container {
	background-color: #f4f4f4;
}

.draw {
	height: 35vh;
	background-color: #fffdf8;
	display: flex;
	justify-content: space-evenly;

	img {
		width: 100vw;
	}

	.picLeft {
		width: 45vw;
		height: 90%;
		margin-top: 3%;
		background-color: #ccc;
		border-radius: 15px;
	}

	.picRight {
		width: 45vw;
		height: 90%;
		margin-top: 3%;
		display: flex;
		flex-direction: column; //修改轴方向
		justify-content: space-between;

		.pic {
			width: 100%;
			height: 45%;
			background-color: #ccc;
			border-radius: 10px;
		}
	}
}

.chat {
	height: 25vh;
	background-color: #fffdf8;
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

.other {
	height: 25vh;
	background-color: #fffdf8;
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
