import axios from 'axios';
export const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: true,
});
// Session 身份由浏览器 Cookie 传递；前端只缓存服务端签发的 CSRF Token。
let csrfToken = '';
export async function csrf() {
  const data = await api.get('/auth/csrf');
  csrfToken = data.token;
  return data;
}
export function clearCredentials() {
  csrfToken = '';
}
api.interceptors.request.use((config) => {
  if (!['get', 'head', 'options'].includes(config.method))
    config.headers['X-CSRF-TOKEN'] = csrfToken;

  return config;
});
api.interceptors.response.use(
  (response) => response.data.data,
  async (error) => {
    throw new Error(
      error.response?.data?.message ||
        (error.response
          ? `HTTP ${error.response.status}`
          : '网络连接失败，请检查后端是否启动'),
    );
  },
);
export async function login(username, password) {
  await csrf();
  const result = await api.post('/auth/login', { username, password });

  await csrf();
  return result;
}
export async function restore() {
  await csrf();
  return api.get('/auth/me');
}
export async function logout() {
  try {
    await api.post('/auth/logout');
  } finally {
    clearCredentials();
  }
}
