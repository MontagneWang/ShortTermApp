<script lang="ts" setup>

import BackHeader from "@/components/BackHeader.vue";
</script>

<template>
	<back-header title="文章发布"/>
	<div class="container">
		<div class="edit">
			<textarea id="textarea"
			          name="textarea"
			          placeholder="请输入内容……"></textarea>
			<div class="button">
				<van-button type="primary">发送</van-button>
			</div>
		</div>
		<div class="typeChoose">
			<div class="type">
				<span>分区</span>
				<van-icon name="arrow"/>
			</div>
			<div class="auth">
				<span>权限</span>
				<van-icon name="arrow"/>
			</div>
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

		.type {
			display: flex;
			justify-content: space-between;
			padding: 0 6vw 2vh;
			border-bottom: 1px solid #66ccff;
		}

		.auth {
			display: flex;
			justify-content: space-between;
			padding: 0 6vw;
		}

	}
}

</style>
