import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import EmployeeList from './EmployeeList.vue';
import { api } from '../api';
vi.mock('../api', () => ({ api: { get: vi.fn(), delete: vi.fn() } }));
enableAutoUnmount(afterEach);
beforeEach(() => vi.resetAllMocks());
afterEach(() => vi.unstubAllGlobals());
const options = {
  global: { stubs: { RouterLink: { template: '<a><slot /></a>' } } },
};
const employee = (id = 1) => ({
  id,
  name: '测试员工' + id,
  department: '研发',
  age: 25,
  salary: 8000,
});
const page = (
  records = [],
  total = records.length,
  totalPages = total ? 1 : 0,
) => ({ records, total, totalPages, page: 1, pageSize: 10 });
const button = (wrapper, text) =>
  wrapper.findAll('button').find((item) => item.text() === text);

describe('员工列表条件分页', () => {
  it('展示总数与空状态，读取真实分页契约', async () => {
    api.get.mockResolvedValue(page());
    const wrapper = mount(EmployeeList, options);
    await flushPromises();
    expect(wrapper.text()).toContain('还没有员工');
    expect(wrapper.find('.pagination-summary').text()).toContain('共 0 条');
    api.get.mockResolvedValue(page([employee()]));
    await button(wrapper, '刷新').trigger('click');
    await flushPromises();
    expect(wrapper.text()).toContain('测试员工1');
    expect(api.get).toHaveBeenLastCalledWith('/employees', {
      params: { page: 1, pageSize: 10 },
    });
  });

  it('组合筛选、翻页和切换每页条数传递服务端参数', async () => {
    api.get.mockResolvedValue(page([employee()], 21, 3));
    const wrapper = mount(EmployeeList, options);
    await flushPromises();
    const inputs = wrapper.findAll('.query-form input');
    await inputs[0].setValue('张');
    await inputs[1].setValue('研发');
    await inputs[2].setValue('25');
    await inputs[3].setValue('40');
    await wrapper.find('.query-form').trigger('submit');
    await flushPromises();
    expect(api.get).toHaveBeenLastCalledWith('/employees', {
      params: {
        name: '张',
        department: '研发',
        minAge: 25,
        maxAge: 40,
        page: 1,
        pageSize: 10,
      },
    });
    await button(wrapper, '下一页').trigger('click');
    await flushPromises();
    expect(api.get.mock.lastCall[1].params).toMatchObject({
      name: '张',
      department: '研发',
      page: 2,
    });
    await wrapper.find('.pagination select').setValue('5');
    await flushPromises();
    expect(api.get.mock.lastCall[1].params).toMatchObject({
      name: '张',
      page: 1,
      pageSize: 5,
    });
    await button(wrapper, '重置筛选').trigger('click');
    await flushPromises();
    expect(api.get).toHaveBeenLastCalledWith('/employees', {
      params: { page: 1, pageSize: 5 },
    });
    expect(inputs[0].element.value).toBe('');
  });

  it('展示查询错误并结束加载', async () => {
    api.get.mockRejectedValue(new Error('筛选参数不合法'));
    const wrapper = mount(EmployeeList, options);
    await flushPromises();
    expect(wrapper.find('[role=alert]').text()).toBe('筛选参数不合法');
    expect(wrapper.text()).not.toContain('正在加载员工');
  });

  it('删除最后一页最后一条后退回有效页', async () => {
    api.get
      .mockResolvedValueOnce(page([employee()], 11, 2))
      .mockResolvedValueOnce(page([employee(11)], 11, 2))
      .mockResolvedValueOnce(page([], 10, 1))
      .mockResolvedValueOnce(page([employee()], 10, 1));
    api.delete.mockResolvedValue(null);
    vi.stubGlobal('confirm', () => true);
    const wrapper = mount(EmployeeList, options);
    await flushPromises();
    await button(wrapper, '下一页').trigger('click');
    await flushPromises();
    await button(wrapper, '删除').trigger('click');
    await flushPromises();
    expect(api.delete).toHaveBeenCalledWith('/employees/11');
    expect(api.get.mock.lastCall[1].params.page).toBe(1);
    expect(wrapper.find('.pagination-summary').text()).toContain('共 10 条');
    expect(button(wrapper, '上一页').element.disabled).toBe(true);
    expect(button(wrapper, '下一页').element.disabled).toBe(true);
  });

  it('较早请求的迟到结果不会覆盖新条件查询', async () => {
    let resolve;
    api.get
      .mockReturnValueOnce(
        new Promise((done) => {
          resolve = done;
        }),
      )
      .mockResolvedValueOnce(page([employee(2)]));
    const wrapper = mount(EmployeeList, options);
    await wrapper.find('.query-form input').setValue('新条件');
    await wrapper.find('.query-form').trigger('submit');
    await flushPromises();
    resolve(page([employee(1)]));
    await flushPromises();
    expect(wrapper.text()).toContain('测试员工2');
    expect(wrapper.text()).not.toContain('测试员工1');
  });
});
