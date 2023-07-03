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

	<van-tabs v-model:active="active"
	          animated
	          sticky swipeable @click-tab="onClickTab">
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
</style>
