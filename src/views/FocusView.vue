<script lang="ts" setup>

import TheHeader from "@/components/TheHeader.vue";
import BackHeader from "@/components/BackHeader.vue";
</script>

<template>
	<!--<the-header msg="关注"/>-->
	<back-header :is-home="true" title="关注"/>
	<div class="container">
		<div class="focus">
			<h3>关注用户</h3>
			<!--todo 有数据后可改成 v-for 渲染-->
			<div class="avatar">
				<div><img alt="" src=""></div>
				<span>ID</span>
			</div>
			<div class="avatar">
				<div><img alt="" src=""></div>
				<span>ID</span>
			</div>
			<div class="avatar">
				<div><img alt="" src=""></div>
				<span>ID</span>
			</div>
		</div>
		<div class="recommend">
			<h3>推荐</h3>
			<div class="avatar">
				<div><img alt="" src=""></div>
				<span>ID</span>
			</div>
			<div class="avatar">
				<div><img alt="" src=""></div>
				<span>ID</span>
			</div>
			<div class="avatar">
				<div><img alt="" src=""></div>
				<span>ID</span>
			</div>
		</div>
		<div class="dynamic">
			<h3>动态</h3>
			<div class="dynamicContain">
			</div>
			<div class="dynamicContain">
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	background-color: #f4f4f4;
	height: auto;

	div h3 {
		margin-left: 15px;
	}
}

.avatar {
	width: 10vh;
	height: 10vh;
	border-radius: 50%;
	float: left;
	margin-left: 5vw;
	background-color: #d9d9d9;

	display: flex;
	flex-direction: column; //修改轴方向
	align-items: center; //上下居中
	justify-content: flex-end;

	div {
	}

	span {
		transform: translateY(4.5vh);
	}
}

.focus {
	height: 23vh;
	background-color: #fffdf8;


}

.recommend {
	height: 25vh;
	background-color: #fffdf8;
}

.dynamic {
	background-color: #fffdf8;
	margin-bottom: 10vh;

	.dynamicContain {
		width: 85vw;
		height: 30vh;
		background-color: #66ccff;
		border-radius: 20px;
		margin: 5vh auto 0;
	}

}
</style>
