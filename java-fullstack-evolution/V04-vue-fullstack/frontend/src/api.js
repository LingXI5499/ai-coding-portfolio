import axios from 'axios';
export const api = axios.create({ baseURL: '/api', timeout: 10000 });
api.interceptors.response.use(
  (response) => response.data.data,
  (error) =>
    Promise.reject(
      new Error(
        error.response?.data?.message ||
          (error.response
            ? `HTTP ${error.response.status}`
            : '网络连接失败，请检查后端是否启动'),
      ),
    ),
);
