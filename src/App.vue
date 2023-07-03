<script lang="ts" setup>
import {RouterLink, RouterView} from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import TheTabbar from "@/components/TheTabbar.vue";
</script>

<template>

	<the-tabbar/>

	<router-view v-slot="{ Component }">
		<keep-alive>
			<component :is="Component" v-if="$route.meta.keepAlive" :key="$route.name"/>
		</keep-alive>
		<component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.name"/>
	</router-view>

</template>

<style lang="scss">
* {
	// 注意这里不能添加 !important，否则 Vant 组件库的 Icon 会被覆盖
	font-family: LXGW WenKai Lite, serif;
}

@media (min-width: 1024px) {
}
</style>
