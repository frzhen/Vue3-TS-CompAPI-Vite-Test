<!--
  * @Author: Fred R. Zhen
  * @Date: 2023/1/2 21:42
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import PostWriter from "../components/PostWriter.vue";
import {useRoute, useRouter} from "vue-router";
import { usePosts } from "../store/posts";
import {Post} from "../utils/interfaces";

const route = useRoute();
const router = useRouter();
const postsStore = usePosts();
// get id from routing
const id = route.params.id as string;
const post = postsStore.all.get(id);

if (!post) {
  throw Error(`Post with id ${id} was not found`);
}
async function handleSubmit(post: Post) {
  await postsStore.updatePost(post);
  await router.push("/");
}
</script>

<template>
  <div class="container mx-6 my-3">
    <div class="box">
      <div class="title is-4">
        Edit Post
      </div>
      <PostWriter :post="post" @submit="handleSubmit"/>
    </div>

  </div>

</template>

<style lang='scss' scoped>

</style>
