import {MockMethod} from 'vite-plugin-mock';

export default [
	{
		url: '/api/login',
		method: 'post',
		response: () => {
			return {
				code: 200,
				data: 'success',
				token: 'asdhfa1='
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
				token: 'asdhfa1='
			}
		},
	},

] as MockMethod[];
