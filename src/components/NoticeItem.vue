<script lang="ts" setup>

</script>

<template>
	<div class="container">
		<div class="pic">
			<img alt="" src="../assets/avatar/ava5.jpg">
		</div>
		<div class="words">
			<div class="title">
				<h2>系统通知</h2>
			</div>
			<div class="detail">
				此处显示文章内容
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container{
	height: 16vh;
	border: 1px solid #000000;
	display: flex;
	justify-content: space-between;
	.pic{
		width: 10vh;
		height: 10vh;
		margin: 3vh 0 0 3vh;
		border-radius: 50%;
		background-color: #ccc;
		img{
			width: 100%;
			border-radius: 50%;
		}
	}
	.words{
		width: 70vw;
		h2{
			margin-top: 4vh;
			margin-bottom: 1vh;
		}
	}
}
</style>
