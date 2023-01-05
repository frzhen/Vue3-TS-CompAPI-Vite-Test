/**
 * @Author: Fred R. Zhen
 * @Date: 2023/1/5 18:39
 * @Email: fred.zhen@gmail.com
 */
/// <reference types="cypress" />
import FormInput from "../FormInput.vue";
import { mount } from "cypress/vue";
describe("FormInput", () => {
  it("renders", () => {
    mount(FormInput, {
      props: {
        name: "username",
        modelValue: "lachlan",
        type: "text",
        status: {
          valid: true
        }
      }
    });
  })
})
