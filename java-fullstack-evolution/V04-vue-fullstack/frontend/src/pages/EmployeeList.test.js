import { mount, flushPromises } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import EmployeeList from './EmployeeList.vue';
import { api } from '../api';
vi.mock('../api', () => ({ api: { get: vi.fn(), delete: vi.fn() } }));
const options = {
  global: { stubs: { RouterLink: { template: '<a><slot /></a>' } } },
};
describe('员工列表', () => {
  it('展示真实 API 数据和空状态', async () => {
    api.get.mockResolvedValue([]);
    const wrapper = mount(EmployeeList, options);
    await flushPromises();
    expect(wrapper.text()).toContain('还没有员工');
    api.get.mockResolvedValue([
      { id: 1, name: '测试员工', department: '研发', age: 25, salary: 8000 },
    ]);
    await wrapper.find('button').trigger('click');
    await flushPromises();
    expect(wrapper.text()).toContain('测试员工');
  });
  it('展示网络错误并结束加载', async () => {
    api.get.mockRejectedValue(new Error('网络失败'));
    const wrapper = mount(EmployeeList, options);
    await flushPromises();
    expect(wrapper.find('[role=alert]').text()).toBe('网络失败');
    expect(wrapper.text()).not.toContain('正在加载员工');
  });
});
