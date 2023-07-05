<script lang="ts" setup>

import BackHeader from "@/components/BackHeader.vue";
import ShowUser from "@/components/ShowUser.vue";
import NoticeItem from "@/components/NoticeItem.vue";
</script>

<template>
	<back-header title="消息中心"/>
	<show-user title="互关好友"/>
	<hr>
	<notice-item/>
	<notice-item/>
	<notice-item/>
	<div class="block"></div>
</template>

<style lang="scss" scoped>
.block{
	margin-bottom: 10vh;
}
</style>
