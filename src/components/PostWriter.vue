<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/19 11:26
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import {Post} from "../utils/interfaces";
import { ref, onMounted,  watch } from "vue";
import {parseHTML} from "../utils/parseHTML";
import { debounce } from "lodash";
import { usePosts } from "../store/posts";
import { useRouter } from "vue-router";
import { useUsers } from "../store/users";

const props = defineProps<{
  post: Post,
}>();

const emit = defineEmits<{
  (event: "submit", post: Post ): void;
}>();
const title = ref(props.post.title);
const content = ref(props.post.markdown);
const html = ref();
const contentEditable = ref<HTMLDivElement>();
const posts = usePosts();
const router = useRouter();
const usersStore = useUsers();

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
  console.log(contentEditable.value);
});

const handleInput = () => {
  if ( !contentEditable.value ) {
    throw Error('ContentEditable DOM node was not found');
  }
  content.value = contentEditable.value.innerText
};

const savePost = async () => {
  if (!usersStore.currentUserId) {
    throw Error('User was not found');
  }
  const newPost: Post = {
    ...props.post,
    created: props.post.created,
      // typeof props.post.created === 'string' ? props.post.created : props.post.created.toISO(),
    title: title.value,
    authorId: usersStore.currentUserId,
    markdown: content.value,
    html: html.value
  };
  emit('submit', newPost);
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
    <div class="card-content">
      <div class="columns">
        <div class="column">
          <div class="panel">
            <div class="panel-heading">
              <div class="title is-6">
                Markdown Editor:
              </div>
            </div>
            <div class="panel-block">
              <div
                contenteditable
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
        <button
          class="button is-primary "
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
