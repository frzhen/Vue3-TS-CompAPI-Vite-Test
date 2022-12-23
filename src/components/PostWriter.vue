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

  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        <span class="mr-3">
          Title:
        </span>
        <input type="text" class="input" v-model="title">
      </div>
    </div>
    <div class="card-content mb-1 pb-1 is-justify-content-flex-end">
      <!-- TODO: add change left2right display to top-down display -->
      <!-- TODO: add preview highlight theme selection here -->
      <span class="">
        icons
      </span>
    </div>
    <div class="card-content pt-1">
      <div class="columns">
        <div class="column">
          <div class="panel">
            <div class="panel-heading">
              <div class="title is-6">
                Markdown Editor:
              </div>
            </div>
            <div class="panel-block">
              <div contenteditable
                   ref="contentEditable"
                   @input="handleInput"
              />
            </div>
          </div>
        </div>
        <div class="column">
          <div class="tile">
            <div class="content">
              <p class="title is-6 my-4 has-text-info">
                Preview:
              </p>
              <p v-html="html" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang='scss' scoped>
</style>
