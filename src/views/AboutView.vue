
<script>
export default {
	data() {
		return {
			dynamicList: [
				{
					id: 1,
					username: "邵一鸣",
					content: "这是我的第一条动态",
					images: [],
				},
				{
					id: 2,
					username: "邵一鸣",
					content: "这是我的第二条动态",
					images: [],
				},
				{
					id: 3,
					username: "邵一鸣",
					content: "这是我的第三条动态",
					images: [],
				},
			],
			clicked: true,
			columns: ["男", "女"],
			value: "男",
			showPicker: false,

			introduction: "邵一鸣",
			active: 1,

			items: [
				{
					// 导航名称
					text: "今天",
					// 该导航下所有的可选项
					children: [
						{
							// 名称
							text: "这里什么也没有哦",
							// id，作为匹配选中状态的标识
							activeId: 1,
							// 禁用选项
							disabled: true,
						},
					],
				},
				{
					// 导航名称
					text: "昨天",
					// 该导航下所有的可选项
					children: [
						{
							// 名称
							text: "这里是昨天的历史记录",
							// id，作为匹配选中状态的标识
							activeId: 2,
							// 禁用选项
							disabled: true,
						},
					],
				},
			], // 左侧展示的所有分类
			tableAll: [], // 获取所有展示的数据
			tableSelect: [], // 当前分类下的数据
		};
	},
	mounted() {
		this.getTypeList(); // 获取所有分类
		this.getAllTable(); // 获取所有展示的数据
	},
	computed: {},
	methods: {
		async getTypeList() {
			const res = await tableTypeList({ page: -1, pageSize: 10 }); // 调用后端接口显示所有分类
			if (res.code === 0) {
				res.data.tables.forEach((v) => {
					this.items.push({
						text: v.name, // items里面的对象属性必须是text和activeId
						activeId: v.id,
					});
				});
			}
		},
		async getAllTable() {
			const res = await getAllTable();
			if (res.code === 0) {
				this.tableAll = res.data;
			}
		},
		onNavClick(index) {
			const id = this.items[index].activeId; // 点击分类传入当前下标获取该分类的ID
			//然后通过id筛选出当前分类下的数据展示到页面中
			this.tableSelect = this.tableAll.filter((v) => v.selfTableType.id === id);
		},
		onConfirm(value, index) {
			//切换账号
			this.showPicker = false;
			this.value = value;
		},
		onRead(file) {
			console.log(file);
		},
	},
};
</script>

