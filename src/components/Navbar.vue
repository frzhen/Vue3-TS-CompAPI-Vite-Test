<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/19 09:37
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useModal } from "../composables/modal";
import { useUsers } from "../store/users";
import {authenticatingType} from "../utils/constants";

const modal = useModal();
const usersStore = useUsers();
const router = useRouter();

async function logout() {
  await usersStore.logout();
  await router.push({path: "/"});
}
</script>

<template>
  <div class="navbar mx-6">
    <div class="navbar-end">
      <div v-if="usersStore.currentUserId" class="buttons">
        <button id="logout" class="button is-danger is-outlined" @click="logout()">
          Log out
          <i class="fa-solid fa-right-from-bracket ml-3" />
        </button>
        <RouterLink to="/posts/new" class="button is-primary is-outlined mr-5">
          <i class="fa-solid fa-plus mr-3" />
          New Post
        </RouterLink>
      </div>
      <div v-else class="buttons">
        <button id="register" class="button is-danger is-outlined" @click="modal.showModal(authenticatingType.register)">
          <i class="fa-solid fa-user-plus mr-3" />
          Register
        </button>
        <button data-testId="login" class="button is-primary is-outlined" @click="modal.showModal(authenticatingType.logIn)">
          <i class="fa-solid fa-right-to-bracket mr-3" />
          Log in
        </button>
      </div>
    </div>
  </div>
  <Teleport to="#modal">
    <component :is="modal.component.value" />
  </Teleport>
</template>

<style lang='scss' scoped>

</style>
