import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetchRequest, xhrRequest, axiosRequest, api } from './clients';
afterEach(() => vi.unstubAllGlobals());
describe('HTTP 客户端', () => {
  it('Fetch 检查 HTTP 错误，不把 400 当成功', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 400,
        json: async () => ({ message: '缺少姓名' }),
      }),
    );
    await expect(fetchRequest('/api/employees')).rejects.toThrow('HTTP 400');
  });
  it('Fetch 网络失败保持拒绝状态', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue(new TypeError('Failed to fetch')),
    );
    await expect(fetchRequest('/api/employees')).rejects.toThrow(
      'Failed to fetch',
    );
  });
  it('Axios 同样读取 data 契约', async () => {
    api.defaults.adapter = async (config) => ({
      config,
      status: 200,
      headers: {},
      data: { data: [{ id: 1 }] },
    });
    await expect(axiosRequest('/api/employees')).resolves.toEqual([{ id: 1 }]);
  });
  it('XHR 回调转换 Promise 并拒绝非 2xx', async () => {
    class FakeXHR {
      open() {}
      setRequestHeader() {}
      send() {
        this.status = 400;
        this.responseText = '{"message":"缺少姓名"}';
        this.onload();
        this.onloadend();
      }
    }
    vi.stubGlobal('XMLHttpRequest', FakeXHR);
    await expect(xhrRequest('/api/employees', 'POST', {})).rejects.toThrow(
      'HTTP 400',
    );
  });
});
