/**
 * @Author: Fred R. Zhen
 * @Date: 2023/1/3 23:03
 * @Email: fred.zhen@gmail.com
 */
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar.vue';
import { createPinia } from "pinia";
import {createMemoryHistory, createRouter} from "vue-router";
import { routes } from "../routers";

describe('Navbar', () => {
  it("renders register and login buttons when not authenticated", () => {
    // create mock element for teleport testing
    const el = document.createElement('div');
    el.id = 'modal';
    document.body.appendChild(el);

    // added pinia and router plugins for the component
    const pinia = createPinia();
    const router = createRouter({
      history: createMemoryHistory(),
      routes: routes
    });
    const wrapper = mount(Navbar, {
      global: {
        plugins: [pinia, router],
      }
    });

    // console.log(wrapper.html());
    expect(wrapper.find('#register').exists()).toBe(true);
    expect(wrapper.find('[data-testId="login"]').exists()).toBe(true);
  });

});
