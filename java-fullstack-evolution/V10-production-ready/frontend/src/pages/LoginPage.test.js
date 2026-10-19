import { mount, flushPromises } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import LoginPage from './LoginPage.vue';
import { login } from '../api';
import { auth } from '../state';
const push = vi.fn();
vi.mock('vue-router', () => ({ useRouter: () => ({ push }) }));
vi.mock('../api', () => ({ login: vi.fn() }));
const options = {
  global: { stubs: { RouterLink: { template: '<a><slot /></a>' } } },
};
beforeEach(() => {
  auth.user = null;
  vi.clearAllMocks();
});
describe('登录页', () => {
  it('失败显示错误且不导航', async () => {
    login.mockRejectedValue(new Error('用户名或密码错误'));
    const wrapper = mount(LoginPage, options);
    await wrapper.find('input[name=username]').setValue('learner');
    await wrapper.find('input[name=password]').setValue('incorrect-password');
    await wrapper.find('form').trigger('submit');
    await flushPromises();
    expect(wrapper.find('[role=alert]').text()).toBe('用户名或密码错误');
    expect(push).not.toHaveBeenCalled();
    expect(auth.user).toBeNull();
  });
  it('成功后保留公开用户并清空密码', async () => {
    login.mockResolvedValue({ username: 'learner', role: 'USER' });
    const wrapper = mount(LoginPage, options);
    await wrapper.find('input[name=username]').setValue('learner');
    await wrapper.find('input[name=password]').setValue('classroom-password');
    await wrapper.find('form').trigger('submit');
    await flushPromises();
    expect(auth.user.username).toBe('learner');
    expect(push).toHaveBeenCalledWith('/account');
    expect(wrapper.find('input[name=password]').element.value).toBe('');
  });
});
