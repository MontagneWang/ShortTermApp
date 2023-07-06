<script lang="ts" setup>
import {defineProps} from "vue";
import router from "@/router";
const props = defineProps({
	title: String
})
let {title} = props
</script>

<template>
	<div class="focus">
		<h3 class="block"> {{ title }}</h3>
		<!--有数据后可改成 v-for 渲染-->
		<div class="avatar" @click="router.push('/about')">
			<div><img alt="" src="../assets/avatar/ava1.webp" @click=""></div>
			<span>ID1</span>
		</div>
		<div class="avatar" @click="router.push('/about')">
			<div><img alt="" src="../assets/avatar/ava2.webp"></div>
			<span>ID2</span>
		</div>
		<div class="avatar" @click="router.push('/about')">
			<div><img alt="" src="../assets/avatar/ava4.webp"></div>
			<span>ID3</span>
		</div>
	</div>

</template>

<style lang="scss" scoped>
.block {
	margin-left: 2vw;
	border-left: 5px solid #66ccff;
}

.focus {
	height: 23vh;
	background-color: #fffdf8;

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
			img {
				width: 100%;
				border-radius: 50%;
				transform: translateY(3.6vh);
			}
		}

		span {
			transform: translateY(4.5vh);
		}
	}

}

</style>
