<script lang="ts" setup>
import FormInput from "./components/FormInput.vue";
import Navbar from "./components/Navbar.vue";
import { useModal } from "./composables/modal";
import { computed, ref } from "vue";

const signInModal = useModal();
const modalStyle = computed(() => {
  return {
    display: signInModal.show.value ? 'block' : 'none'
  }
});
const username = ref('');
</script>
<template>
  <div class="modal" :style="modalStyle">
    <div class="modal-background">
      <div class="modal-content">
        <div id="signInModal">

        </div>
      </div>
    </div>
    <button class="modal-close is-large" @click="signInModal.hideModal()">
    </button>
  </div>
  <div class="container">
    <FormInput name="UserName" v-model="username" />
    <Navbar />
    <RouterView />
    {{ username }}
  </div>
</template>

<style lang="scss">
.modal {
  color: white;
}
</style>
