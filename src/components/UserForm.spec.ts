/**
 * @Author: Fred R. Zhen
 * @Date: 2023/1/4 16:08
 * @Email: fred.zhen@gmail.com
 */
import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import {createPinia, Pinia, setActivePinia} from "pinia";
import {createMemoryHistory, createRouter, Router} from "vue-router";
import { routes } from "../routers";
import UserForm from "./UserForm.vue";


// similar to jest.fn, vi.fn mock the window.fetch function
vi.stubGlobal('fetch', vi.fn(() => {
  // this is a fake fetch function for testing only
}));
describe('UserForm', () => {
  let pinia: Pinia;
  let router: Router;

  beforeEach(() => {
    // added pinia and router plugins for the component
    pinia = createPinia();
    setActivePinia(pinia);
    router = createRouter({
      history: createMemoryHistory(),
      routes: routes
    });
  });

  it("runs through the workflows", async () => {
    const wrapper = mount(UserForm, {
      global: {
        plugins: [pinia, router],
      }
    });

    // test button is disabled before any valid form input is entered
    expect(wrapper.find('button').element.disabled).toBeTruthy();

    // console.log(wrapper.html());
    // chaining find
    expect(wrapper.find('[data-test-id="username"]')
      .find('.is-danger').text())
      .toBe('This field is required.');
    expect(wrapper.find('[data-test-id="password"]')
      .find('.is-danger').text())
      .toBe('This field is required.');

    // fill the form and test
    // false positive test
    await wrapper.find('#UserName').setValue('user');
    // console.log(wrapper.html());
    expect(wrapper.find('[data-test-id="username"]')
      .find('.is-danger').text())
      .toBe('This field must be between 5 and 10');
    await wrapper.find('#Password').setValue('pass');
    // console.log(wrapper.html());
    expect(wrapper.find('[data-test-id="password"]')
      .find('.is-danger').text())
      .toBe('This field must be between 8 and 40');

    // true positive test
    await wrapper.find('#UserName').setValue('username');
    await wrapper.find('#Password').setValue('password');
    // console.log(wrapper.html());
    expect(wrapper.find('[data-test-id="username"]')
      .find('.is-danger').exists())
      .toBeFalsy();
    expect(wrapper.find('[data-test-id="password"]')
      .find('.is-danger').exists())
      .toBeFalsy();
    // test the button is enabled after valid form data is entered
    expect(wrapper.find('button').element.disabled).toBeFalsy();

    // Trigger a submit event
    // trigger button directly will not catch keyboard enter event
    await wrapper.find('form').trigger('submit.prevent');

    //test emitter
    // console.log(wrapper.emitted().submit[0]);
    // test emitter
    expect(wrapper.emitted().submit[0]).toEqual([{
      username: 'username',
      password: 'password'
    }])
  });

});
