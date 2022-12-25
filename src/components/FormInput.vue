<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/25 13:25
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
defineProps<{
  name: string,
  modelValue: string,
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>();

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}
</script>

<template>
  <div class="field">
    <label :for="name" class="label">{{ name }}</label>
    <div class="control">
      <input type="text" :id="name" class="input" :value="modelValue" @input="handleInput">
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
