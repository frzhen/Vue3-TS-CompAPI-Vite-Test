<!--
  * @Author: Fred R. Zhen
  * @Date: 2023/1/2 12:39
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { usePosts } from "../store/posts";
import {useUsers} from "../store/users";
import {computed} from "vue";

const route = useRoute();
const postsStore = usePosts();
const usersStore = useUsers();
// get id from routing
const id = route.params.id as string;
const post = postsStore.all.get(id);

if (!post) {
  throw Error(`Post with id ${id} was not found`);
}

const canEdit = computed(() => {
  if (!usersStore.currentUserId) {
    return false;
  }
  return usersStore.currentUserId === post.authorId;

});
</script>

<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-two-thirds">
      <RouterLink
        v-if="canEdit"
        :to="`/posts/${post.id}/edit`"
        class="button is-link is-outlined is-rounded py-2 mb-3">
        Edit Post
      </RouterLink>
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
