<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/15 09:10
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import TimelineItem from "./TimelineItem.vue";
import { usePosts } from "../store/posts";
import { periods } from "../utils/constants";

const postsStore = usePosts();

await postsStore.fetchPosts();
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
      v-for="post of postsStore.filteredPosts"
      :key="post.id"
      :post="post" />
  </nav>
</template>

<style lang='scss' scoped>
.panel {
  background-color: #fff;
}
</style>
