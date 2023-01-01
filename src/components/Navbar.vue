<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/19 09:37
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { useModal } from "../composables/modal";
import SignupForm from "./SignupForm.vue";
import { useUsers } from "../store/users";

const modal = useModal();
const usersStore = useUsers();

</script>

<template>
  <div class="navbar mx-6">
    <div class="navbar-end">
      <div v-if="usersStore.currentUserId" class="buttons">
        <button class="button is-danger is-outlined" @click="usersStore.logout()">
          <i class="fa-solid fa-right-to-bracket mr-3" />
          Log out
        </button>
        <RouterLink to="/posts/new" class="button is-primary is-outlined mr-5">
          <i class="fa-solid fa-plus mr-3" />
          New Post
        </RouterLink>
      </div>
      <div v-else class="buttons">
        <button class="button is-danger is-outlined" @click="modal.showModal()">
          <i class="fa-solid fa-right-to-bracket mr-3" />
          Sign up
        </button>
        <RouterLink to="/posts/new" class="button is-primary is-outlined mr-5">
          <i class="fa-solid fa-plus mr-3" />
          Sign in
        </RouterLink>
      </div>
    </div>
  </div>
  <Teleport to="#signInModal">
    <SignupForm />
  </Teleport>
</template>

<style lang='scss' scoped>

</style>
