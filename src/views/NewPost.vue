<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/19 09:40
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import PostWriter from "../components/PostWriter.vue";
import {Post, TimelinePost} from "../utils/interfaces";
import { DateTime } from "luxon";
import {useUsers} from "../store/users";
import {useRouter} from "vue-router";
import {usePosts} from "../store/posts";

const router = useRouter();
const postsStore = usePosts();
const usersStore = useUsers();

if (!usersStore.currentUserId) {
  throw Error('User was not found');
}

const post: TimelinePost = {
  id: "-1",
  title: "Title",
  authorId: usersStore.currentUserId,
  created: DateTime.now(),
  markdown: '## Title',
  html: '<h2>Title</h2>'
}

async function handleSubmit(post: Post) {
  await postsStore.createPost(post);
  await router.push("/");
}
</script>

<template>
  <div class="container mx-6 my-3">
    <div class="box">
      <div class="title is-4">
        New Post
      </div>
      <PostWriter :post="post" @submit="handleSubmit" />
    </div>

  </div>

</template>

<style lang='scss' scoped>

</style>
