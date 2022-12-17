<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/15 09:10
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { computed } from "vue";
import { TimelinePost } from "../posts";
import { DateTime } from "luxon";
import TimelineItem from "./TimelineItem.vue";
import { usePosts } from "../store/posts";
import { periods } from "../constants";

const postsStore = usePosts();

const posts = computed<TimelinePost[]>(() => {
  return postsStore.ids
    .map( id => {
      const post = postsStore.all.get(id);
      // add type guard to address the possibility that post can be undefined
      if (!post) {
        throw new Error(`Post with id of ${id} was expected but not found.`)
      }
      return {
        ...post,
        created: DateTime.fromISO(post.created)
      }})
    .filter(post => {
      if (postsStore.selectedPeriod === "Today") {
        return post.created >= DateTime.now().minus({day: 1});
      }
      if (postsStore.selectedPeriod === "This Week") {
        return (post.created >= DateTime.now().minus({week: 1}));
      }
      return post
    });
});

</script>

<template>
  <nav class="is-primary panel">
<!--    {{ selectedPeriod }}-->
    <span class="panel-tabs">
      <a v-for="period of periods"
         :key="period"
         @click.prevent="postsStore.setSelectedPeriod(period)"
         :class="{'is-active': period === postsStore.selectedPeriod}"
         href="">
        {{ period }}
      </a>
    </span>
    <TimelineItem
      v-for="post of posts"
      :key="post"
      :post="post" />
  </nav>
</template>

<style lang='scss' scoped>

</style>
