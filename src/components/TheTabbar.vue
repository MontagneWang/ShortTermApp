<script lang="ts" setup>
import {ref} from "vue";

const active = ref('home');

</script>

<template>
	<van-tabbar v-model="active">
		<van-tabbar-item icon="wap-home-o">
			<RouterLink to="/">首页</RouterLink>
		</van-tabbar-item>
		<van-tabbar-item icon="like-o">
			<RouterLink to="/focus">关注</RouterLink>
		</van-tabbar-item>
		<van-tabbar-item icon="apps-o">
			<RouterLink to="/app">应用</RouterLink>
		</van-tabbar-item>
		<van-tabbar-item icon="contact">
			<RouterLink to="/about">主页</RouterLink>
		</van-tabbar-item>
	</van-tabbar>
</template>

<style lang="scss" scoped>

</style>
