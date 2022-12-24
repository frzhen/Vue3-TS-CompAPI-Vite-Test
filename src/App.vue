<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
</script>
<template>
  <div class="modal">
    <div class="modal-background">
      <div class="modal-content">
        <div id="singInModal">

        </div>
      </div>
    </div>
    <button class="modal-close is-large">
      log in
    </button>
  </div>
  <div class="container">
    <Navbar />
    <RouterView />
  </div>
</template>

<style lang="scss">
.modal {
  display: none;
  color: white;
}
</style>
