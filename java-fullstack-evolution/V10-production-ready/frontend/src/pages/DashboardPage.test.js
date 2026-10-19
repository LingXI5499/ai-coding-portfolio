import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import DashboardPage from './DashboardPage.vue';
import { api, restore } from '../api';
import { auth } from '../state';

vi.mock('../api', () => ({ api: { get: vi.fn() }, restore: vi.fn() }));
enableAutoUnmount(afterEach);
beforeEach(() => {
  vi.resetAllMocks();
  auth.user = { id: 1, role: 'ADMIN' };
  api.get.mockImplementation((url) =>
    Promise.resolve(
      url === '/admin/dashboard'
        ? {
            totalUsers: 3,
            userStates: [{ status: 'ACTIVE', total: 3 }],
            activityDays: [{ day: '2026-01-01', total: 2 }],
          }
        : {
            records: [{ id: 1, username: 'learner', action: 'LOGIN' }],
            total: 1,
            totalPages: 1,
          },
    ),
  );
});

describe('统计与审计', () => {
  it('展示聚合数据并提交联表查询条件', async () => {
    const wrapper = mount(DashboardPage, {
      global: { stubs: { ReportChart: true } },
    });
    await flushPromises();
    expect(wrapper.text()).toContain('当前共有 3 个账户');
    await wrapper
      .get('input[aria-label="审计用户名关键字"]')
      .setValue('learner');
    await wrapper.get('input[aria-label="审计操作"]').setValue('LOGIN');
    await wrapper.find('form').trigger('submit');
    await flushPromises();
    expect(api.get).toHaveBeenLastCalledWith('/admin/audit-events', {
      params: { keyword: 'learner', action: 'LOGIN', page: 1, pageSize: 10 },
    });
  });
  it('普通账户不展示管理员统计，也不发起报表读取', async () => {
    auth.user = { role: 'USER' };
    const wrapper = mount(DashboardPage);
    await flushPromises();
    expect(wrapper.text()).toContain('需要管理员权限');
    expect(api.get).not.toHaveBeenCalled();
  });
  it('接口失败展示错误，不用虚构数据绘图', async () => {
    api.get.mockRejectedValue(new Error('服务暂时不可用'));
    const wrapper = mount(DashboardPage);
    await flushPromises();
    expect(wrapper.text()).toContain('服务暂时不可用');
    expect(wrapper.find('form').exists()).toBe(false);
  });
});
