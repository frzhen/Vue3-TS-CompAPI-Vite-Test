/**
 * @Author: Fred R. Zhen
 * @Date: 2023/1/5 18:39
 * @Email: fred.zhen@gmail.com
 */
/// <reference types="cypress" />
import FormInput from "../FormInput.vue";
import { mount } from "cypress/vue";
import { computed, defineComponent, ref} from "vue";
import { Status } from "../../utils/validation";

export default defineComponent({
  components: {FormInput}
})

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
  it("responds to input with modelValue", () => {
    const stub = cy.stub();
    mount(FormInput, {
      props: {
        name: "username",
        modelValue: "lachlan",
        type: "text",
        status: {
          valid: true
        },
        'onUpdate:modelValue': stub
      }
    });
    cy.get('input').clear().type('test').then(() => {
      expect(stub).to.have.been.calledWith('test');
    });

  });
  // Cypress is currently not working with Vite 4 in rendering new component for test as of 2023/1/7
  // it.only("responds to input with a new test component", () => {
  //   const Parent = defineComponent({
  //     setup() {
  //       const username = ref('lachlan');
  //       const status = computed<Status>(() => {
  //         const valid = username.value.length > 5;
  //         return {
  //           valid: valid,
  //           message: valid ? undefined : "It is too short",
  //         }
  //       });
  //       return {
  //         username,
  //         status,
  //       }
  //     },
  //     components: {
  //       FormInput: FormInput,
  //     },
  //     template: `
  //         <FormInput
  //           name="username"
  //           v-model="username"
  //           type="text"
  //           :status="status"
  //         />
  //       `,
  //   });
  //   mount(Parent);
  //   cy.get('[role="alert"]').should('not.exist');
  //   cy.get('input').clear();
  //   cy.get('[role="alert"]').should('exist');
  // });

})
