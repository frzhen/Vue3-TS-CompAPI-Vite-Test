<!--
  * @Author: Fred R. Zhen
  * @Date: 2023/1/1 17:44
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import { ref } from "vue";
import { NewUser } from "../utils/users";
import { useUsers } from "../store/users";
import { useModal } from "../composables/modal";
import UserForm from "./UserForm.vue";
import {apiUrl} from "../utils/constants";

const usersStore = useUsers();
const modal = useModal();
const error = ref('');

async function handleLogin (newUser: NewUser) {
  //1. request
  const body = JSON.stringify(newUser);
  const res = await window.fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  //2. fail -> 401, 404 -> error
  //3. success -> authenticate(), hideModal
  if ([401, 404].includes(res.status)) {
    error.value = "Username or password was incorrect"
  } else {
    await usersStore.authenticate();
    modal.hideModal();
  }

}
</script>
<template>
  <UserForm data-test-id="login-form" @submit="handleLogin" :error="error"/>
</template>

<style lang='scss' scoped>

</style>
