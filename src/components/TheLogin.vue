<script lang="ts" setup>
import {ref} from "vue";

let username = ref('')
let password = ref('')
let token = ref('')
let isLogin = true

let handleSubmit = ()=>{

}
</script>

<template>
	<main>
		<div class="bg">
			<img src="https://article.biliimg.com/bfs/article/403f3915496f8859b2caed4f4ad6a0dfc02d0c2b.jpg"/>		</div>
		<div class="container">
			<div class="input">
				<form @click.prevent="handleSubmit">
					<div>
						<label>
							<van-icon name="user-circle-o"/>
							&nbsp;
							<input v-model.trim="username" required type="text"/>
						</label>
					</div>
					<br>
					<div>
						<label>
							<van-icon name="closed-eye"/>
							&nbsp;
							<input v-model.trim="password" required type="password"/>
						</label>
					</div>

					<div class="foot-button">
						<button @click.prevent="isLogin=!isLogin">{{ isLogin ? '注册' : '登录' }}</button>
						&nbsp;
						<button>忘记密码</button>
					</div>

					<van-button class="login" type="primary">登录</van-button>
				</form>
			</div>

			<div class="hr">
				<span class="line"></span>
				<span class="txt">其他登录方式</span>
				<span class="line"></span>
			</div>

			<div class="button">
				<button>
					<van-icon name="qq"/>
				</button>
				<button>
					<van-icon name="wechat"/>
				</button>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.bg {
	img {
		width: 100vw;
	}
}

.container {
	display: block;
	position: absolute;
	bottom: 0;
	height: 70vh;
	width: 100vw;
	border-radius: 7%;
	background-color: #fff;

	.input {
		font-size: 1.5rem;
		width: 100vw;
		text-align: center;
		margin-top: 7vh;

		.foot-button {
			font-size: 1rem;
			margin-top: 2vh;
			margin-right: 17vw;
			text-align: right;
		}

		.login {
			width: 65vw;
			border-radius: 10px;
			margin-top: 2vh;
			font-size: 1.5rem;
		}

		input {
			width: 55vw;
		}
	}

	.hr {
		margin-top: 3vh;
		text-align: center;

		.txt {
			color: #000;
			vertical-align: -5px;
			margin: 0 3vw;
		}

		.line {
			display: inline-block;
			width: 25vw;
			border-top: 1px solid #000;
		}
	}

	.button {
		text-align: center;
		margin-top: 3vh;
		button{
			width: 15vw;
			height: 15vw;
			margin: 0 5vh;
			border-radius: 50%;
			font-size: 2rem;
			border-style:none;
		}
	}
}
</style>
