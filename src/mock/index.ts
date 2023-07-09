import {MockMethod} from 'vite-plugin-mock';

export default [
	{
		url: '/api/login',
		method: 'post',
		response: () => {
			return {
				code: 200,
				data: 'success',
				token: 'thisIsToken'
			}
		},
	},
	{
		url: '/api/login',
		method: 'get',
		response: () => {
			return {
				code: 200,
				data: 'success',
				token: 'thisIsToken'
			}
		},
	},
	{
		url: '/api/sendgpt',
		method: 'post',
		response: () => {
			return {
				code: 200,
				data: `{code:403;message:'请检查您的余额',status:'error'}`,
			}
		},
	},
	{
		url: '/api/getpost',
		method: 'get',
		response: () => {
			return {
				code: 200,
				data: [
					{
						title: '人工智能：机器学习的崛起',
						articleId: '1',
						author: '张云',
						contain: '本文详细介绍了机器学习在人工智能领域中的重要地位。讨论了从神经网络到深度学习的发展，并探讨了未来可能出现的趋势。',
						viewCount: '123124',
						hotPoint: '3123'
					},
					{
						title: '人工智能的伦理问题',
						articleId: '2',
						author: '李华',
						contain: '人工智能的快速发展带来了许多伦理问题，包括隐私、就业和决策透明性等问题。本文试图引起人们对这些问题的关注，并提出可能的解决方案。',
						viewCount: '1224',
						hotPoint: '323'
					},
					{
						title: '人工智能在医疗领域的应用',
						articleId: '3',
						author: '王刚',
						contain: '本文通过列举几个具体的例子，讨论了人工智能如何改变医疗服务。其中涉及到数据挖掘、自然语言处理，以及深度学习在医疗诊断和疾病预测中的应用。',
						viewCount: '12224',
						hotPoint: '3311'
					}
				]
			}
		},
	},
	{
		url: '/api/sendpost',
		method: 'post',
		response: () => {
			return {
				code: 200,
				data: 'success'
			}
		},
	},
	{
		url: '/api/getarticledetail',
		method: 'post',
		response: () => {
			return {
				code: 200,
				data: 'success',
				title: '文章标题',
				articleId: '本文id',
				author: 'Andrew_',
				contain: '人工智能（Artificial Intelligence，简称AI）指的是使机器具备智能和学习能力的科学与技术领域。它涵盖了模拟和仿真人类智能的各种技术和方法。人工智能可以分为弱人工智能和强人工智能两种类型。弱人工智能（也被称为狭义人工...',
				viewCount: '1111',
				hotPoint: '222',
				comment: [
				// 	{author:'Caro',contain:'爆赞！'},
				// 	{author:'Andy',contain:'Absolutely phenomenal presentation. You’ve taken something established and built an entire world around it. I love it and can’t wait to see more!'},
				// 	{author:'Bob',contain:'该研究实验室由Leap Motion的创办人大卫·霍尔兹（David Holz）负责领导。'},
				]
			}
		},
	},
	{
		url: '/api/sendcomment',
		method: 'post',
		response: () => {
			return {
				code: 200,
				data: '评论已成功发送',
			}
		},
	},
] as MockMethod[];
