<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/15 09:10
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { ref, Ref, computed } from "vue";
import { TimelinePost } from "../posts";
import { DateTime } from "luxon";
import TimelineItem from "./TimelineItem.vue";
import { usePosts } from "../store/posts";

const postsStore = usePosts();

// Using 'as const' and typeof eliminating repetition in code
const periods = ["Today", "This Week", "This Month"] as const;

type Period = typeof periods[number];

const selectedPeriod: Ref<Period> = ref<Period>("Today");

const selectPeriod = (period: Period) => {
  selectedPeriod.value = period;
}

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
      if (selectedPeriod.value === "Today") {
        return post.created >= DateTime.now().minus({day: 1});
      } else if (selectedPeriod.value === "This Week") {
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
         @click.prevent="selectPeriod(period)"
         :class="{'is-active': period === selectedPeriod}"
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
