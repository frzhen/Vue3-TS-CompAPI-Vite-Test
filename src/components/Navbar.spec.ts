/**
 * @Author: Fred R. Zhen
 * @Date: 2023/1/3 23:03
 * @Email: fred.zhen@gmail.com
 */
import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Navbar from './Navbar.vue';
import {createPinia, Pinia, setActivePinia} from "pinia";
import {createMemoryHistory, createRouter, Router} from "vue-router";
import { routes } from "../routers";
import { useUsers } from "../store/users";


// similar to jest.fn, vi.fn mock the window.fetch function
vi.stubGlobal('fetch', vi.fn(() => {
  // this is a fake fetch function for testing only
}));
describe('Navbar', () => {
  let pinia: Pinia;
  let router: Router;

  beforeEach(() => {
    // create mock element for teleport testing
    const el = document.createElement('div');
    el.id = 'modal';
    document.body.appendChild(el);

    // added pinia and router plugins for the component
    pinia = createPinia();
    setActivePinia(pinia);
    router = createRouter({
      history: createMemoryHistory(),
      routes: routes
    });
  });
  it("renders register and login buttons when not authenticated", () => {

    const wrapper = mount(Navbar, {
      global: {
        plugins: [pinia, router],
      }
    });

    // console.log(wrapper.html());
    expect(wrapper.find('[data-test-id="register"]').exists()).toBe(true);
    expect(wrapper.find('[data-test-id="login"]').exists()).toBe(true);
  });
  it("renders logout and new post buttons when authenticated", async () => {
    // add users store
    const users = useUsers();
    // mock a user
    users.currentUserId = '1';

    const wrapper = mount(Navbar, {
      global: {
        plugins: [pinia, router],
      }
    });

    // console.log(wrapper.html());
    expect(wrapper.find('a').text()).toBe('New Post');
    expect(wrapper.find('button').text()).toBe('Log out');
    // click logout
    await wrapper.find('[data-test-id="logout"]').trigger('click');
    // console.log(wrapper.html());
    expect(wrapper.find('[data-test-id="register"]').exists()).toBe(true);
    expect(wrapper.find('[data-test-id="login"]').exists()).toBe(true);

    await wrapper.find('[data-test-id="login"]').trigger('click');
    // Teleport is outside the navbar, thus us global api instead
    expect(document.body.querySelector('[data-test-id="login-form"]')).toBeTruthy();
    // console.log(document.body.outerHTML);
  });
});
