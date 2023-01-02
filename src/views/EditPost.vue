<!--
  * @Author: Fred R. Zhen
  * @Date: 2023/1/2 21:42
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import PostWriter from "../components/PostWriter.vue";
import { useRoute } from "vue-router";
import { usePosts } from "../store/posts";

const route = useRoute();
const postsStore = usePosts();
// get id from routing
const id = route.params.id as string;
const post = postsStore.all.get(id);

if (!post) {
  throw Error(`Post with id ${id} was not found`);
}
</script>

<template>
  <div class="container mx-6 my-3">
    <div class="box">
      <div class="title is-4">
        Edit Post
      </div>
      <PostWriter :post="post" />
    </div>

  </div>

</template>

<style lang='scss' scoped>

</style>
