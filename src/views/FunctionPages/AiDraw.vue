<script lang="ts" setup>
import {ref} from 'vue';
import BackHeader from "@/components/BackHeader.vue";

const active = ref(0);
</script>

<template>
	<back-header title="Ai绘图"/>
	<!-- 整体 -->
	<div>
		<!-- 背景图 -->
		<div>
			<img
					class="BackGround"
					src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
			/>
			<div class="mengban"></div>
		</div>
		<!-- 头图+详情 -->
		<div class="mainpart">
			<!-- 头图 -->
			<div class="toutu">
				<img class="pic"
				     src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg">
			</div>
			<!-- 详情组件 -->
			<div class="tabb">
				<van-tabs v-model:active="active" animated name="tbs" swipeable>
					<van-tab title="简介">
						<div class="details">
							Midjourney是一个由同名研究实验室开发的人工智能程序，可根据文本生成图像，于2022年7月12日进入公开测试阶段，用户可透过Discord的机器人指令进行操作。该研究实验室由Leap
							Motion的创办人大卫·霍尔兹（David Holz）负责领导。
						</div>
					</van-tab>
					<van-tab title="作品集">作品集</van-tab>
				</van-tabs>
			</div>
			<div >
				<van-button round type="success" color="linear-gradient(to right, #78beff, #78beff)" class="bts">开始作图</van-button>
			</div>
		</div>
		<!--  -->
	</div>
</template>

<style>
#app {
	padding: 0;
}
.bts
{
	width: 80vw;
	margin-left: 10vw;
}
.BackGround {
	height: 200px;
	width: 100%;
	position: absolute;
}

.mengban {
	width: 100%;
	height: 200px;
	background-color: gray;
	opacity: 30%;
	position: relative;
}

.mainpart {
	position: absolute;
	top: 200px;
	background-color: #f4f4f4;
	width: 100%;
	padding-bottom: 20%;
}

.toutu {
	width: 80%;
	height: 180px;
	position: relative;
	background-color: aqua;
	top: -100px;
	left: 0;
	right: 0;
	margin: 0 auto;
	z-index: 100;
	overflow: hidden;
	border-radius: 10px;
}

.tabb {
	position: relative;
	top: -100px;
	background-color: white;
	width: 90%;
	left: 0;
	right: 0;
	margin: 0 auto;
	border-radius: 10px !important;
}

.pic {
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
}

.tabb #tbs {
	border-radius: 10px !important;
}

.details {
	margin: 20px;
	width: 80%;
}
</style>