<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
	title: String
})
const onClickLeft = () => history.back();
const onClickRight = () => {
};
</script>

<template>
	<van-nav-bar left-arrow
	             left-text="返回"
	             right-text="按钮"
	             :title="props.title"
	             @click-left="onClickLeft"
	             @click-right="onClickRight">
		<template #right>
			<van-icon name="search" size="18"/>
		</template>
	</van-nav-bar>


</template>

<style lang="scss" scoped>
:deep(.van-nav-bar__content){
	height: 10vh;
	--van-nav-bar-title-font-size:1.5rem;
	--van-nav-bar-arrow-size:1.5rem;
	line-height: 2rem;
	border-bottom-left-radius: 15px;  /* 左下角 */
	border-bottom-right-radius: 15px; /* 右下角 */
	box-shadow: 0 3px 5px #ccc;
	margin-bottom: 2vh;
}
</style>
