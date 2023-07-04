import axios from 'axios';

// 定义用户数据类型接口
export interface Songs {
	data: object
}

// 获取用户列表
export const postUrl = async (url,dataObject): Promise<Songs> => {
	try {
		const response = await axios.post(url,dataObject);
		return response.data as Songs;
	} catch (error) {
		console.error('Axios 获取出错：', error);
		return error;
	}
};
