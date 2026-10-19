import { mount, flushPromises } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import EmployeeForm from './EmployeeForm.vue';
import { api } from '../api';

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { id: '1' } }),
  useRouter: () => ({ push: vi.fn() }),
}));
vi.mock('../api', () => ({ api: { get: vi.fn(), put: vi.fn() } }));

describe('编辑表单', () => {
  it('读取已有数据时禁用输入，避免覆盖用户刚填写的内容', async () => {
    let resolve;
    api.get.mockReturnValue(
      new Promise((done) => {
        resolve = done;
      }),
    );
    const wrapper = mount(EmployeeForm, {
      global: { stubs: { RouterLink: { template: '<a><slot /></a>' } } },
    });
    await flushPromises();
    expect(
      wrapper.findAll('input').every((input) => input.element.disabled),
    ).toBe(true);
    resolve({
      name: '原始姓名',
      gender: '未说明',
      age: 25,
      phone: '',
      department: '研发',
      salary: 8000,
    });
    await flushPromises();
    expect(wrapper.find('input').element.disabled).toBe(false);
    expect(wrapper.find('input').element.value).toBe('原始姓名');
  });
});
