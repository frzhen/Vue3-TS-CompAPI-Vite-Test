<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/19 09:37
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { useModal } from "../composables/modal";

const modal = useModal();

</script>

<template>
  <div class="navbar mx-6">
    <div class="navbar-end">
      <div class="buttons">
        <button class="button is-danger is-outlined" @click="modal.showModal()">
          <i class="fa-solid fa-right-to-bracket mr-3" />
          Sign in
        </button>
        <RouterLink to="/posts/new" class="button is-primary is-outlined mr-5">
          <i class="fa-solid fa-plus mr-3" />
          New Post
        </RouterLink>
      </div>
    </div>
  </div>
  <Teleport to="#signInModal">
    Content to be rendered
  </Teleport>
</template>

<style lang='scss' scoped>

</style>
