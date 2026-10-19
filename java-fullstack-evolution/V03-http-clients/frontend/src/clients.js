import axios from 'axios';
export async function fetchRequest(url, method = 'GET', data, signal) {
  const response = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: data ? JSON.stringify(data) : undefined,
    signal,
  });
  const body = await response.json();
  if (!response.ok)
    throw new Error(`HTTP ${response.status}: ${body.message || '请求失败'}`);
  return body.data;
}
export function xhrRequest(url, method = 'GET', data, signal) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.timeout = 10000;
    xhr.setRequestHeader('Content-Type', 'application/json');
    const abort = () => xhr.abort();
    signal?.addEventListener('abort', abort, { once: true });
    xhr.onloadend = () => signal?.removeEventListener('abort', abort);
    xhr.onload = () => {
      try {
        const body = JSON.parse(xhr.responseText);
        if (xhr.status < 200 || xhr.status >= 300)
          reject(
            new Error(`HTTP ${xhr.status}: ${body.message || '请求失败'}`),
          );
        else resolve(body.data);
      } catch {
        reject(new Error('JSON 解析失败'));
      }
    };
    xhr.onerror = () => reject(new Error('网络连接失败'));
    xhr.ontimeout = () => reject(new Error('请求超时'));
    xhr.onabort = () => reject(new Error('请求已取消'));
    if (signal?.aborted) {
      reject(new Error('请求已取消'));
      return;
    }
    xhr.send(data ? JSON.stringify(data) : null);
  });
}
export const api = axios.create({ baseURL: '/api', timeout: 10000 });
export async function axiosRequest(url, method = 'GET', data, signal) {
  try {
    const response = await api.request({
      url: url.startsWith('/api/') ? url.slice(4) : url,
      method,
      data,
      signal,
    });
    return response.data.data;
  } catch (e) {
    throw new Error(
      e.response
        ? `HTTP ${e.response.status}: ${e.response.data.message || '请求失败'}`
        : e.message,
    );
  }
}
