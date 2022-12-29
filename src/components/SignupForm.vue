<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/29 19:31
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import FormInput from "./FormInput.vue";
import { computed, ref } from "vue";
import { validate, length, required } from '../utils/validation';
import { NewUser } from "../utils/users";

const username = ref('');
const usernameStatus = computed(() => {
return validate(
  username.value,
  [required, length({min: 5, max: 10})]);
});

const password = ref('');
const passwordStatus = computed(() => {
  return validate(
    password.value,
    [required, length({min: 8, max: 40})]);
});

const isInvalid = computed(() => {
  return (!usernameStatus.value.valid || !passwordStatus.value.valid)
})
function handleSubmit() {
  if (isInvalid.value) {
    return
  }
  const newUser: NewUser = {
    username: username.value,
    password: password.value
  }

  console.log(newUser);
}
</script>
<template>
  <form class="form" @submit.prevent="handleSubmit">
    <FormInput name="UserName" v-model="username" :status="usernameStatus"/>
    <FormInput name="Password" v-model="password" :status="passwordStatus"/>
    <div class="buttons is-centered">
      <button class="button is-primary" :disabled="isInvalid">Submit</button>
    </div>
  </form>
</template>

<style lang='scss' scoped>
.form {
  background: white;
  padding: 30px;
  margin-top: 50px;
  border-radius: 6px;

}

</style>
