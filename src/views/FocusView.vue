<script lang="ts" setup>

import TheHeader from "@/components/TheHeader.vue";
import BackHeader from "@/components/BackHeader.vue";
import ShowUser from "@/components/ShowUser.vue";
import DynamicItem from "@/components/DynamicItem.vue";
</script>

<template>
	<!--<the-header msg="关注"/>-->
	<back-header :is-home="true" title="关注"/>
	<div class="container">
		<show-user title="关注用户"/>
		<show-user title="推荐"/>
		<div class="dynamic">
			<h3 class="block">动态</h3>
			<dynamic-item/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.block {
	margin-left: 2vw;
	border-left: 5px solid #66ccff;
}

.container {
	background-color: #f4f4f4;
	height: auto;
}


.recommend {
	height: 25vh;
	background-color: #fffdf8;
}

.dynamic {
	padding-bottom: 8vh;
	background-color: #fffdf8;
}
</style>
