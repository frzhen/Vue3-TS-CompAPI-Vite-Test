<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/29 19:31
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import { NewUser } from "../utils/users";
import { useUsers } from "../store/users";
import { useModal } from "../composables/modal";
import UserForm from "./UserForm.vue";

const usersStore = useUsers();
const modal = useModal();

async function handleSignup ( newUser: NewUser) {
    await usersStore.createUser(newUser);
    modal.hideModal();
}
</script>
<template>
 <UserForm @submit="handleSignup"/>
</template>

<style lang='scss' scoped>

</style>
