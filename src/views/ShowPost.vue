<!--
  * @Author: Fred R. Zhen
  * @Date: 2023/1/2 12:39
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
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
console.log(post.html);
</script>

<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-two-thirds">
      <div class="card">
        <div class="card-header">
          <div class="card-header-title">
            {{ post.title }}
          </div>
        </div>
        <div class="card-content" v-html="post.html" />
      </div>

    </div>
    <div class="column"></div>
  </div>
</template>

<style lang='scss' scoped>

</style>
