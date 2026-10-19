import { describe, it, expect } from 'vitest';
import { api, csrf, login, clearCredentials } from './api';
describe('HTTP 边界', () => {
  it('写请求携带服务端 CSRF，读取不携带伪造令牌', async () => {
    const calls = [];
    api.defaults.adapter = async (config) => {
      calls.push(config);
      return {
        status: 200,
        headers: {},
        config,
        data: {
          data:
            config.url === '/auth/csrf'
              ? { token: 'server-issued-token' }
              : { id: 1 },
        },
      };
    };
    await csrf();
    await api.post('/auth/register', {});
    expect(calls[1].headers['X-CSRF-TOKEN']).toBe('server-issued-token');
    clearCredentials();
  });
  it('HTTP 失败与网络失败都转成用户提示', async () => {
    api.defaults.adapter = async (config) => {
      throw {
        config,
        response: { status: 400, data: { message: '字段不合法' } },
      };
    };
    await expect(api.post('/auth/register', {})).rejects.toThrow('字段不合法');
    api.defaults.adapter = async (config) => {
      throw { config };
    };
    await expect(api.get('/auth/me')).rejects.toThrow('网络连接失败');
  });
});
