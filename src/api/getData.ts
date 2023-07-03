import axios from 'axios';

// 定义用户数据类型接口
export interface Songs {
	data: object
}

// 获取用户列表
export const getUrl = async (url): Promise<Songs> => {
	try {
		const response = await axios.get(url);
		return response.data as Songs;
	} catch (error) {
		console.error('Axios 获取出错：', error);
		return error;
	}
};
