import { mount } from '@vue/test-utils';
import { it, expect, vi } from 'vitest';
import ReportChart from './ReportChart.vue';

const chart = vi.hoisted(() => ({
  setOption: vi.fn(),
  resize: vi.fn(),
  dispose: vi.fn(),
}));
vi.mock('echarts/core', () => ({ use: vi.fn(), init: vi.fn(() => chart) }));

it('更新图表并在组件卸载时释放实例', async () => {
  const wrapper = mount(ReportChart, {
    props: { option: { series: [] }, label: '测试图表' },
  });
  expect(wrapper.attributes('aria-label')).toBe('测试图表');
  expect(chart.setOption).toHaveBeenCalledWith({ series: [] });
  await wrapper.setProps({ option: { series: [{ data: [1, 2] }] } });
  expect(chart.setOption).toHaveBeenLastCalledWith(
    { series: [{ data: [1, 2] }] },
    true,
  );
  wrapper.unmount();
  expect(chart.dispose).toHaveBeenCalledOnce();
});
