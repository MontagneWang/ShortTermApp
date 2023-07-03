<script lang="ts" setup>
import {ref} from "vue";

const active = ref(0);
const onClickTab = ()=>{}

</script>

<template>
	<van-swipe :autoplay="2000"
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
	<div class="button">
		<div class="button1">AI<br>绘图</div>
		<div class="button2">AI<br>对话</div>
		<div class="button3">最新<br>资讯</div>
		<div class="button4">科技<br>产品</div>
	</div>
	<van-tabs v-model:active="active"
	          animated
	          sticky swipeable @click-tab="onClickTab">
		<van-tab name="全站" title="全站">"全站"</van-tab>
		<van-tab name="医疗保健" title="医疗保健">"医疗保健"</van-tab>
		<van-tab name="智能控制" title="智能控制">"智能控制"</van-tab>
		<van-tab name="金融服务" title="金融服务">"金融服务"</van-tab>
	</van-tabs>
</template>

<style lang="scss" scoped>

.my-swipe .van-swipe-item {
	width: 100vw;
	text-align: center;

	img {
		width: 100vw;
	}
}
.button{
	height: 15vh;
	width: 100vw;
	box-sizing: border-box;
	border: 1px solid #000;
	text-align: center;
	line-height: 5vh;
	display: flex;
	justify-content: space-around;
	padding-top: 2vh;
	div{
		display: inline-block;
		width: 15vw;
		height: 15vw;
		border-radius: 50%;
		border: 1px solid #000;
	}
}
</style>
