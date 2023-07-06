<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import {postUrl} from "@/api/postData";
import {useCounterStore} from "@/stores/counter";
import {storeToRefs} from "pinia";
import Modal from '../utils/ToastComp.vue'
import axios from "@/api/axios";
import router from "@/router";

let counter = useCounterStore()
const {token, isUserLoggedIn} = storeToRefs(counter)

let username = ref('')
let password = ref('')
let passwordConfirm = ref('')
let mail = ref('')
let confirmCode = ref('')
let isLogin = ref(true)

let config = reactive({
	username: username.value,
	password: password.value,
	token
})
const showModal = ref(false)

interface ReturnData {
	code: number
	message: string
	token: string
}

let url = '/api/login' // todo 登录验证接口
let handleSubmit = async (url: string) => {
	let data = await postUrl(url, config) as ReturnData
	if (data.code === 200) {
		console.log(data)
		isUserLoggedIn.value = true
		token.value = data.token
		console.log(data)
		await router.push('/about')
	} else {
		showModal.value = true
	}
}
</script>

<template>
	<Teleport to="body">
		<modal :show="showModal" @close="showModal = false">
			<template #header>
				<h3>登录失败</h3>
			</template>
			<template #body>
				用户名或密码错误
			</template>
		</modal>
	</Teleport>

	<main>
		<div class="bg">
			<img src="https://article.biliimg.com/bfs/article/403f3915496f8859b2caed4f4ad6a0dfc02d0c2b.jpg"/></div>
		<div class="container">
			<div class="input">
				<form>
					<div v-show="isLogin" class="signin">
						<div>
							<label>
								<van-icon name="user-circle-o"/>
								&nbsp;
								<input v-model.trim="username" placeholder=" 用户名" required type="text"/>
							</label>
						</div>
						<br>
						<div>
							<label>
								<van-icon name="closed-eye"/>
								&nbsp;
								<input v-model.trim="password" placeholder=" 密码" required type="password"/>
							</label>
						</div>
					</div>

					<div v-show="!isLogin" class="signup">
						<div>
							<label>
								<van-icon name="envelop-o"/>
								&nbsp;
								<input v-model.trim="mail" placeholder=" 邮箱" required type="text"/>
							</label>
						</div>
						<br>
						<div>
							<label>
								<van-icon name="guide-o"/>
								&nbsp;
								<input v-model.trim="confirmCode" placeholder=" 验证码" required type="password"/>
							</label>
						</div>
						<hr>
						<div>
							<label>
								<van-icon name="closed-eye"/>
								&nbsp;
								<input v-model.trim="password" placeholder=" 输入密码" required type="password"/>
							</label>
						</div>
						<br>
						<div>
							<label>
								<van-icon name="closed-eye"/>
								&nbsp;
								<input v-model.trim="passwordConfirm" placeholder=" 确认密码" required type="password"/>
							</label>
						</div>
					</div>


					<div class="foot-button">
						<button @click.prevent="isLogin=!isLogin">
							{{ isLogin ? '注册' : '登录' }}
						</button>
						&nbsp;
						<button>忘记密码</button>
					</div>

					<van-button class="login" type="primary"
					            @click.prevent="handleSubmit(url)">点击{{ isLogin ? '登录' : '注册' }}
					</van-button>
				</form>
			</div>

			<div v-show="isLogin" class="hr">
				<span class="line"></span>
				<span class="txt">其他登录方式</span>
				<span class="line"></span>
			</div>

			<div v-show="isLogin" class="button">
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

		button {
			width: 15vw;
			height: 15vw;
			margin: 0 5vh;
			border-radius: 50%;
			font-size: 2rem;
			border-style: none;
		}
	}
}
</style>
