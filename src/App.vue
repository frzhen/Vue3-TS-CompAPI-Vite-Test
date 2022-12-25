<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
import { useModal } from "./composables/modal";
import {computed} from "vue";

const signInModal = useModal();
const modalStyle = computed(() => {
  return {
    display: signInModal.show.value ? 'block' : 'none'
  }
})

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
    <Navbar />
    <RouterView />
  </div>
</template>

<style lang="scss">
.modal {
  color: white;
}
</style>
