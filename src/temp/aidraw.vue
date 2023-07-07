<template>
	<!-- 整体 -->
	<div class="container">
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
				<img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
				     class="pic">
			</div>
			<!-- 详情组件 -->
			<div class="tabb">
				<van-tabs v-model:active="active" swipeable animated name="tbs">
					<van-tab title="简介">
						<div class="details">       Midjourney是一个由同名研究实验室开发的人工智能程序，可根据文本生成图像，于2022年7月12日进入公开测试阶段，用户可透过Discord的机器人指令进行操作。该研究实验室由Leap Motion的创办人大卫·霍尔兹（David Holz）负责领导。</div>
					</van-tab>
					<van-tab title="作品集">
						<van-grid :column-num="2" guttur="10">
							<van-grid-item>
								<van-image
										src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
										height="260px"
										width="150px"
								/>
							</van-grid-item>
							<van-grid-item>
								<van-image
										src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
										height="260px"
										width="150px"
								/>
							</van-grid-item>
							<van-grid-item>
								<van-image
										src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
										height="260px"
										width="150px"
								/>
							</van-grid-item>
							<van-grid-item>
								<van-image
										src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
										height="260px"
										width="150px"
								/>
							</van-grid-item>
						</van-grid>
					</van-tab>
				</van-tabs>
			</div>
		</div>
		<div>
			<van-button round type="success" color="linear-gradient(to right, #78beff, #78beff)" class="bts">开始作图</van-button>
		</div>
	</div>
</template>

<style>
#app{
	padding: 0;
}
.BackGround
{
	height: 200px;
	width: 100%;
	position: absolute;
	z-index: 1;
}
.mengban
{
	width: 100%;
	height: 200px;
	background-color: gray;
	z-index: 5;
	opacity: 30%;
	position: relative;
}
.mainpart
{
	position: absolute;
	top:200px;
	background-color: #f4f4f4;
	z-index: 90;
	width: 100%;
	height: 100%;
}
.toutu
{
	width: 80%;
	height: 180px;
	position: relative;
	background-color: aqua;
	top:-100px;
	left: 0;
	right: 0;
	margin: 0 auto;
	z-index: 100;
	overflow: hidden;
	border-radius: 10px;
}
.tabb
{
	position: relative;
	top:-100px;
	background-color: white;
	width: 90%;
	left: 0;
	right: 0;
	margin: 0 auto;
	border-radius: 10px !important;
}
.pic
{
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
}
.tabb #tbs
{
	border-radius: 10px !important;
}
/*  */
.details
{
	margin: 20px;
}
.bts
{
	/*  */
	position: fixed;
	bottom: 6%;
	z-index: 120;
	left: 0;
	right: 0;
	margin: 0 auto;
	width: 80%;
}
</style>

<!--<script lang="ts" setup>-->

<!--import BackHeader from "@/components/BackHeader.vue";-->
<!--</script>-->

<!--<template>-->
<!--	<back-header title="Ai 绘图"/>-->
<!--	<div class="container">-->
<!--		<img alt="" src="../../assets/img2.jpg">-->
<!--	</div>-->
<!--</template>-->

<!--<style lang="scss" scoped>-->
<!--.container {-->
<!--	width: 100vw;-->
<!--	margin-top: -48vh;-->
<!--	img {-->
<!--		width: 100%;-->
<!--	}-->
<!--}-->
<!--</style>-->
