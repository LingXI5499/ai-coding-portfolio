import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import AdminPage from './AdminPage.vue';
import { api, restore } from '../api';
import { auth } from '../state';
vi.mock('../api', () => ({
  api: { get: vi.fn(), patch: vi.fn() },
  restore: vi.fn(),
}));
enableAutoUnmount(afterEach);
beforeEach(() => {
  vi.resetAllMocks();
  auth.user = { id: 1, role: 'ADMIN' };
});
const user = {
  id: 2,
  username: 'learner',
  nickname: '学员',
  status: 'ACTIVE',
  role: 'USER',
};
const page = (records = [user], total = 21, totalPages = 3) => ({
  records,
  total,
  totalPages,
  page: 1,
  pageSize: 10,
});
const button = (wrapper, text) =>
  wrapper.findAll('button').find((item) => item.text() === text);
describe('管理员条件分页', () => {
  it('关键字、状态和角色一起提交，权限由服务端判断', async () => {
    api.get.mockResolvedValue(page());
    const wrapper = mount(AdminPage);
    await flushPromises();
    await wrapper.find('.query-form input').setValue('学员');
    const selects = wrapper.findAll('.query-form select');
    await selects[0].setValue('ACTIVE');
    await selects[1].setValue('USER');
    await wrapper.find('form').trigger('submit');
    await flushPromises();
    expect(api.get).toHaveBeenLastCalledWith('/admin/users', {
      params: {
        keyword: '学员',
        status: 'ACTIVE',
        role: 'USER',
        page: 1,
        pageSize: 10,
      },
    });
    expect(wrapper.text()).toContain('共 21 条');
  });
  it('翻页保留已提交筛选，改变筛选或大小从第一页开始', async () => {
    api.get.mockResolvedValue(page());
    const wrapper = mount(AdminPage);
    await flushPromises();
    await wrapper.find('.query-form input').setValue('learner');
    await wrapper.find('form').trigger('submit');
    await flushPromises();
    await button(wrapper, '下一页').trigger('click');
    await flushPromises();
    expect(api.get.mock.lastCall[1].params).toMatchObject({
      keyword: 'learner',
      page: 2,
    });
    await wrapper.find('.pagination select').setValue('5');
    await flushPromises();
    expect(api.get.mock.lastCall[1].params).toMatchObject({
      keyword: 'learner',
      page: 1,
      pageSize: 5,
    });
    await button(wrapper, '重置筛选').trigger('click');
    await flushPromises();
    expect(api.get.mock.lastCall[1].params).toEqual({ page: 1, pageSize: 5 });
  });
  it('没有结果时显示空态并禁用翻页', async () => {
    api.get.mockResolvedValue(page([], 0, 0));
    const wrapper = mount(AdminPage);
    await flushPromises();
    expect(wrapper.text()).toContain('没有符合条件的用户');
    expect(button(wrapper, '上一页').element.disabled).toBe(true);
    expect(button(wrapper, '下一页').element.disabled).toBe(true);
  });
  it('展示认证或权限错误，不把失败显示为用户列表', async () => {
    api.get.mockRejectedValue(new Error('权限不足'));
    const wrapper = mount(AdminPage);
    await flushPromises();
    expect(wrapper.find('[role=alert]').text()).toBe('权限不足');
    expect(wrapper.findAll('tbody tr')).toHaveLength(0);
    auth.user = null;
    restore.mockRejectedValue(new Error('请重新登录'));
    const anonymous = mount(AdminPage);
    await flushPromises();
    expect(anonymous.find('[role=alert]').text()).toBe('请重新登录');
  });
});