<template>
	<!--<back-header title="个人页面"/>-->
	<div class="personal-detail">
		<!-- 大 -->

		<van-cell-group :border="false" inset>
			<!-- 头bu -->
			<van-cell :border="false" center class="self-title">
				<!--头+名 -->
				<img
						alt="头像"
						class="avatar"
						src="https://tse1-mm.cn.bing.net/th/id/OIP-C._VOKV6CIAHdWWqsL4Ghs5wHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
				/>

				<van-cell :border="false" center class="intro">
					<template #default>
						{{ introduction }}
					</template>
				</van-cell>

				<van-cell-group class="self-concerns">
					<van-row
							class="fans-count"
							style="margin-left: 10%;font-weight: bolder;padding: 0;"
					>
						<van-col offset="2" span="2.5">12K</van-col>
						<van-col offset="1" span="2.8">123K</van-col>
						<van-col offset="1" span="2.8">12333</van-col>
					</van-row>
					<van-cell class="fans">
						<div>
							粉丝
						</div>
						<div>
							关注
						</div>
						<div>
							获赞
						</div>
					</van-cell>
				</van-cell-group>
				<van-button
						class="self-edit"
						size="mini"
						style="height : 10%;width: 25%;"
						type="default"
				>编辑资料
				</van-button
				>
			</van-cell>

			<!-- 详细 -->
			<div :border="false" class="self-detail-menu">
				<div class="control-box">
					<div class="detail-menu">
						<van-tabs
								v-model="active"
								animated
								background="transparent"
								title-active-color="#000"
						>
							<van-tab class="runin" style="overflow: auto;" title="动态">
								<div>
									<template>
										<div>
											<div
													v-for="item in dynamicList"
													:key="item.id"
													style="width:auto;height:300px;border:1px solid black;"

											>
												<div>
													<img
															alt="头像"
															class="change-img"
															src="https://tse1-mm.cn.bing.net/th/id/OIP-C._VOKV6CIAHdWWqsL4Ghs5wHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
															style="display:inline-block;margin-bottom: 5px;float: left;margin-left: 10px;"
													/>
													<div
															style="margin-bottom: 5px;display:block;margin-right: 10px;width: 150px;margin-top: 20px;margin-bottom: 30px;"
															v-html="item.username"></div>
												</div>
												<div style="margin-bottom: 5px;display:block;font-size: 16px;" v-html="item.content"></div>
												<div>
													<img
															alt="头像"
															src="https://tse1-mm.cn.bing.net/th/id/OIP-C._VOKV6CIAHdWWqsL4Ghs5wHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
															style="margin-bottom: 50px;margin-left: 80px;display:inline-block;width: 80px;height: 80px;"
													/>
												</div>
												<div style="margin-left: 10px;">
													<van-icon name="like-o"/>
													<span style="margin-right: 5px;">12K</span>
													<van-icon name="star-o"/>
													<span style="margin-right: 5px;">111</span>
													<van-icon name="thumb-circle-o"/>
													<span>222</span>
												</div>
											</div>

										</div>
									</template>
								</div>
								<!-- 做个空气墙 -->
								<div class="hit"></div>
							</van-tab>
							<van-tab title="资料">
								<van-row>
									<van-col
											offset="5"
											span="8"
											style="margin-top:6%;
                font-weight:normal !important;
                font-size: 16.53px !important;
                "
									>头像
									</van-col
									>
									<van-col offset="2" span="8">
										<img
												alt="头像"
												class="change-img"
												src="https://tse1-mm.cn.bing.net/th/id/OIP-C._VOKV6CIAHdWWqsL4Ghs5wHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
												style="display: flex;
                    margin-top: 5%;
                    margin-bottom: -32%;
                    opacity: 0.3;
                    "
										/>
										<van-uploader
												:after-read="onRead"
												accept="image/gif, image/jpeg"
												multiple
												style="display: flex;margin-bottom: 18%;
                    margin-left: 15%;
                    "
										>
											<van-icon name="photograph"/>
										</van-uploader>
									</van-col>
								</van-row>
								<van-row style="height: 50px;">
									<van-col
											offset="5"
											span="8"
											style="line-height: 50px;font-size: 16.53px !important;"
									>
										昵称
									</van-col>
									<van-col
											offset="2"
											span="8"
											style="line-height: 50px;font-size: 16.53px !important;"
									>
										<template #default>
											{{ introduction }}
										</template>
									</van-col>
								</van-row>
								<van-row style="height: 50px;">
									<van-cell
											class="self-value"
											is-link
											style="height: 50px;min-width: 70%;"
											title="简介"
											title-style="margin-left:61px"
											value="QAQ"
									>
									</van-cell>
								</van-row>

								<van-row style="height: 50px;">
									<van-cell
											:value="value"
											class="self-value"
											is-link
											style="height: 50px;min-width: 70%;"
											title="性别"
											title-style="margin-left:61px"
											@click="showPicker = true"
									>
									</van-cell>
									<van-popup
											v-model="showPicker"
											get-container="body"
											position="bottom"
									>
										<van-picker
												:columns="columns"
												show-toolbar
												@cancel="showPicker = false"
												@confirm="onConfirm"
										/>
									</van-popup>
								</van-row>

								<!-- 收藏 -->
								<div class="self-likes">
									<van-cell
											clickable="clicked"
											is-link
											style="height: 50px;min-width: 70%;background-color: transparent;padding-top: 8%;overflow: visible;"
											title="收藏"
											title-style="margin-left:65px"
									>
									</van-cell>
								</div>
								<div class="peizhong"></div>
							</van-tab>
							<van-tab title="历史">
								<div class="history">
									<van-tree-select
											:active-id.sync="items.activeId"
											:items="items"
											:main-active-index.sync="items.activeId"
											@click-nav="onNavClick"
									>
										<template slot="content">
											<div
													v-for="item in tableSelect"
													:key="item.index"
													class="m_box"
											>
												<img :src="item.tableLogo" alt=""/>
												<div class="b_content">
													<div class="b_title">{{ item.tableName }}</div>
													<div class="b_price">￥{{ item.price }}</div>
												</div>
											</div>
										</template>
									</van-tree-select>
								</div>
							</van-tab>
						</van-tabs>
					</div>
				</div>
			</div>
		</van-cell-group>
	</div>
</template>

<style scoped>
/* 添加以下样式 */

/* .personal-detail > *:not(.ai-introduction-container) {
  opacity: 0.8;
  height: 100%;
} */

