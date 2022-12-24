<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/19 11:26
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { TimelinePost } from "../utils/interfaces";
import { ref, onMounted,  watch } from "vue";
import {parseHTML} from "../utils/parseHTML";
import { debounce } from "lodash";
import { usePosts } from "../store/posts";
import { useRouter } from "vue-router";

const props = defineProps<{
  post: TimelinePost,
}>();

const title = ref(props.post.title);
const content = ref(props.post.markdown);
const html = ref();
const contentEditable = ref<HTMLDivElement>();
const posts = usePosts();
const router = useRouter();

// watchEffect(() => parseHTML(content.value, html));
watch(content, debounce((newContent)=>{
  parseHTML(newContent, html);
}, 300), {
  immediate: true
});

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

const savePost = async () => {
  const newPost: TimelinePost = {
    ...props.post,
    title: title.value,
    markdown: content.value,
    html: html.value
  };
  await posts.createPost(newPost);
  await router.push("/");
}
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
    <div class="card-footer">
      <div class="card-footer-item is-justify-content-end">
        <button class="button is-primary "
                @click="savePost"
        >
          Save Post
        </button>
      </div>
    </div>
  </div>


</template>

<style lang='scss' scoped>
</style>
