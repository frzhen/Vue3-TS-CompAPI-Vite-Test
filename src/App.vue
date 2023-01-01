<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
import { useModal } from "./composables/modal";
import { computed } from "vue";
import { useUsers } from "./store/users";

const signInModal = useModal();
const usersStore = useUsers();
const modalStyle = computed(() => {
  return {
    display: signInModal.show.value ? 'block' : 'none'
  }
});

usersStore.authenticate();
</script>
<template>
  <div class="modal" :style="modalStyle">
    <div class="modal-background">
      <div class="modal-content">
        <div id="signInModal">
        </div>
      </div>
    </div>
    <button class="modal-close is-large" @click="signInModal.hideModal()"></button>
  </div>
  <div class="container">
    <Navbar />
    <RouterView />
  </div>
</template>

<style lang="scss">
</style>
