/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/25 11:59
 * @Email: fred.zhen@gmail.com
 */
import { ref } from "vue";

const show = ref(false);

export const useModal = () => {
  return {
    show,
    showModal: () => (show.value = true),
    hideModal: () => (show.value = false),
  };
}
