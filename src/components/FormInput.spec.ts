/**
 * @Author: Fred R. Zhen
 * @Date: 2023/1/3 21:30
 * @Email: fred.zhen@gmail.com
 */
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import FormInput from './FormInput.vue';
import {computed, defineComponent, ref} from "vue";

describe("FormInput", () => {
  // larger and a completed tests
  // use it.only to only execute this tests
  it("tests validation", async () => {
    const Parent = defineComponent({
      components: { FormInput },
      template: `
      <FormInput 
        name="foo" 
        type="input"
        :status="status"
        v-model="formValue"
      />`,
      setup () {
        const formValue = ref('foo');
        const status = computed(() => {
          if (formValue.value.length > 5) {
            return {
              valid: true
            }
          } else {
            return {
              valid: false,
              message: 'error'
            }
          }
        });
        return {
          formValue,
          status
        }
      }
    });
    const wrapper = mount(Parent);

    // console.log(wrapper.html());
    expect(wrapper.find('.is-danger').text()).toBe('error');

    await wrapper.find('input').setValue('foobar');

    // console.log(wrapper.html());
    expect(wrapper.find('.is-danger').exists()).toBe(false);
  });

  // smaller and focused tests
  it("renders some errors", () => {
    const wrapper = mount(FormInput, {
      props: {
        name: 'foo',
        modelValue: 'bar',
        status: {
          valid: false,
          message: 'error'
        },
        type: 'input'
      }
    });
    // console.log(wrapper.html());

    expect(wrapper.find('.is-danger').exists()).toBe(true);
  });

  it("renders no error", () => {
    const wrapper = mount(FormInput, {
      props: {
        name: 'foo',
        modelValue: 'bar',
        status: {
          valid: true,
          message: 'error'
        },
        type: 'input'
      }
    });
    expect(wrapper.find('.is-danger').exists()).toBe(false);
  });

})
