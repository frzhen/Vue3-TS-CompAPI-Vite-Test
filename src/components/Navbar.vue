<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/19 09:37
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { useModal } from "../composables/modal";
import { useUsers } from "../store/users";

const modal = useModal();
const usersStore = useUsers();

</script>

<template>
  <div class="navbar mx-6">
    <div class="navbar-end">
      <div v-if="usersStore.currentUserId" class="buttons">
        <button class="button is-danger is-outlined" @click="usersStore.logout()">
          Log out
          <i class="fa-solid fa-right-from-bracket ml-3" />
        </button>
        <RouterLink to="/posts/new" class="button is-primary is-outlined mr-5">
          <i class="fa-solid fa-plus mr-3" />
          New Post
        </RouterLink>
      </div>
      <div v-else class="buttons">
        <button class="button is-danger is-outlined" @click="modal.showModal('signUp')">
          <i class="fa-solid fa-user-plus mr-3" />
          Sign up
        </button>
        <button class="button is-primary is-outlined" @click="modal.showModal('signIn')">
          <i class="fa-solid fa-right-to-bracket mr-3" />
          Sign in
        </button>
      </div>
    </div>
  </div>
  <Teleport to="#signInModal">
    <component :is="modal.component.value" />
  </Teleport>
</template>

<style lang='scss' scoped>

</style>
