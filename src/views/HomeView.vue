<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";

import NavBar from "@/components/NavBar.vue";
import BackHeader from "@/components/BackHeader.vue";

// 数据获取部分
let data = reactive([])


</script>

<template>
	<back-header :is-home="true" title="首页"/>
	<nav-bar/>

</template>

<style lang="scss" scoped>

</style>
