import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import FilesPage from './FilesPage.vue';
import { api, restore } from '../api';
import { auth } from '../state';

vi.mock('../api', () => ({
  api: { get: vi.fn(), post: vi.fn() },
  restore: vi.fn(),
}));
enableAutoUnmount(afterEach);
beforeEach(() => {
  vi.resetAllMocks();
  auth.user = { id: 1, role: 'USER' };
  api.get.mockResolvedValue({ records: [], total: 0, totalPages: 0 });
});

async function choose(wrapper, file) {
  const input = wrapper.find('input[type=file]');
  Object.defineProperty(input.element, 'files', {
    value: [file],
    configurable: true,
  });
  await input.trigger('change');
}

describe('私有图片上传', () => {
  it('以 FormData 提交并重查第一页，失败不显示成功', async () => {
    const wrapper = mount(FilesPage);
    await flushPromises();
    await choose(
      wrapper,
      new File(['image'], 'example.png', { type: 'image/png' }),
    );
    await wrapper.find('form').trigger('submit');
    await flushPromises();
    expect(api.post.mock.lastCall[0]).toBe('/files');
    expect(api.post.mock.lastCall[1]).toBeInstanceOf(FormData);
    expect(api.post.mock.lastCall[1].get('file').name).toBe('example.png');
    expect(wrapper.text()).toContain('上传成功');
    api.post.mockRejectedValueOnce(new Error('文件存储暂时不可用'));
    await choose(
      wrapper,
      new File(['image'], 'example.png', { type: 'image/png' }),
    );
    await wrapper.find('form').trigger('submit');
    await flushPromises();
    expect(wrapper.text()).toContain('文件存储暂时不可用');
    expect(wrapper.text()).not.toContain('上传成功');
  });
  it('拒绝错误类型和过大文件，不发送上传请求', async () => {
    const wrapper = mount(FilesPage);
    await flushPromises();
    await choose(
      wrapper,
      new File(['<svg/>'], 'image.svg', { type: 'image/svg+xml' }),
    );
    expect(wrapper.text()).toContain('请选择不超过');
    await choose(
      wrapper,
      new File([new Uint8Array(2 * 1024 * 1024 + 1)], 'large.png', {
        type: 'image/png',
      }),
    );
    expect(wrapper.find('button[type=submit]').element.disabled).toBe(true);
    expect(api.post).not.toHaveBeenCalled();
  });
  it('恢复身份失败时不展示上传表单', async () => {
    auth.user = null;
    restore.mockRejectedValue(new Error('请重新登录'));
    const wrapper = mount(FilesPage);
    await flushPromises();
    expect(wrapper.text()).toContain('请重新登录');
    expect(wrapper.find('form').exists()).toBe(false);
    expect(api.get).not.toHaveBeenCalled();
  });
});
