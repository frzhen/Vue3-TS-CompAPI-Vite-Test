<!--
  * @Author: Fred R. Zhen
  * @Date: 2023/1/1 19:13
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import FormInput from "./FormInput.vue";
import { computed, ref } from "vue";
import { validate, length, required } from '../utils/validation';
import { NewUser } from "../utils/users";

defineProps<{
  error?: string;
}>();
const emit = defineEmits<{
  (event: 'submit', payload: NewUser): void
}>();
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
});

async function handleSubmit() {
  if (isInvalid.value) {
    return
  }
  const newUser: NewUser = {
    username: username.value,
    password: password.value
  }
  try{
    emit('submit', newUser);
  } catch (e) {}
}
</script>
<template>
  <form class="form" @submit.prevent="handleSubmit">
    <FormInput data-test-id="username" type="text" name="UserName" v-model="username" :status="usernameStatus"/>
    <FormInput data-test-id="password" type="password" name="Password" v-model="password" :status="passwordStatus"/>
    <div v-if="error" class="is-danger help">
      {{ error }}
    </div>
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
