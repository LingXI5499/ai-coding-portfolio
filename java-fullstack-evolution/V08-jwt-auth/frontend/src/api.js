import axios from 'axios';
export const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: true,
});
let csrfToken = '';
let accessToken = '';
let refreshPending = null;
export const setAccess = (token) => {
  accessToken = token || '';
};
export async function csrf() {
  const data = await api.get('/auth/csrf');
  csrfToken = data.token;
  return data;
}
export function clearCredentials() {
  accessToken = '';
  csrfToken = '';
}
api.interceptors.request.use((config) => {
  if (!['get', 'head', 'options'].includes(config.method))
    config.headers['X-CSRF-TOKEN'] = csrfToken;
  if (
    accessToken &&
    ![
      '/auth/csrf',
      '/auth/register',
      '/auth/login',
      '/auth/refresh',
      '/auth/logout',
      '/auth/forgot-password',
      '/auth/reset-password',
    ].includes(config.url)
  )
    config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});
api.interceptors.response.use(
  (response) => response.data.data,
  async (error) => {
    const config = error.config;
    if (
      error.response?.status === 401 &&
      config &&
      !config._retried &&
      ![
        '/auth/csrf',
        '/auth/register',
        '/auth/login',
        '/auth/refresh',
        '/auth/logout',
        '/auth/forgot-password',
        '/auth/reset-password',
      ].includes(config.url)
    ) {
      config._retried = true;
      await refresh();
      return api(config);
    }
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
  setAccess(result.accessToken);
  await csrf();
  return result.user;
}
export async function refresh() {
  if (!refreshPending) {
    refreshPending = api
      .post('/auth/refresh')
      .then((result) => {
        setAccess(result.accessToken);
        return result.user;
      })
      .catch((error) => {
        setAccess('');
        throw error;
      })
      .finally(() => {
        refreshPending = null;
      });
  }
  return refreshPending;
}
export async function restore() {
  await csrf();
  return refresh();
}
export async function logout() {
  try {
    await api.post('/auth/logout');
  } finally {
    clearCredentials();
  }
}
