<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/19 11:26
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { TimelinePost } from "../utils/interfaces";
import { ref, onMounted  } from "vue";

const props = defineProps<{
  post: TimelinePost,
}>();

const title = ref(props.post.title);

const contentEditable = ref();

console.log(contentEditable.value);

onMounted(() => {
  console.log('Mounted');
  console.log(contentEditable.value);
})
</script>

<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">
          Post Title
        </div>
        <input type="text" class="input" v-model="title">
        {{ title }}
      </div>
      <div contenteditable ref="contentEditable" />
    </div>
  </div>

</template>

<style lang='scss' scoped>

</style>
