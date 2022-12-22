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
const content = ref(props.post.markdown);
const contentEditable = ref<HTMLDivElement>();

onMounted(() => {
  if (!contentEditable.value) {
    throw Error('ContentEditable DOM node was not found');
  }
  contentEditable.value.innerText = content.value;
});

const handleInput = () => {
  if ( !contentEditable.value ) {
    throw Error('ContentEditable DOM node was not found');
  }
  content.value = contentEditable.value.innerText
};
</script>

<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">
          Post Title
        </div>
        <input type="text" class="input" v-model="title">
      </div>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <div contenteditable ref="contentEditable" @input="handleInput" />
    </div>
    <div class="column">
      {{ content }}
    </div>
  </div>

</template>

<style lang='scss' scoped>

</style>
