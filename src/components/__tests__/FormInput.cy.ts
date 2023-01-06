/**
 * @Author: Fred R. Zhen
 * @Date: 2023/1/5 18:39
 * @Email: fred.zhen@gmail.com
 */
/// <reference types="cypress" />
import FormInput from "../FormInput.vue";
import { mount } from "cypress/vue";
describe("FormInput", () => {
  it("does not render an error when valid", () => {
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
    cy.get('[role="alert"]').should("not.exist");
  });
  it("does render an error when invalid", () => {
    mount(FormInput, {
      props: {
        name: "username",
        modelValue: "lachlan",
        type: "text",
        status: {
          valid: false,
          message: 'Invalid username'
        }
      }
    });
    cy.get('[role="alert"]').should('contain.text', 'Invalid username');
  });

})
