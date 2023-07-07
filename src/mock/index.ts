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
				data: 'replyGpt',
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
				title: '后端返回标题',
				articleId: '本文id',
				author: '作者名',
				contain: '后端返回内容',
				viewCount: '1111',
				hotPoint: '222',
				comment: [
					{author:'1',contain:'000'},
					{author:'2',contain:'000'},
					{author:'3',contain:'000'},
				]
			}
		},
	},
] as MockMethod[];
