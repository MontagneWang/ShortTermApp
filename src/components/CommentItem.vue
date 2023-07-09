<script lang="ts" setup>

import {defineProps} from "vue";

const props = defineProps({
	data: Object
})
</script>

<template>
	<div class="container">
		<div class="author">
			<div class="avatar">
				<img alt="" src="../assets/avatar/ava5.jpg">
			</div>
			<span class="name">
				{{ data.author || 'Alice' }}
			</span>
		</div>
		<div class="contain">
			{{ data.contain || '内容' }}
		</div>
		<!--<div class="counter">-->
		<!--	点赞数 {{ viewCount || '0' }} 评论数 {{ hotPoint || '0' }}-->
		<!--</div>-->
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: 90% !important;
	border-radius: 15px;
	background-color: #fffdf8;
	margin: 2vh 0;
	border: 1px solid #66ccff;

	.author {
		width: 80%;
		margin-top: 2vh;
		margin-left: 4vw;

		.avatar {
			width: 15vw;
			display: inline-block;
			vertical-align: middle;

			img {
				width: 100%;
				border-radius: 50%;
			}
		}

		.follow {
			display: inline-block;
			float: right;
			margin-top: 1vh;
		}

		.name {
			margin-left: 4vw;
			font-size: 1.5rem;
			font-weight: bold;
		}
	}

	.contain, .counter {
		width: 90%;
		margin: 2vh auto;
		border-radius: 5px;
	}

	.counter {
		color: #ccc;
	}
}
</style>
