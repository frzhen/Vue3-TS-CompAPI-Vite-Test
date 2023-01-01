/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/25 11:59
 * @Email: fred.zhen@gmail.com
 */
import { ref, shallowRef } from "vue";
import SignupForm from "../components/SignupForm.vue";
import SigninForm from "../components/SigninForm.vue";

const show = ref(false);
const component = shallowRef();


export const useModal = () => {
  return {
    show,
    component,
    showModal: (type: 'signUp' | 'signIn') => {
      show.value = true;
      switch (type) {
        case 'signUp': return component.value = SignupForm;
        case 'signIn': return component.value= SigninForm;
      }
    },
    hideModal: () => (show.value = false),
  };
}
