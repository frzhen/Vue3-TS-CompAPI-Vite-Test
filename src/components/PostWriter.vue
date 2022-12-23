<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/19 11:26
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { TimelinePost } from "../utils/interfaces";
import { ref, onMounted, watchEffect } from "vue";
import { marked } from "marked"
import highlightjs from "highlight.js";

const props = defineProps<{
  post: TimelinePost,
}>();

const title = ref(props.post.title);
const content = ref(props.post.markdown);
const html = ref();
const contentEditable = ref<HTMLDivElement>();

watchEffect(() => {
  marked.parse(content.value, {
    gfm: true,
    breaks: true,
    highlight: (code) => {
      return highlightjs.highlightAuto(code).value;
    }
  }, (err, parseResult) => {
    html.value = parseResult;
  });
});

// the following code are exactly the same as using watchEffect
//
// import watch method to use the following code snippet
//
// watch(content, (newContent) => {
//   marked.parse(newContent, {
//     gfm: true,
//     breaks: true,
//     highlight: (code) => {
//       return highlightjs.highlightAuto(code).value;
//     }
//   }, (err, parseResult) => {
//     html.value = parseResult;
//   });
// }, {
//   // make the method to be called when the value is set for the first time
//   // without this option, initial rendering will not happen
//   immediate: true
// });

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
  <!-- TODO: add change left2right display to top-down display -->
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
  <div class="box">

    <div class="columns">
      <div class="column">
        <div class="label">Markdown Editor:</div>
        <div contenteditable
             ref="contentEditable"
             @input="handleInput"
             class="textarea"
        />
      </div>
      <div class="column">
        <div class="label">Preview:</div>
        <div v-html="html" />
      </div>
    </div>
  </div>


</template>

<style lang='scss' scoped>

</style>
