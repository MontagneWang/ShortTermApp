<script lang="ts" setup>
import {onMounted, ref} from "vue";
import HomeContent1 from "@/components/HomeContent/HomeContent1.vue";
import HomeContent2 from "@/components/HomeContent/HomeContent2.vue";
import TheHeader from "@/components/TheHeader.vue";

const active = ref(0);

</script>

<template>
	<!--@click-tab="onClickTab"-->
	<van-tabs v-model:active="active"
	          animated
	          class="navbar"
	          swipeable
	          >

		<van-tab name="推荐" title="推荐">
			<home-content1/>
		</van-tab>

		<van-tab name="热度"  title="热度">
			<home-content2/>
		</van-tab>

	</van-tabs>
</template>

<style lang="scss" scoped>
.navbar{
	margin-top: -2vh;
	//z-index: 1;
}
:deep(.van-tabs__nav){
	//transform:translateY(-4vh);
}

:deep(#van-tabs-1-0) {
	span {
		transform: translateX(12vw);
		font-size: 1.2rem;
	}
}

:deep(#van-tabs-1-1) {
	span {
		transform: translateX(-12vw);
		font-size: 1.2rem;
	}
}

:deep(.van-tabs__line) {
	display: none;
}

:deep(.van-tab--active) {
	transform: scale(1.2);
	transform-origin: 50% 50%;
}

//:deep([aria-selected="true"]){
//	transform: scale(1.2);
//	transform-origin:50% 50%;
//}


</style>
