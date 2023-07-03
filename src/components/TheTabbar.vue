<script lang="ts" setup>
import {ref} from "vue";

const active = ref('home');

</script>

<template>
	<van-tabbar v-model="active">
		<van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
		<van-tabbar-item icon="like-o">关注</van-tabbar-item>
		<van-tabbar-item icon="apps-o">应用</van-tabbar-item>
		<van-tabbar-item icon="contact">主页</van-tabbar-item>
	</van-tabbar>
</template>

<style lang="scss" scoped>

</style>
