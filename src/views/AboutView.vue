<script lang="ts" setup>

</script>

<template>
	<van-swipe :autoplay="1500"
	           class="my-swipe"
	           indicator-color="white"
	           lazy-render>
		<van-swipe-item>
			<img src="https://article.biliimg.com/bfs/article/517562633f566c6a9d93ef3f4a41a90c8be63107.jpg"/>
		</van-swipe-item>
		<van-swipe-item>
			<img src="https://article.biliimg.com/bfs/article/cf65477bf0c5fd14cb66c8f3080fcb4ec2ba5847.jpg"/>
		</van-swipe-item>

	</van-swipe>
</template>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
	width: 100vw;
	text-align: center;

	img{
		width: 100vw;
	}
}
</style>
