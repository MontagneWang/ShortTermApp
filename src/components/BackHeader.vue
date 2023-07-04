<script lang="ts" setup>
import {defineProps, ref} from "vue";

const props = defineProps({
	title: String
})
const onBack = () => history.back();
const onClickLeft = () => {
}
const onClickRight = () => {
};
let isHome = ref(false)
let classObject = {
//	todo 如果是在某些页面，则显示返回按钮；如果不是，则显示搜索按钮
	'left-arrow': true,
	'left-text': "返回"
}
</script>

<template>
	<!--todo 可以考虑把tabbar也合并到这里-->
	<van-nav-bar :title="props.title"
	             v-bind="isHome ? '' : classObject"
	             @click-left="isHome ? onClickLeft() : onBack()">
		<template #right>
			<van-icon name="bell" size="1.5rem"
			          @click.prevent="console.log(1)"/>
			<van-icon name="wap-nav" size="1.5rem"
			          style="margin: 0 1vw 0 4vw;"
			          @click.prevent="console.log(2)"/>
		</template>
	</van-nav-bar>


</template>

<style lang="scss" scoped>
:deep(.van-nav-bar__content) {
	height: 10vh;
	--van-nav-bar-title-font-size: 1.5rem;
	--van-nav-bar-arrow-size: 1.5rem;
	line-height: 2rem;
	border-bottom-left-radius: 15px; /* 左下角 */
	border-bottom-right-radius: 15px; /* 右下角 */
	box-shadow: 0 3px 5px #ccc;
	margin-bottom: 2vh;

	--van-active-opacity: 1;
}

</style>