.personal-detail {
	/* background-color: #fff; */
	height: 100%;
	width: 100%;
	padding-top: 50px;
	/* padding-left: 5%; */
	background-image: url("https://pic1.zhimg.com/80/v2-558b68e22b7c2cb6d717153cbd7ab519_720w.webp?source=1940ef5c");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	/* 其他样式属性 */
}

.van-cell-group {
	/* background-color: #fff; */
	padding: 0;
	margin: 0;
	height: 700px;
	width: 110%;
	background-color: transparent;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
}

.van-cell .intro {
	/* position: absolute;
			left: 0; */
	background-color: transparent;
	/* padding-left: 6%; */
	width: 100%;
	height: 10px;
	font-size: 22px;
	font-weight: bolder;
}

.van-cell-group .self-detail-menu {
	/* overflow:auto; */
	position: absolute;
	top: 5%;
	background-color: rgb(238, 237, 237);
	border-radius: 24px;
	margin-top: 50px;
	width: 98%;
	height: 100%;
}

/* .van-cell {

  box-sizing: content-box;
} */
.van-cell-group .self-title {
	padding-left: 12%;
	z-index: 999;
	height: auto;
	margin-top: 10%;
	width: 100%;
	background-color: transparent;
}

.van-cell:after {
	border: none;
}

.van-panel:after {
	border: none;
}

[class*="van-hairline"]::after {
	border: none;
}

.self-concerns {
	position: absolute;
	right: -35%;
	top: 60%;
	/* background-color: blue; */
	height: 100%;
}

.fans {
	background-color: transparent;
	width: 100%;
	height: auto;
}

.fans div {
	display: flex;
	margin-left: 8%;
	font-size: 14px;
	font-weight: bold;
}

.avatar {
	/* position: absolute;
	top: 0; */
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
	border: 2px solid rgb(0, 183, 255);
}

.self-title {
	overflow: visible;
}

.self-edit {
	/* margin-top: 100%;
	margin-left: 60%; */
	position: absolute;
	right: 20%;
	bottom: -18%;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19), 0 2px 2px 0 rgba(0, 0, 0, 0.19);
	border-radius: 3px;
}

.detail-menu {
	/* display: block; */
	/* margin-top: 300px;  */
	margin-left: 10%;
	width: 80%;
	height: auto;
	background-color: white;
	border-radius: 30px;
	overflow: auto;
	/* margin-top: 1000px; */
	/* background-color: red; */
}

.detail-menu .van-tab--active {
	color: black !important;
	font-weight: bolder !important;
}

.detail-menu .van-tabs {
	/* border-bottom: 5px solid black; */
	margin-top: 0%;
	padding: 0;
}

.change-img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
	border: 2px solid rgb(0, 183, 255);
}

.van-cell__value {
	overflow: visible !important;
}

/* .van-tab::active {
	transform: scale(1.2);

  color: rgb(248, 3, 3);
} */
.self-value {
	background-color: transparent;
}

.van-cell__value {
	margin-right: 15%;
}

body {
	overflow: scroll; /* 显示滚动条 */
}

.control-box {
	/* display: block; */
	/* margin: auto; */
	overflow: auto;
	margin-top: 150px;
	width: 400px;
	height: 500px;

	/* background-color: red; */
}

/* .content {
    width: 80%;
    padding: 0.4rem;
    box-sizing: border-box;
    .kinds {
      width: 90%;
      margin: 0.666667rem auto 0;
      border: 1px solid #a7a7a7;
      border-radius: 0.266667rem;
    }
    .text {
      margin: 0.666667rem 0;
      p {
        font-size: 0.4rem;
        line-height: 0.666667rem;
      }
    }
  } */
.self-likes {
	margin-top: 10%;
	margin-left: 10%;
	width: 80%;
	height: 10%;
	background-color: rgb(255, 255, 255);
	border-radius: 30px;
}

.activity {
	margin: auto;
	margin-top: 25px;
	width: 280px;
	height: 200px;
	border-radius: 20px;
	background-color: rgb(96, 96, 96);
}

.hit {
	background-color: transparent;
	width: auto;
	height: 200px;
}

.runin {
	overflow: auto;
}

.van-tab-pane {
	overflow: auto !important;
}

.peizhong {
	width: auto;
	height: 50px;
}

.history {
	margin: auto;
	margin-top: 5%;
	margin-bottom: 5%;
	border-radius: 20px;
	width: 80%;
	height: 300px;
	background-color: rgb(112, 112, 112);
}

/* .self-panel {
  width: 95%;
  height: 100px;
  margin-top: 70%;
  background-color: rgb(0, 255, 128);
} */
</style>
