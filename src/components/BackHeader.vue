<script lang="ts" setup>
import {defineProps, ref} from "vue";
import router from "@/router";
import Modal from '../utils/ToastComp.vue'
const props = defineProps({
	title: String,
	isHome: Boolean
})
let {title, isHome} = props
const onBack = () => history.back();
const onClickLeft = () => {
}
const onClickRight = () => {
};
let classBack = {
	'left-arrow': true,
	'left-text': "返回"
}
let classHome = {
	'left-arrow': false,
	'left-text': ""
}

const showModal = ref(false)

</script>

<template>
	<Teleport to="body">
		<modal :show="showModal" @close="showModal = false">
			<template #header>
				<van-button type="default">&emsp;设置&emsp;</van-button>
			</template>
			<template #body>
				<van-button type="default">历史记录</van-button>
				<br>
				<van-button type="default">&emsp;关于&emsp;</van-button>
				<br>
				<van-button type="danger">退出登录</van-button>
			</template>
		</modal>
	</Teleport>

	<van-nav-bar :title="title"
	             v-bind="isHome ? classHome : classBack"
	             @click-left="isHome ? onClickLeft() : onBack()">
		<template #left>
			<van-icon v-show="isHome" name="search" size="1.5rem"
			          @click.prevent="console.log(0)"/>
			<van-icon v-show="!isHome" name="arrow-left" size="1.5rem"
			          @click.prevent="console.log(0)"/>
		</template>
		<template #right>
			<van-icon name="bell" size="1.5rem"
			          @click.prevent="router.push('/notice')"/>
			<van-icon name="wap-nav" size="1.5rem"
			          style="margin: 0 1vw 0 4vw;"
			          @click.prevent="showModal = true"/>
		</template>
	</van-nav-bar>


</template>

<style lang="scss" scoped>

:deep(.modal-container){
	padding: 0;
}
:deep(.modal-body){
	margin: 0;
}

:deep(.van-nav-bar__left, .van-nav-bar__right){
//z-index: 3;
}

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
