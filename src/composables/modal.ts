/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/25 11:59
 * @Email: fred.zhen@gmail.com
 */
import { ref, shallowRef } from "vue";
import RegisterForm from "../components/RegisterForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { authenticatingType } from "../utils/constants";

const show = ref(false);
const component = shallowRef();


export const useModal = () => {
  return {
    show,
    component,
    showModal: (authType: authenticatingType) => {
      show.value = true;
      switch (authType) {
        case authenticatingType.register: return component.value = RegisterForm;
        case authenticatingType.logIn: return component.value= LoginForm;
      }
    },
    hideModal: () => (show.value = false),
  };
}
