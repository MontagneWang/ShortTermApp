<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
	msg: String
})

</script>

<template>
	<div class="header">
		<div class="block">
			<van-icon name="search"/>
			<van-icon name="bell"/>
			<van-icon name="wap-nav"/>
		</div>
		<div class="title">
			{{ props.msg }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
.header {
	position: relative;
	height: 4vh;
	border-top-left-radius: 15px;     /* 左上角 */

	border-top-right-radius: 5px;    /* 右上角 */

	border-bottom-left-radius: 5px;  /* 左下角 */

	border-bottom-right-radius: 5px; /* 右下角 */
	.block {
		background-color: #fff;
		font-size: 1.5rem;
		position: sticky;
		z-index: 2;

		i:first-child {
			transform: translate(7vw, 5.5vh);
		}

		i:nth-child(2) {
			transform: translate(77vw, 5.5vh);
		}

		i:last-child {
			transform: translate(79vw, 5.5vh);
		}
	}
	.title{
		text-align: center;
		font-size: 2rem;
		line-height: 2.7rem;
		font-weight: bold;
	}
}

</style>
