<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
import { useModal } from "./composables/modal";
import { computed } from "vue";

const modal = useModal();
const modalStyle = computed(() => {
  return {
    display: modal.show.value ? 'block' : 'none'
  }
});
</script>
<template>
  <div class="modal" :style="modalStyle">
    <div class="modal-background">
      <div class="modal-content">
        <div id="modal">
        </div>
      </div>
    </div>
    <button class="modal-close is-large" @click="modal.hideModal()"></button>
  </div>
  <div class="container">
    <Navbar />
    <RouterView />
  </div>
</template>

<style lang="scss">
</style>
